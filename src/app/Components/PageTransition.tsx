"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible || prefersReducedMotion ? 1 : 0,
        transform: isVisible || prefersReducedMotion ? "translateY(0)" : "translateY(10px)",
        transition: prefersReducedMotion
          ? "none"
          : "opacity 400ms ease-out, transform 400ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
