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
    <section id="contato" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <FadeIn>
          <SectionTitle
            eyebrow="Contato"
            title="O primeiro passo pode ser uma conversa."
            description={siteConfig.contactTagline}
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start sm:mt-14">
          <FadeIn delay={120}>
            <div className="grid gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)] sm:items-center sm:gap-5 sm:p-8"
                aria-label="Entrar em contato pelo WhatsApp (abre em nova aba)"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-soft)] text-[var(--color-primary)] shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-primary-hover)] sm:text-xs">
                    Canal preferencial
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary-hover)] sm:text-3xl">
                    WhatsApp
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
                    {siteConfig.whatsapp.display} • Agendamentos e informações
                  </p>
                </div>
                <ArrowUpRight
                  className="hidden h-5 w-5 text-[var(--color-primary)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
                  aria-hidden="true"
                />
              </a>

              <a
                href={siteConfig.instagram.url !== "#" ? siteConfig.instagram.url : undefined}
                target={siteConfig.instagram.url !== "#" ? "_blank" : undefined}
                rel={siteConfig.instagram.url !== "#" ? "noopener noreferrer" : undefined}
                aria-disabled={siteConfig.instagram.url === "#" ? "true" : undefined}
                className={`surface-card group flex items-start gap-4 p-5 transition-all duration-300 sm:items-center sm:gap-5 sm:p-8 ${
                  siteConfig.instagram.url === "#"
                    ? "cursor-not-allowed opacity-70"
                    : "hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)]"
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-soft)] text-[var(--color-primary)] shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <Camera className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-primary-hover)] sm:text-xs">
                    Conteúdos e novidades
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary-hover)] sm:text-3xl">
                    Instagram
                  </h3>
                  <p className="mt-1 truncate text-xs text-[var(--color-muted)] sm:text-sm">
                    {siteConfig.instagram.username}
                  </p>
                </div>
                <ArrowUpRight
                  className="hidden h-5 w-5 text-[var(--color-primary)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
                  aria-hidden="true"
                />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <aside className="rounded-[var(--radius-lg)] border border-[var(--color-footer)] bg-[var(--color-footer)] p-5 text-[var(--color-on-dark)] shadow-[var(--shadow-md)] sm:p-7 md:p-8">
              <p className="eyebrow !text-[var(--color-soft)]">Disponibilidade</p>
              <h3 className="font-display mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                Horários para contato
              </h3>

              <dl className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                <div className="flex gap-3 sm:gap-4">
                  <CalendarDays
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-soft)]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-on-dark-muted)] sm:text-xs">
                      Dias
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-[var(--color-on-dark)] sm:text-sm sm:leading-6">
                      {siteConfig.schedule.days}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <Clock3
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-soft)]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-on-dark-muted)] sm:text-xs">
                      Horário
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-[var(--color-on-dark)] sm:text-sm sm:leading-6">
                      {siteConfig.schedule.hours}
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-6 border-t border-white/15 pt-5 text-xs leading-5 text-[var(--color-on-dark-muted)] sm:mt-8 sm:pt-6 sm:text-sm sm:leading-6">
                {siteConfig.contactMessage}
              </p>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
