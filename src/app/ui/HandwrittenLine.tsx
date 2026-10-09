"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import styles from "./HandwrittenLine.module.css";

type HandwrittenLineProps = {
  text?: string;
  className?: string;
};

type LetterMetric = {
  char: string;
  x: number;
  length: number;
};

const VIEW_W = 560;
const VIEW_H = 78;
const BASELINE_Y = 78;
const WRITE_MS = 4000;
const HOLD_MS = 3000;
const ERASE_MS = 900;
const CYCLE_MS = WRITE_MS + HOLD_MS + ERASE_MS;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function easeInCubic(t: number) {
  return t ** 3;
}

export default function HandwrittenLine({
  text = "sou Taynan.",
  className = "",
}: HandwrittenLineProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const letterRefs = useRef<(SVGTextElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const [letters, setLetters] = useState<LetterMetric[]>([]);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof document === "undefined") return;

    const sync = () => setPageVisible(document.visibilityState === "visible");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  useEffect(() => {
    const element = wrapRef.current;
    if (!element) return;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    let cancelled = false;

    const measure = async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.load('400 78px "Allura"');
          await document.fonts.ready;
        }
      } catch {
        // Continua com a métrica disponível.
      }

      if (cancelled) return;

      const measureNode = measureRef.current;
      if (!measureNode) return;

      measureNode.textContent = text;
      const metrics: LetterMetric[] = [];

      for (let index = 0; index < text.length; index += 1) {
        const char = text[index] ?? "";
        try {
          const point = measureNode.getStartPositionOfChar(index);
          // Comprimento aproximado do contorno da letra para o traçado.
          const advance = measureNode.getSubStringLength(index, 1);
          const length = Math.max(48, advance * 3.4);
          metrics.push({ char, x: point.x, length });
        } catch {
          metrics.push({
            char,
            x: index * 22,
            length: 120,
          });
        }
      }

      if (!cancelled) {
        setLetters(metrics);
        setReady(true);
      }
    };

    void measure();
    return () => {
      cancelled = true;
    };
  }, [text]);

  useEffect(() => {
    if (prefersReducedMotion || !ready || letters.length === 0) {
      letterRefs.current.forEach((node) => {
        if (!node) return;
        node.style.strokeDasharray = "none";
        node.style.strokeDashoffset = "0";
        node.style.fill = "var(--color-primary-hover)";
      });
      return;
    }

    const drawable = letters
      .map((letter, index) => ({ letter, index }))
      .filter(({ letter }) => letter.char.trim().length > 0);

    const drawCount = Math.max(drawable.length, 1);
    let startTime = performance.now();
    let pausedAt: number | null = null;

    const paint = (cycleTime: number) => {
      drawable.forEach(({ letter, index }, order) => {
        const node = letterRefs.current[index];
        if (!node) return;

        const length = letter.length;
        node.style.strokeDasharray = `${length}`;
        node.style.stroke = "var(--color-primary)";

        // Cada letra começa em sequência ao longo dos 4s de escrita.
        const slot = WRITE_MS / drawCount;
        const letterStart = order * slot * 0.82;
        const letterDuration = Math.min(WRITE_MS - letterStart, slot * 1.55);

        if (cycleTime < WRITE_MS) {
          const local = clamp((cycleTime - letterStart) / letterDuration);
          const drawn = easeOutCubic(local);
          node.style.strokeDashoffset = `${length * (1 - drawn)}`;
          node.style.fill =
            drawn > 0.82 ? "var(--color-primary-hover)" : "transparent";
          return;
        }

        if (cycleTime < WRITE_MS + HOLD_MS) {
          node.style.strokeDashoffset = "0";
          node.style.fill = "var(--color-primary-hover)";
          return;
        }

        // Reinício suave: desfaz o traçado (não usa fade de opacidade).
        const eraseLocal = clamp((cycleTime - WRITE_MS - HOLD_MS) / ERASE_MS);
        const erased = easeInCubic(eraseLocal);
        node.style.fill = erased > 0.2 ? "transparent" : "var(--color-primary-hover)";
        node.style.strokeDashoffset = `${length * erased}`;
      });

      // Espaços permanecem invisíveis.
      letters.forEach((letter, index) => {
        if (letter.char.trim().length > 0) return;
        const node = letterRefs.current[index];
        if (!node) return;
        node.style.fill = "transparent";
        node.style.stroke = "transparent";
      });
    };

    const tick = (now: number) => {
      const running = inView && pageVisible;

      if (!running) {
        if (pausedAt == null) pausedAt = now;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (pausedAt != null) {
        startTime += now - pausedAt;
        pausedAt = null;
      }

      const cycleTime = (now - startTime) % CYCLE_MS;
      paint(cycleTime);
      rafRef.current = requestAnimationFrame(tick);
    };

    // Estado inicial: nada desenhado.
    paint(0);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, ready, letters, inView, pageVisible]);

  const rootClassName = [
    styles.wrap,
    className,
    prefersReducedMotion ? `${styles.done} ${styles.reduced}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={wrapRef} className={rootClassName} aria-hidden="true">
      <svg
        className={styles.measure}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        aria-hidden="true"
      >
        <text
          ref={measureRef}
          x="2"
          y={BASELINE_Y}
          textAnchor="start"
          dominantBaseline="alphabetic"
          className={styles.letter}
        />
      </svg>

      <svg
        className={styles.svg}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="presentation"
        focusable="false"
        preserveAspectRatio="xMinYMax meet"
      >
        {letters.map((letter, index) => (
          <text
            key={`${letter.char}-${index}`}
            ref={(node) => {
              letterRefs.current[index] = node;
            }}
            className={styles.letter}
            x={letter.x}
            y={BASELINE_Y}
            textAnchor="start"
            dominantBaseline="alphabetic"
          >
            {letter.char === " " ? "\u00A0" : letter.char}
          </text>
        ))}
      </svg>
    </div>
  );
}
