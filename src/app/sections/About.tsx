import FadeIn from "../ui/FadeIn";
import PhotoCarousel, { type GalleryPhoto } from "../Components/PhotoCarousel";
import { siteConfig } from "@/config/site";

const photos: GalleryPhoto[] = [
  {
    src: "/images/sobre/foto-1.jpg",
    alt: "Taynan Azevedo, psicóloga, em retrato profissional",
  },
  {
    src: "/images/sobre/foto-2.jpg",
    alt: "Taynan Azevedo em momento de atendimento acolhedor",
  },
  {
    src: "/images/sobre/foto-3.jpg",
    alt: "Retrato editorial de Taynan Azevedo",
  },
  {
    src: "/images/sobre/foto-4.jpg",
    alt: "Taynan Azevedo em ambiente de trabalho calmo",
  },
  {
    src: "/images/sobre/foto-5.jpg",
    alt: "Fotografia profissional de Taynan Azevedo",
  },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <FadeIn>
          <header className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4 tracking-[0.22em] text-[var(--color-muted)]">
              Conheça a profissional
            </p>
            <h2 className="font-display text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[var(--color-foreground)]">
              Muito prazer, sou Taynan.
            </h2>
            <p className="text-pretty mx-auto mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
              Um espaço de escuta, acolhimento e transformação.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-12 md:mt-16">
            <PhotoCarousel photos={photos} />
          </div>
        </FadeIn>

        <FadeIn delay={260}>
          <div className="mx-auto mt-14 max-w-2xl text-center md:mt-16">
            <p className="text-pretty text-base leading-8 text-[var(--color-muted)] md:text-lg md:leading-8">
              {siteConfig.aboutText}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
