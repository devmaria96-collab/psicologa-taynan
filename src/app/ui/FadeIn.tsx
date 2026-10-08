"use client";

import { useScrollReveal, useReducedMotion } from "../hooks/index";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 800,
  className = "",
}: FadeInProps) {
  const [ref, isVisible] = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();
  const showContent = isVisible || prefersReducedMotion;

  const getTransform = () => {
    if (prefersReducedMotion) return "none";

    switch (direction) {
      case "up":
        return "translateY(28px)";
      case "down":
        return "translateY(-28px)";
      case "left":
        return "translateX(28px)";
      case "right":
        return "translateX(-28px)";
      default:
        return "translateY(28px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: showContent ? 1 : 0,
        transform: showContent ? "none" : getTransform(),
        transition: prefersReducedMotion
          ? "none"
          : `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
