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
      <div className="site-shell page-section">
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
                className="surface-card group flex items-start gap-5 p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)] sm:items-center sm:p-8"
                aria-label="Entrar em contato pelo WhatsApp (abre em nova aba)"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-brand-strong)]">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                    Canal preferencial
                  </p>
                  <h2 className="font-display mt-1 text-3xl font-semibold text-[var(--color-text)]">
                    WhatsApp
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {siteConfig.whatsapp.display} • Agendamentos e informações
                  </p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-[var(--color-text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.instagram.url !== "#" ? siteConfig.instagram.url : undefined}
                target={siteConfig.instagram.url !== "#" ? "_blank" : undefined}
                rel={siteConfig.instagram.url !== "#" ? "noopener noreferrer" : undefined}
                aria-disabled={siteConfig.instagram.url === "#" ? "true" : undefined}
                className={`surface-card group flex items-start gap-5 p-6 transition-[transform,box-shadow,border-color] duration-200 sm:items-center sm:p-8 ${
                  siteConfig.instagram.url === "#"
                    ? "cursor-not-allowed opacity-70"
                    : "hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
                }`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-brand-strong)]">
                  <Camera className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                    Conteúdos e novidades
                  </p>
                  <h2 className="font-display mt-1 text-3xl font-semibold text-[var(--color-text)]">
                    Instagram
                  </h2>
                  <p className="mt-1 truncate text-sm text-[var(--color-text-muted)]">
                    {siteConfig.instagram.username}
                  </p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-[var(--color-text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <aside className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-text)] p-7 text-white shadow-[var(--shadow-md)] lg:sticky lg:top-28 md:p-8">
              <p className="eyebrow !text-[var(--color-accent)]">Disponibilidade</p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight">
                Horários para contato
              </h2>

              <dl className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">
                      Dias
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-white/90">
                      {siteConfig.schedule.days}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/55">
                      Horário
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-white/90">
                      {siteConfig.schedule.hours}
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-6 text-white/65">
                {siteConfig.contactMessage}
              </p>
            </aside>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
