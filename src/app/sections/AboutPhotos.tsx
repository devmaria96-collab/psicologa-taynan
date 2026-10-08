"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import type { SitePhoto } from "../utils/photos";
import styles from "./AboutPhotos.module.css";

type AboutPhotosProps = {
  photos: SitePhoto[];
};

const STAGGER_MS = 600;

export default function AboutPhotos({ photos }: AboutPhotosProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const total = photos.length;

  useEffect(() => {
    const element = rootRef.current;
    if (!element || total === 0) return;

    if (prefersReducedMotion) {
      setVisibleCount(total);
      return;
    }

    let timers: ReturnType<typeof setTimeout>[] = [];
    let started = false;

    const startSequence = () => {
      if (started) return;
      started = true;

      for (let index = 0; index < total; index += 1) {
        timers.push(
          setTimeout(() => {
            setVisibleCount((current) => Math.max(current, index + 1));
          }, index * STAGGER_MS),
        );
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startSequence();
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [prefersReducedMotion, total]);

  return (
    <div
      ref={rootRef}
      className={`${styles.gallery} ${prefersReducedMotion ? styles.reduced : ""}`}
      aria-label="Galeria de fotografias"
    >
      {photos.map((photo, index) => {
        const isVisible = prefersReducedMotion || index < visibleCount;

        return (
          <figure
            key={photo.src}
            className={`${styles.item} ${isVisible ? styles.itemVisible : ""}`}
          >
            {photo.available ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 180px"
                priority={index < 2}
                className={styles.image}
                style={{ objectPosition: photo.objectPosition }}
              />
            ) : (
              <span className={styles.placeholder} aria-hidden="true" />
            )}
          </figure>
        );
      })}
    </div>
  );
}
