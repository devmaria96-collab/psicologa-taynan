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
  duration = 600,
  className = "",
}: FadeInProps) {
  const [ref, isVisible] = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();

  const getTransform = () => {
    if (prefersReducedMotion) return "none";
    
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      default:
        return "translateY(30px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible || prefersReducedMotion ? 1 : 0,
        transform: isVisible || prefersReducedMotion ? "none" : getTransform(),
        transition: prefersReducedMotion
          ? "none"
          : `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: prefersReducedMotion ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
