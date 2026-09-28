import PageTransition from "../Components/PageTransition";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Clock3,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "../utils/links";
import { siteConfig } from "@/config/site";

export default function Contato() {
  return (
    <PageTransition>
      <div className="site-shell page-section section-with-pattern">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 pattern-dots opacity-10" />
        
        <FadeIn>
          <SectionTitle
            eyebrow="Contato"
            title="O primeiro passo pode ser uma conversa."
            description={siteConfig.contactTagline}
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <FadeIn delay={150}>
            <div className="grid gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card group flex items-start gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)] sm:items-center sm:p-8 relative overflow-hidden"
                aria-label="Entrar em contato pelo WhatsApp (abre em nova aba)"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-soft)] to-[var(--palette-beige-rose)]/50 text-[var(--color-primary)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm relative">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 relative">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary-hover)]">
                    Canal preferencial
                  </p>
                  <h2 className="font-display mt-1 text-3xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary-hover)] transition-colors">
                    WhatsApp
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {siteConfig.whatsapp.display} • Agendamentos e informações
                  </p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-[var(--color-primary)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block relative" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.instagram.url !== "#" ? siteConfig.instagram.url : undefined}
                target={siteConfig.instagram.url !== "#" ? "_blank" : undefined}
                rel={siteConfig.instagram.url !== "#" ? "noopener noreferrer" : undefined}
                aria-disabled={siteConfig.instagram.url === "#" ? "true" : undefined}
                className={`surface-card group flex items-start gap-5 p-6 transition-all duration-300 sm:items-center sm:p-8 relative overflow-hidden ${
                  siteConfig.instagram.url === "#"
                    ? "cursor-not-allowed opacity-70"
                    : "hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)]"
                }`}
              >
                {/* Gradient overlay on hover */}
                {siteConfig.instagram.url !== "#" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/5 via-transparent to-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-soft)] to-[var(--palette-beige-rose)]/50 text-[var(--color-primary)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm relative">
                  <Camera className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 relative">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary-hover)]">
                    Conteúdos e novidades
                  </p>
                  <h2 className="font-display mt-1 text-3xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary-hover)] transition-colors">
                    Instagram
                  </h2>
                  <p className="mt-1 truncate text-sm text-[var(--color-muted)]">
                    {siteConfig.instagram.username}
                  </p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-[var(--color-primary)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block relative" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <aside className="rounded-[var(--radius-lg)] border border-[var(--color-footer)] bg-gradient-to-br from-[var(--color-footer)] via-[var(--color-footer)] to-[var(--color-burnt-orange)]/20 p-7 text-[var(--color-on-dark)] shadow-[var(--shadow-md)] lg:sticky lg:top-28 md:p-8 backdrop-blur-sm relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              
              <p className="eyebrow !text-[var(--color-soft)] relative">Disponibilidade</p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight relative">
                Horários para contato
              </h2>

              <dl className="mt-8 space-y-5 relative">
                <div className="flex gap-4 group">
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-soft)] group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-on-dark-muted)]">
                      Dias
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[var(--color-on-dark)]">
                      {siteConfig.schedule.days}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-soft)] group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-on-dark-muted)]">
                      Horário
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[var(--color-on-dark)]">
                      {siteConfig.schedule.hours}
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-6 text-[var(--color-on-dark-muted)] relative">
                {siteConfig.contactMessage}
              </p>
            </aside>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
