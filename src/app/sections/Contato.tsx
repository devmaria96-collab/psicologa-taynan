import type { ElementType } from "react";
import FadeIn from "../ui/FadeIn";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { WhatsAppIcon } from "../ui/BrandIcons";
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
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-0">
          <FadeIn className="lg:pr-14 xl:pr-16">
            <h2 className="font-display text-balance text-[clamp(1.85rem,3.2vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-foreground)]">
              Disponibilidade para atendimento
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {siteConfig.availability.map(({ day, periods }) => (
                <li
                  key={day}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)]/80 bg-[var(--color-surface)] px-4 py-4"
                >
                  <p className="font-display text-lg font-semibold leading-tight text-[var(--color-foreground)]">
                    {day}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">{periods}</p>
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary mt-7"
              aria-label="Vamos conversar? Abre o WhatsApp em uma nova aba"
            >
              Vamos conversar?
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </FadeIn>

          <FadeIn
            delay={120}
            className="border-t border-[var(--color-border)]/70 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14 xl:pl-16"
          >
            <div className="border-t border-[var(--color-border)]/80">
              <ContactChannel
                href={getWhatsAppUrl()}
                icon={WhatsAppIcon}
                name="WhatsApp"
                detail={siteConfig.whatsapp.display}
                ariaLabel="Entrar em contato pelo WhatsApp (abre em nova aba)"
              />
              <ContactChannel
                href="https://www.instagram.com/taynanazevedopsi/"
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
