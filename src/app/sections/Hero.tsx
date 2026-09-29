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
      className="site-shell grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-8 py-10 px-4 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-20 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[var(--color-soft)] via-[var(--palette-beige-rose)]/30 to-transparent blur-3xl opacity-60 animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[var(--palette-caramel)]/20 via-[var(--palette-beige)]/30 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[var(--palette-terracotta)]/10 to-transparent blur-2xl opacity-40" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-foreground) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="flex max-w-2xl flex-col relative z-10 order-2 lg:order-1">
        <FadeIn delay={0}>
          <p className="eyebrow mb-4 flex items-center gap-2 text-xs sm:text-sm sm:mb-6">
            <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
            {psychologist.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-display text-balance text-[clamp(2rem,6vw,4rem)] sm:text-[clamp(2.5rem,7vw,5rem)] lg:text-[clamp(3.25rem,7.2vw,6.25rem)] font-semibold leading-[0.95] sm:leading-[0.92] tracking-[-0.04em] lg:tracking-[-0.045em] text-[var(--color-foreground)] bg-gradient-to-r from-[var(--color-foreground)] via-[var(--color-foreground)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
            Psicoterapia para uma vida mais leve e consciente
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-6 max-w-xl sm:mt-8">
            <p className="text-pretty text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7 md:text-lg md:leading-8">
              Trabalho parte da escuta e do acolhimento como caminhos para a transformação.
            </p>
            <p className="text-pretty mt-4 text-base leading-7 text-[var(--color-muted)] sm:mt-5 sm:text-lg sm:leading-8">
              {psychologist.subtitle} {psychologist.description}
            </p>
            <p className="mt-4 text-xs font-bold text-[var(--color-foreground)] sm:mt-5 sm:text-sm">
              {psychologist.name}
              <span className="mx-2 text-[var(--color-accent)]" aria-hidden="true">
                •
              </span>
              Psicóloga • CRP 06/228999
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary relative overflow-hidden group w-full sm:w-auto justify-center"
              aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-action)] via-[var(--color-primary-hover)] to-[var(--color-primary-action)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Agendar consulta
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </a>
            <Link
              href="/sobre"
              className="button button-secondary group w-full sm:w-auto justify-center"
            >
              <span className="relative flex items-center gap-2">
                Conheça meu trabalho
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-[var(--color-border)] pt-5 sm:mt-10 sm:gap-x-6 sm:gap-y-4 sm:pt-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-muted)] group cursor-default sm:text-sm">
              <Video className="h-4 w-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="group-hover:text-[var(--color-primary-hover)] transition-colors">Sessões online</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-muted)] group cursor-default sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-[var(--color-secondary)] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="group-hover:text-[var(--color-primary-hover)] transition-colors">Espaço seguro</span>
            </div>
            <SocialLinks />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={200} direction="right" className="order-1 lg:order-2">
        <div className="relative mx-auto w-full max-w-[28rem] sm:max-w-[31rem]">
          {/* Modern gradient blobs behind image */}
          <div className="absolute -inset-3 -z-10 rounded-[2.5rem] sm:rounded-[2.75rem] bg-gradient-to-br from-[var(--color-soft)] via-[var(--palette-beige-rose)]/40 to-[var(--palette-caramel)]/30 blur-xl opacity-75 animate-pulse" />
          <div className="absolute -inset-6 -z-20 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-tr from-[var(--palette-terracotta)]/20 via-transparent to-[var(--palette-olive)]/20 blur-2xl opacity-50" />
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface-secondary)] shadow-[var(--shadow-lg)] backdrop-blur-sm">
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[var(--color-soft)]/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,0.6),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(217,191,168,0.3),transparent_35%)]" />
            
            <div className="relative flex h-full items-center justify-center px-6 sm:px-10 text-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-accent)]/20 to-[var(--color-primary)]/20 blur-2xl opacity-50 animate-pulse" />
                <p className="font-display text-2xl font-semibold text-[var(--color-foreground)] relative sm:text-3xl">
                  Foto profissional
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)] relative sm:text-sm">
                  Espaço reservado para a imagem
                </p>
              </div>
            </div>
          </div>

          {/* Floating card with glassmorphism */}
          <div className="surface-card absolute -bottom-4 left-3 right-3 flex items-center gap-3 p-3 shadow-[var(--shadow-md)] backdrop-blur-xl bg-white/80 sm:-bottom-6 sm:left-4 sm:right-4 sm:gap-4 sm:p-4 sm:left-8 sm:right-auto sm:min-w-72 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-soft)] to-[var(--palette-beige-rose)]/50 text-[var(--color-primary-hover)] shadow-lg sm:h-11 sm:w-11">
              <Video className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--color-foreground)] sm:text-sm">
                Atendimento online
              </p>
              <p className="mt-0.5 text-[10px] text-[var(--color-muted)] sm:mt-0.5 sm:text-xs">
                Acolhimento onde você estiver
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}