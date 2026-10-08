import FadeIn from "../ui/FadeIn";
import SocialLinks from "../ui/SocialLinks";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "../utils/links";

function BotanicalAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      aria-hidden="true"
      className={`botanical ${className}`}
    >
      <path
        d="M60 150C60 110 38 92 22 70C10 54 14 30 32 24C46 19 58 34 60 52"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M60 150C60 108 82 90 98 68C110 52 106 28 88 22C74 17 62 32 60 50"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M60 150V40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M60 78C48 70 40 54 42 40"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M60 92C74 84 84 66 82 50"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  const titleBase = siteConfig.heroTitle.replace(
    ` ${siteConfig.heroHighlight}`,
    "",
  );

  return (
    <section
      id="inicio"
      className="scroll-section relative flex min-h-[calc(100svh-5.5rem)] flex-col overflow-hidden"
    >
      <div className="site-shell relative flex flex-1 flex-col justify-center py-10 md:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          {/* Coluna esquerda — fotografia em arco */}
          <FadeIn delay={80} direction="left" className="relative order-1 lg:order-1">
            <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none">
              <BotanicalAccent className="absolute -left-6 top-8 h-28 w-20 -rotate-12 sm:-left-10 sm:h-36 sm:w-24 lg:-left-14" />
              <BotanicalAccent className="absolute -right-4 bottom-10 h-24 w-16 rotate-[18deg] scale-x-[-1] sm:-right-8 sm:h-32 sm:w-20" />

              <div className="photo-arch relative mx-auto aspect-[3/4] w-[88%] bg-[var(--color-surface-secondary)] sm:w-[85%]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,253,250,0.45),transparent_55%)]" />
                {/* Placeholder elegante até haver foto profissional em /public */}
                <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
                  <p className="font-display text-2xl font-medium tracking-wide text-[var(--color-foreground)] sm:text-3xl">
                    Foto profissional
                  </p>
                  <p className="mt-2 max-w-[14rem] text-sm leading-6 text-[var(--color-muted)]">
                    Espaço reservado para a fotografia em formato arco
                  </p>
                </div>
                {/*
                  Quando a foto estiver disponível, use:
                  <Image
                    src="/images/taynan-hero.jpg"
                    alt="Taynan Azevedo, psicóloga"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 85vw, 45vw"
                  />
                */}
              </div>
            </div>
          </FadeIn>

          {/* Coluna direita — conteúdo */}
          <div className="relative order-2 flex flex-col lg:order-2 lg:pl-2">
            <FadeIn delay={0}>
              <p className="eyebrow mb-5 text-[0.68rem] tracking-[0.22em] text-[var(--color-muted)] sm:mb-6">
                {siteConfig.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="font-display text-balance text-[clamp(2.35rem,5.4vw,4.35rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--color-foreground)]">
                {titleBase}{" "}
                <em className="font-medium italic text-[var(--color-primary)]">
                  {siteConfig.heroHighlight}
                </em>
              </h1>
            </FadeIn>

            <FadeIn delay={180}>
              <p className="text-pretty mt-6 max-w-md text-[0.975rem] leading-7 text-[var(--color-muted)] sm:mt-7 sm:text-base sm:leading-8">
                {siteConfig.description}
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <p className="mt-6 text-sm font-medium tracking-[0.01em] text-[var(--color-foreground)] sm:mt-7">
                {siteConfig.name}
                <span className="mx-2 text-[var(--color-accent)]" aria-hidden="true">
                  •
                </span>
                Psicóloga
                <span className="mx-2 text-[var(--color-accent)]" aria-hidden="true">
                  •
                </span>
                CRP {siteConfig.crp}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-8">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                  aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
                >
                  Agendar consulta
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={380}>
              <ul
                className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-2 sm:mt-12"
                aria-label="Valores do atendimento"
              >
                {["Escuta", "Acolhimento", "Transformação"].map((word) => (
                  <li
                    key={word}
                    className="font-script text-[1.65rem] leading-none text-[var(--color-secondary)] sm:text-[1.9rem]"
                  >
                    {word}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Rodapé da Hero */}
      <FadeIn delay={420}>
        <div className="border-t border-[var(--color-border)]/80">
          <div className="site-shell flex flex-col items-start gap-5 py-6 sm:flex-row sm:items-center sm:gap-8 sm:py-7">
            <SocialLinks variant="minimal" />

            <div
              className="hidden h-8 w-px bg-[var(--color-border)] sm:block"
              aria-hidden="true"
            />

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-foreground)]">
                {siteConfig.heroFooterLabel}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {siteConfig.heroFooterText}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
