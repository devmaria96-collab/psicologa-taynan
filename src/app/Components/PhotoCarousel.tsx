"use client";

import { useState, useEffect, useRef } from "react";

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
        if (window.innerWidth >= 1024) setVisibleCount(3);
        else if (window.innerWidth >= 768) setVisibleCount(2);
        else setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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

  // Calculate total slides
  const totalSlides = Math.ceil(photos.length / visibleCount);
  const currentSlide = Math.floor(currentIndex / visibleCount);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
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
              <div className="aspect-square rounded-2xl bg-[#FFD69B] overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                {photo.startsWith("/images/") ? (
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[#3D3A38]">
                    {photo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile indicators */}
      {visibleCount === 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleCount)}
              aria-label={`Ir para slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#3D3A38] w-6" : "bg-[#3D3A38] opacity-30"
              }`}
            />
          ))}
        </div>
      )}

      {photos.length > visibleCount && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Imagem anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-[#3D3A38] p-3 text-white transition-all duration-300 hover:bg-[#2D2A28] hover:scale-110 md:-translate-x-12 z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próxima imagem"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-[#3D3A38] p-3 text-white transition-all duration-300 hover:bg-[#2D2A28] hover:scale-110 md:translate-x-12 z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
