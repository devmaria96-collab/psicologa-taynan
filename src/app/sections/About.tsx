"use client";

import { useState } from "react";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, placeholder: "Foto 1" },
    { id: 2, placeholder: "Foto 2" },
    { id: 3, placeholder: "Foto 3" },
    { id: 4, placeholder: "Foto 4" },
    { id: 5, placeholder: "Foto 5" },
  ];

  const getVisibleImages = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // desktop
      if (window.innerWidth >= 768) return 2; // tablet
      return 1; // mobile
    }
    return 3; // default desktop
  };

  const visibleCount = getVisibleImages();

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImagesArray = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1200px] px-6 py-20 md:px-10"
    >
      <div className="mb-12 text-center">
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#3D3A38] md:text-lg">
          Thaynan Azevedo é psicóloga, registrada no Conselho Regional de Psicologia sob o CRP 00000, e realiza atendimento psicológico online para adolescentes e adultos.
        </p>
      </div>

      <div className="relative">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          {getVisibleImagesArray().map((image) => (
            <div
              key={image.id}
              className="aspect-square h-64 w-full max-w-sm rounded-2xl bg-[#FFD69B] md:h-80"
            >
              <div className="flex h-full w-full items-center justify-center text-[#3D3A38]">
                {image.placeholder}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevImage}
          aria-label="Imagem anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full bg-[#3D3A38] p-3 text-white transition hover:bg-[#2D2A28] md:-translate-x-12"
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
          onClick={nextImage}
          aria-label="Próxima imagem"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-[#3D3A38] p-3 text-white transition hover:bg-[#2D2A28] md:translate-x-12"
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
      </div>
    </section>
  );
}
