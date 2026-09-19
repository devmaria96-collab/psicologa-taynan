import { psychologist } from "./Content";
import SocialLinks from "../ui/SocialLinks";
import FadeIn from "../ui/FadeIn";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Video } from "lucide-react";
import { getWhatsAppUrl } from "../utils/links";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="site-shell grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-14 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-20"
    >
      <div className="flex max-w-2xl flex-col">
        <FadeIn delay={0}>
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)]" />
            {psychologist.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-display text-balance text-[clamp(3.25rem,7.2vw,6.25rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[var(--color-foreground)]">
            Psicoterapia para uma vida mais leve e consciente
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8 max-w-xl">
            <p className="text-pretty text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
              Trabalho parte da escuta e do acolhimento como caminhos para a transformação.
            </p>
            <p className="text-pretty mt-5 text-lg leading-8 text-[var(--color-muted)]">
              {psychologist.subtitle} {psychologist.description}
            </p>
            <p className="mt-5 text-sm font-bold text-[var(--color-foreground)]">
              {psychologist.name}
              <span className="mx-2 text-[var(--color-accent)]" aria-hidden="true">
                •
              </span>
              Psicóloga • CRP 06/228999
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
            <Link
              href="/sobre"
              className="button button-secondary"
            >
              Conheça meu trabalho
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--color-border)] pt-7">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
              <Video className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
              Sessões online
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
              <ShieldCheck className="h-4 w-4 text-[var(--color-secondary)]" aria-hidden="true" />
              Espaço seguro
            </div>
            <SocialLinks />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={200} direction="right">
        <div className="relative mx-auto w-full max-w-[31rem]">
          <div className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-[var(--color-soft)]/75 [transform:rotate(3deg)]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface-secondary)] shadow-[var(--shadow-lg)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,0.42),transparent_35%)]" />
            <div className="relative flex h-full items-center justify-center px-10 text-center">
              <div>
                <p className="font-display text-3xl font-semibold text-[var(--color-foreground)]">
                  Foto profissional
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Espaço reservado para a imagem
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card absolute -bottom-6 left-4 right-4 flex items-center gap-4 p-4 shadow-[var(--shadow-md)] sm:left-8 sm:right-auto sm:min-w-72">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-soft)] text-[var(--color-primary-hover)]">
              <Video className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--color-foreground)]">
                Atendimento online
              </p>
              <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                Acolhimento onde você estiver
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}