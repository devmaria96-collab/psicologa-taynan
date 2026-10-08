import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { ArrowRight, MessageCircle, Calendar, Video, Lock } from "lucide-react";
import { getWhatsAppUrl } from "../utils/links";
import { siteConfig } from "@/config/site";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
}

function ServiceCard({ icon: Icon, title, description, step }: ServiceCardProps) {
  return (
    <article className="surface-card group relative h-full overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)] sm:p-6 md:p-7">
      <span className="absolute right-4 top-3 font-display text-4xl font-semibold text-[var(--color-accent)]/20 transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--color-primary)]/30 sm:right-5 sm:top-4 sm:text-5xl">
        {String(step).padStart(2, "0")}
      </span>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-soft)] text-[var(--color-primary)] shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-display mt-6 text-xl font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary-hover)] sm:mt-8 sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{description}</p>
    </article>
  );
}

export default function Atendimento() {
  const cards = [
    {
      icon: MessageCircle,
      title: "Entre em contato",
      description:
        "O primeiro contato pode ser realizado pelo WhatsApp para conhecer o funcionamento do atendimento e consultar a disponibilidade de horários.",
    },
    {
      icon: Calendar,
      title: "Agendamento",
      description:
        "Após a definição do dia e do horário, serão fornecidas as orientações necessárias para o atendimento.",
    },
    {
      icon: Video,
      title: "Encontro online",
      description:
        "A sessão acontece por videochamada, em ambiente virtual previamente combinado.",
    },
    {
      icon: Lock,
      title: "Privacidade",
      description:
        "Para aproveitar melhor o encontro, recomenda-se estar em um local reservado, tranquilo e com conexão estável à internet.",
    },
  ];

  return (
    <section id="atendimento" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <FadeIn>
          <SectionTitle
            eyebrow="Atendimento"
            title="Como funciona a terapia online."
            description="Do primeiro contato ao encontro por videochamada, cada etapa é conduzida com clareza, cuidado e privacidade."
            align="center"
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 80} className="h-full">
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                step={index + 1}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={320}>
          <div className="mt-12 grid items-center gap-6 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-secondary)]/70 p-5 sm:mt-16 sm:gap-8 sm:p-7 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <p className="eyebrow">Próximo passo</p>
              <h3 className="font-display mt-3 text-2xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-3xl md:text-4xl">
                Vamos conversar?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base">
                {siteConfig.additionalInfo}
              </p>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary w-full md:w-auto"
              aria-label="Falar pelo WhatsApp (abre em nova aba)"
            >
              Falar pelo WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
