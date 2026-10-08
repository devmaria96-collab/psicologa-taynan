import FadeIn from "../ui/FadeIn";
import HandwrittenLine from "../ui/HandwrittenLine";
import AboutPhotos from "./AboutPhotos";
import { siteConfig } from "@/config/site";
import { getSobrePhotos } from "../utils/photos";

export default function About() {
  const photos = getSobrePhotos();

  return (
    <section id="sobre" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14 xl:gap-16">
          <FadeIn>
            <AboutPhotos photos={photos} />
          </FadeIn>

          <FadeIn delay={120}>
            <div className="flex flex-col justify-center lg:pl-1 xl:pl-3">
              <h2 className="text-[clamp(1.85rem,3.6vw,2.85rem)] text-[var(--color-foreground)]">
                <span className="sr-only">Muito prazer, sou Taynan.</span>
                <span
                  className="inline-flex max-w-full flex-wrap items-baseline justify-start gap-x-[0.2em] gap-y-1"
                  aria-hidden="true"
                >
                  <span className="font-display shrink-0 font-medium leading-none tracking-[-0.02em]">
                    Muito prazer,
                  </span>
                  <HandwrittenLine text="sou Taynan." className="min-w-0" />
                </span>
              </h2>

              <p className="text-pretty mt-7 max-w-md font-display text-[1.15rem] leading-9 text-[var(--color-muted)] md:mt-8 md:text-[1.25rem] md:leading-10">
                {siteConfig.aboutText}
              </p>

              <div className="mt-8 border-t border-[var(--color-border)]/80 pt-6 md:mt-10">
                <p className="font-display text-xl font-semibold tracking-[0.02em] text-[var(--color-foreground)] md:text-2xl">
                  {siteConfig.name}
                </p>
                <p className="mt-1.5 text-sm font-medium text-[var(--color-muted)] md:text-[0.95rem]">
                  Psicóloga
                  <span className="mx-2 text-[var(--color-accent)]" aria-hidden="true">
                    •
                  </span>
                  CRP {siteConfig.crp}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
