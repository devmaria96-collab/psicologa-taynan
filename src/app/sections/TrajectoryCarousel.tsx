"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import type { TrajectoryMoment } from "../utils/photos";
import styles from "./TrajectoryCarousel.module.css";

type TrajectoryCarouselProps = {
  moments: TrajectoryMoment[];
};

const AUTOPLAY_MS = 7_000;
const SWIPE_THRESHOLD = 48;
const LOOP_COPIES = 2;

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function TrajectoryCarousel({ moments }: TrajectoryCarouselProps) {
  const total = moments.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackIndexRef = useRef(0);
  const pointerStartX = useRef<number | null>(null);
  const dragOffset = useRef(0);
  const progressRef = useRef(0);
  const lastTimestampRef = useRef<number | null>(null);

  const [trackIndex, setTrackIndex] = useState(0);
  const [instantMove, setInstantMove] = useState(false);
  const [slideWidth, setSlideWidth] = useState(280);
  const [gap, setGap] = useState(16);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const loopedMoments = useMemo(
    () => Array.from({ length: LOOP_COPIES }, () => moments).flat(),
    [moments],
  );

  const logicalActive = total > 0 ? ((trackIndex % total) + total) % total : 0;

  const timerRunning =
    !prefersReducedMotion &&
    inView &&
    pageVisible &&
    !userPaused &&
    !dragging &&
    total > 1;

  const setTrackIndexSafe = useCallback((next: number | ((current: number) => number)) => {
    setTrackIndex((current) => {
      const value = typeof next === "function" ? next(current) : next;
      trackIndexRef.current = value;
      return value;
    });
  }, []);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const root = rootRef.current;
    if (!viewport || !root) return;

    const computed = getComputedStyle(root);
    const track = viewport.firstElementChild;
    const gapRaw = track ? getComputedStyle(track).columnGap : "";
    const parsedGap = Number.parseFloat(gapRaw);
    const visible = Number.parseFloat(computed.getPropertyValue("--tc-visible")) || 2.15;
    // columnGap já vem em px. --tc-gap é em rem e parseFloat("0.9rem") viraria 0.9px.
    const nextGap = Number.isFinite(parsedGap) ? parsedGap : 16;
    const width = (viewport.clientWidth - nextGap * (visible - 1)) / visible;

    setGap(nextGap);
    setSlideWidth(Math.max(160, width));
  }, []);

  const resetTimer = useCallback(() => {
    progressRef.current = 0;
    setProgress(0);
    lastTimestampRef.current = null;
  }, []);

  const normalizeTrack = useCallback(() => {
    const current = trackIndexRef.current;
    if (total <= 0 || current < total) return;

    setInstantMove(true);
    const normalized = current % total;
    trackIndexRef.current = normalized;
    setTrackIndex(normalized);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setInstantMove(false);
      });
    });
  }, [total]);

  const goNext = useCallback(() => {
    if (total <= 0) return;
    setTrackIndexSafe((current) => current + 1);
    resetTimer();
  }, [resetTimer, setTrackIndexSafe, total]);

  const goPrev = useCallback(() => {
    if (total <= 0) return;

    if (trackIndexRef.current === 0) {
      // Teleporta para a cópia equivalente e depois anda um passo à esquerda.
      setInstantMove(true);
      trackIndexRef.current = total;
      setTrackIndex(total);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setInstantMove(false);
          setTrackIndexSafe(total - 1);
        });
      });
    } else {
      setTrackIndexSafe((current) => current - 1);
    }

    resetTimer();
  }, [resetTimer, setTrackIndexSafe, total]);

  const goTo = useCallback(
    (index: number) => {
      if (total <= 0) return;

      const currentLogical = ((trackIndexRef.current % total) + total) % total;
      const base = trackIndexRef.current - currentLogical;
      const target = index < currentLogical ? base + total + index : base + index;

      setTrackIndexSafe(target);
      resetTimer();
    },
    [resetTimer, setTrackIndexSafe, total],
  );

  useEffect(() => {
    trackIndexRef.current = trackIndex;
  }, [trackIndex]);

  // Garante o "teleporte" silencioso mesmo se o transitionend não disparar.
  useEffect(() => {
    if (trackIndex < total || instantMove) return;

    const delay = prefersReducedMotion ? 0 : 850;
    const timer = window.setTimeout(() => {
      normalizeTrack();
    }, delay);

    return () => window.clearTimeout(timer);
  }, [trackIndex, total, instantMove, prefersReducedMotion, normalizeTrack]);

  useEffect(() => {
    measure();

    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(() => measure());
    observer.observe(viewport);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const syncVisibility = () => {
      setPageVisible(document.visibilityState === "visible");
    };

    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => {
    if (!timerRunning) {
      lastTimestampRef.current = null;
      return;
    }

    let frame = 0;

    const tick = (timestamp: number) => {
      if (lastTimestampRef.current == null) {
        lastTimestampRef.current = timestamp;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;
      const nextProgress = Math.min(1, progressRef.current + delta / AUTOPLAY_MS);
      progressRef.current = nextProgress;
      setProgress(nextProgress);

      if (nextProgress >= 1) {
        progressRef.current = 0;
        setProgress(0);
        lastTimestampRef.current = timestamp;
        setTrackIndexSafe((current) => current + 1);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [timerRunning, setTrackIndexSafe]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStartX.current = event.clientX;
    dragOffset.current = 0;
    setDragging(true);
    setDragX(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    dragOffset.current = delta;
    setDragX(delta);
  };

  const onPointerUp = () => {
    if (pointerStartX.current === null) return;

    const delta = dragOffset.current;
    pointerStartX.current = null;
    dragOffset.current = 0;
    setDragging(false);
    setDragX(0);

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;

    if (delta < 0) goNext();
    else goPrev();
  };

  if (total === 0) return null;

  const step = slideWidth + gap;
  const trackOffset = trackIndex * step - dragX;
  const suppressTransition = instantMove || dragging || prefersReducedMotion;

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${prefersReducedMotion ? styles.reduced : ""}`}
      style={
        {
          ["--tc-slide-w" as string]: `${slideWidth}px`,
          ["--tc-progress" as string]: String(progress),
        } as CSSProperties
      }
    >
      <div
        ref={viewportRef}
        className={`${styles.viewport} ${dragging ? styles.viewportDragging : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Fotografias de Taynan Azevedo"
      >
        <div
          className={`${styles.track} ${suppressTransition ? styles.trackInstant : ""}`}
          style={{ transform: `translate3d(${-trackOffset}px, 0, 0)` }}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.propertyName !== "transform") return;
            normalizeTrack();
          }}
        >
          {loopedMoments.map((moment, index) => (
            <figure key={`${moment.src}-${index}`} className={styles.slide}>
              <div className={styles.frame}>
                {moment.available ? (
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 42vw, 400px"
                    priority={index < 2}
                    className={styles.image}
                    style={{ objectPosition: moment.objectPosition }}
                    draggable={false}
                  />
                ) : (
                  <span className={styles.placeholder} aria-hidden="true" />
                )}
              </div>
            </figure>
          ))}
        </div>
      </div>

      {!prefersReducedMotion && (
        <div
          className={styles.timerBar}
          role="progressbar"
          aria-label="Progresso até a próxima fotografia"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <span className={styles.timerBarFill} />
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.progress} role="tablist" aria-label="Selecionar fotografia">
          {moments.map((moment, index) => (
            <span key={`progress-${moment.src}`} className="contents">
              {index > 0 && (
                <span className={styles.progressSep} aria-hidden="true">
                  —
                </span>
              )}
              <button
                type="button"
                className={styles.progressItem}
                data-active={index === logicalActive}
                aria-label={`Ir para fotografia ${padIndex(index)}`}
                aria-current={index === logicalActive ? "true" : undefined}
                onClick={() => goTo(index)}
              >
                {padIndex(index)}
              </button>
            </span>
          ))}
        </div>

        <div className={styles.arrows}>
          {!prefersReducedMotion && (
            <button
              type="button"
              className={styles.arrow}
              aria-label={userPaused ? "Continuar carrossel" : "Pausar carrossel"}
              onClick={() => setUserPaused((current) => !current)}
            >
              {userPaused ? (
                <Play size={16} strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Pause size={16} strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          )}
          <button
            type="button"
            className={styles.arrow}
            aria-label="Fotografia anterior"
            onClick={goPrev}
          >
            <ChevronLeft size={18} strokeWidth={1.75} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Próxima fotografia"
            onClick={goNext}
          >
            <ChevronRight size={18} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
