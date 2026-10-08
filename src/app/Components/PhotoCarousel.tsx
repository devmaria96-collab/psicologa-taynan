"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "../hooks";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

interface PhotoCarouselProps {
  photos: GalleryPhoto[];
}

type Breakpoint = "mobile" | "tablet" | "desktop";

const AUTOPLAY_MS = 5000;
const TRANSITION_MS = 700;
const RESUME_DELAY_MS = 4500;
const DRAG_THRESHOLD = 48;

function getRelativeOffset(index: number, current: number, length: number) {
  let diff = index - current;
  const half = Math.floor(length / 2);

  if (diff > half) diff -= length;
  if (diff < -half) diff += length;

  return diff;
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const prefersReducedMotion = useReducedMotion();
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const horizontalLockRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (!photos.length) return;
      setCurrentIndex(((index % photos.length) + photos.length) % photos.length);
    },
    [photos.length],
  );

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const pauseForInteraction = useCallback(() => {
    setIsInteracting(true);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1024) setBreakpoint("desktop");
      else if (width >= 768) setBreakpoint("tablet");
      else setBreakpoint("mobile");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsPageVisible(document.visibilityState === "visible");
    };

    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const shouldAutoplay =
      !prefersReducedMotion &&
      !isHovered &&
      !isInteracting &&
      isPageVisible &&
      photos.length > 1;

    if (!shouldAutoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % photos.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [
    prefersReducedMotion,
    isHovered,
    isInteracting,
    isPageVisible,
    photos.length,
  ]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      pauseForInteraction();
      prev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      pauseForInteraction();
      next();
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    pointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    horizontalLockRef.current = false;
    setIsDragging(false);
    setDragOffset(0);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;

    const deltaX = event.clientX - dragStartXRef.current;
    const deltaY = event.clientY - dragStartYRef.current;

    if (!horizontalLockRef.current) {
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        pointerIdRef.current = null;
        return;
      }

      if (Math.abs(deltaX) < 10) return;

      horizontalLockRef.current = true;
      setIsDragging(true);
      pauseForInteraction();
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    setDragOffset(deltaX);
  };

  const endPointerGesture = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== event.pointerId) return;

    const delta = event.clientX - dragStartXRef.current;
    const wasHorizontal = horizontalLockRef.current;

    setIsDragging(false);
    pointerIdRef.current = null;
    horizontalLockRef.current = false;
    setDragOffset(0);

    if (wasHorizontal && Math.abs(delta) >= DRAG_THRESHOLD) {
      if (delta > 0) prev();
      else next();
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const getSlideStyle = (offset: number): CSSProperties => {
    const duration = prefersReducedMotion || isDragging ? 0 : TRANSITION_MS;
    const dragPercent =
      (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100;

    if (breakpoint === "mobile") {
      return {
        transform: `translate(calc(-50% + ${offset * 108 + dragPercent}%), -50%) scale(${
          offset === 0 ? 1 : 0.94
        })`,
        opacity: offset === 0 ? 1 : 0,
        zIndex: offset === 0 ? 4 : 1,
        transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease`,
        pointerEvents: offset === 0 ? "auto" : "none",
      };
    }

    if (breakpoint === "tablet") {
      const x = offset === 0 ? -16 : offset === 1 ? 34 : offset * 70;
      const visible = offset === 0 || offset === 1;

      return {
        transform: `translate(calc(-50% + ${x + dragPercent * 0.45}%), -50%) scale(${
          offset === 0 ? 1.04 : 0.86
        })`,
        opacity: offset === 0 ? 1 : offset === 1 ? 0.48 : 0,
        zIndex: offset === 0 ? 4 : 2,
        transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease`,
        pointerEvents: visible ? "auto" : "none",
      };
    }

    const x = offset * 56;
    const visible = Math.abs(offset) <= 1;

    return {
      transform: `translate(calc(-50% + ${x + dragPercent * 0.4}%), -50%) scale(${
        offset === 0 ? 1.08 : 0.84
      })`,
      opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.45 : 0,
      zIndex: offset === 0 ? 5 : 3 - Math.abs(offset),
      transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${duration}ms ease`,
      pointerEvents: visible ? "auto" : "none",
    };
  };

  if (!photos.length) return null;

  return (
    <section
      className="relative"
      aria-label="Galeria de fotografias"
      aria-roledescription="carrossel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="relative mx-auto h-[min(78vw,26rem)] w-full max-w-5xl select-none outline-none md:h-[28rem] lg:h-[32rem]"
        style={{ touchAction: "pan-y" }}
        tabIndex={0}
        role="group"
        aria-roledescription="carrossel"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPointerGesture}
        onPointerCancel={endPointerGesture}
      >
        {photos.map((photo, index) => {
          const offset = getRelativeOffset(index, currentIndex, photos.length);
          const isActive = offset === 0;
          const hasFailed = failedImages[photo.src];

          return (
            <figure
              key={photo.src}
              className="absolute left-1/2 top-1/2 aspect-[3/4] w-[78%] overflow-hidden rounded-[1.35rem] bg-[var(--color-surface-secondary)] sm:w-[62%] md:w-[48%] lg:w-[36%]"
              style={getSlideStyle(offset)}
              onClick={() => {
                if (offset === 0 || isDragging || Math.abs(dragOffset) > 8) return;
                pauseForInteraction();
                goTo(index);
              }}
            >
              {!hasFailed ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 78vw, (max-width: 1024px) 48vw, 36vw"
                  className="object-cover object-[center_20%]"
                  draggable={false}
                  priority={isActive}
                  onError={() =>
                    setFailedImages((previous) => ({
                      ...previous,
                      [photo.src]: true,
                    }))
                  }
                />
              ) : (
                <div
                  className="h-full w-full bg-[linear-gradient(160deg,var(--color-soft),var(--color-surface-secondary)_55%,var(--palette-beige)_100%)]"
                  aria-hidden="true"
                />
              )}

              {!isActive && (
                <div
                  className="pointer-events-none absolute inset-0 bg-[var(--color-background)]/20"
                  aria-hidden="true"
                />
              )}
            </figure>
          );
        })}

        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => {
            pauseForInteraction();
            prev();
          }}
          aria-label="Fotografia anterior"
          className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/90 text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-primary)] md:left-2 md:h-11 md:w-11"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => {
            pauseForInteraction();
            next();
          }}
          aria-label="Próxima fotografia"
          className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/90 text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-primary)] md:right-2 md:h-11 md:w-11"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Indicadores da galeria">
        {photos.map((photo, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={photo.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir para fotografia ${index + 1} de ${photos.length}`}
              onClick={() => {
                pauseForInteraction();
                goTo(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-[var(--color-primary)]"
                  : "w-1.5 bg-[var(--color-foreground)]/18 hover:bg-[var(--color-accent)]"
              }`}
            />
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Fotografia {currentIndex + 1} de {photos.length}
      </p>
    </section>
  );
}
