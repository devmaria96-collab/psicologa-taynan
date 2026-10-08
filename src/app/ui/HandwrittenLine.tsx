"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import styles from "./HandwrittenLine.module.css";

type HandwrittenLineProps = {
  text?: string;
  className?: string;
};

export default function HandwrittenLine({
  text = "sou Taynan.",
  className = "",
}: HandwrittenLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof document === "undefined") return;

    setPageVisible(document.visibilityState === "visible");

    const onVisibility = () => {
      setPageVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) {
      setReady(true);
      setInView(true);
      return;
    }

    let cancelled = false;

    const prepareFonts = async () => {
      try {
        if (document.fonts?.ready) {
          await document.fonts.load('400 72px "Allura"');
          await document.fonts.ready;
        }
      } catch {
        // Continua mesmo se a fonte ainda não estiver disponível.
      }

      if (!cancelled) setReady(true);
    };

    void prepareFonts();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(element);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const shouldLoop =
    ready && inView && pageVisible && !prefersReducedMotion;

  const textClassName = [
    styles.text,
    prefersReducedMotion
      ? `${styles.done} ${styles.reduced}`
      : ready
        ? styles.animate
        : "",
    ready && !shouldLoop && !prefersReducedMotion ? styles.paused : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={`${styles.wrap} ${className}`}
      aria-hidden="true"
    >
      <svg
        className={styles.svg}
        viewBox="0 0 360 78"
        role="presentation"
        focusable="false"
        preserveAspectRatio="xMinYMax meet"
      >
        {/*
          Baseline do texto = fundo do viewBox, para o flex
          `align-items: baseline` casar com a serifa.
          Descendentes (ex.: “y”) desenham abaixo via overflow: visible.
        */}
        <text
          className={textClassName}
          x="2"
          y="78"
          textAnchor="start"
          dominantBaseline="alphabetic"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}
