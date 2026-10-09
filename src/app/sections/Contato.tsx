import type { ElementType } from "react";
import FadeIn from "../ui/FadeIn";
import { ArrowUpRight, Clock3, MessageCircle, Mail } from "lucide-react";
import { getWhatsAppUrl } from "../utils/links";
import { siteConfig } from "@/config/site";
import InstagramIcon from "../ui/InstagramIcon";

type ContactChannelProps = {
  href: string;
  icon: ElementType;
  name: string;
  detail: string;
  ariaLabel: string;
  external?: boolean;
};

function ContactChannel({
  href,
  icon: Icon,
  name,
  detail,
  ariaLabel,
  external = true,
}: ContactChannelProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex items-center gap-4 border-b border-[var(--color-border)]/80 py-5 transition-colors duration-300 hover:border-[var(--color-border-hover)] md:gap-5 md:py-6"
      aria-label={ariaLabel}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary-hover)]">
        <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="font-display block text-xl font-semibold tracking-[0.01em] text-[var(--color-foreground)] transition-colors duration-300 group-hover:text-[var(--color-primary-hover)] md:text-2xl">
          {name}
        </span>
        <span className="mt-1 block break-words text-sm leading-6 text-[var(--color-muted)]">
          {detail}
        </span>
      </span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-[var(--color-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-primary)]"
        strokeWidth={1.6}
        aria-hidden="true"
      />
    </a>
  );
}

export default function Contato() {
  return (
    <section id="contato" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <FadeIn>
            <div className="max-w-xl">
              <p className="eyebrow">Contato</p>
              <h2 className="font-display mt-4 text-balance text-[clamp(2.2rem,5vw,3.85rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--color-foreground)]">
                Toda transformação começa com uma conversa.
              </h2>
              <p className="text-pretty mt-6 max-w-md text-base leading-8 text-[var(--color-muted)] md:text-lg md:leading-8">
                Se você sente que é o momento de olhar para si com mais carinho, estou aqui
                para te acolher. Vamos conversar?
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="w-full">
              <div className="border-t border-[var(--color-border)]/80">
                <ContactChannel
                  href={getWhatsAppUrl()}
                  icon={MessageCircle}
                  name="WhatsApp"
                  detail="Agendamentos e informações"
                  ariaLabel="Entrar em contato pelo WhatsApp (abre em nova aba)"
                />
                <ContactChannel
                  href={siteConfig.instagram.url}
                  icon={InstagramIcon}
                  name="Instagram"
                  detail={siteConfig.instagram.username}
                  ariaLabel="Abrir Instagram de Taynan Azevedo (abre em nova aba)"
                />
                <ContactChannel
                  href={`mailto:${siteConfig.email.address}`}
                  icon={Mail}
                  name="E-mail"
                  detail={siteConfig.email.address}
                  ariaLabel="Enviar e-mail para Taynan Azevedo"
                  external={false}
                />
              </div>

              <div className="mt-9 md:mt-11">
                <div className="flex items-start gap-3">
                  <Clock3
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[0.01em] text-[var(--color-foreground)] md:text-xl">
                      Horários para contato
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {siteConfig.schedule.days}
                      <br />
                      {siteConfig.schedule.hours}
                    </p>
                    <p className="mt-5 max-w-sm border-t border-[var(--color-border)]/70 pt-5 text-sm leading-7 text-[var(--color-muted)]">
                      {siteConfig.contactMessage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
