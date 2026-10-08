"use client";

import { useEffect, useState } from "react";
import { sectionIds } from "../utils/links";

export function useActiveSection(defaultId: string = "inicio") {
  const [activeId, setActiveId] = useState(defaultId);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      setActiveId(hash);
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let nextActive = defaultId;
        let highestRatio = 0;

        ratios.forEach((ratio, id) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            nextActive = id;
          }
        });

        if (highestRatio > 0) {
          setActiveId(nextActive);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -48% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [defaultId]);

  return activeId;
}
