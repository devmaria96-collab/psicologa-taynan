"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

interface PhotoCarouselProps {
  photos: string[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window !== "undefined") {
        const nextCount =
          window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        setVisibleCount(nextCount);
        setCurrentIndex((previous) =>
          Math.min(previous, Math.max(0, photos.length - nextCount)),
        );
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [photos.length]);

  const nextSlide = () => {
    if (currentIndex < photos.length - visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(photos.length - visibleCount); // Loop to end
    }
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setCurrentTranslate(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (currentTranslate > threshold) {
      prevSlide();
    } else if (currentTranslate < -threshold) {
      nextSlide();
    }
    setCurrentTranslate(0);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setCurrentTranslate(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (currentTranslate > threshold) {
      prevSlide();
    } else if (currentTranslate < -threshold) {
      nextSlide();
    }
    setCurrentTranslate(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setCurrentTranslate(0);
    }
  };

  const getTranslateX = () => {
    const slideWidth = 100 / visibleCount;
    const baseTranslate = -(currentIndex * slideWidth);
    return baseTranslate + (currentTranslate / (containerRef.current?.offsetWidth || 1)) * 100;
  };

  const totalPositions = Math.max(1, photos.length - visibleCount + 1);

  return (
    <section
      className="relative"
      aria-label="Galeria de fotos"
      aria-roledescription="carrossel"
    >
      <div
        ref={containerRef}
        className="overflow-hidden rounded-[var(--radius-lg)] select-none"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") prevSlide();
          if (event.key === "ArrowRight") nextSlide();
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex ease-out ${isDragging ? "" : "transition-transform duration-500"}`}
          style={{
            transform: `translateX(${getTranslateX()}%)`,
            width: `${(photos.length / visibleCount) * 100}%`,
          }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 md:px-3"
              style={{ width: `${100 / photos.length}%` }}
            >
              <div className="group aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-secondary)] shadow-[var(--shadow-sm)]">
                {photo.startsWith("/images/") ? (
                  <img
                    src={photo}
                    alt={`Foto profissional de Taynan Azevedo ${index + 1}`}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,0.65),transparent_38%)] text-[var(--color-muted)]">
                    <Images className="h-6 w-6 text-[var(--color-primary)]" aria-hidden="true" />
                    <span className="text-sm font-semibold">{photo}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPositions > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPositions }).map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para posição ${index + 1} de ${totalPositions}`}
              aria-current={index === currentIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-7 bg-[var(--color-primary)]"
                  : "w-2 bg-[var(--color-foreground)]/20 hover:bg-[var(--color-accent)]"
              }`}
            />
          ))}
        </div>
      )}

      {photos.length > visibleCount && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Imagem anterior"
            className="icon-button absolute left-3 top-1/2 z-10 -translate-y-1/2 shadow-[var(--shadow-md)] md:left-5"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próxima imagem"
            className="icon-button absolute right-3 top-1/2 z-10 -translate-y-1/2 shadow-[var(--shadow-md)] md:right-5"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </>
      )}
      <p className="sr-only" aria-live="polite">
        Exibindo a posição {currentIndex + 1} de {totalPositions}
      </p>
    </section>
  );
}
