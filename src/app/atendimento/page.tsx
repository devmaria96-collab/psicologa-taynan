import PageTransition from "../Components/PageTransition";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { ArrowRight, MessageCircle, Calendar, Video, Lock } from "lucide-react";
import { getWhatsAppUrl } from "../utils/links";
import { siteConfig } from "@/config/site";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  step,
}: ServiceCardProps & { step: number }) {
  return (
    <article className="surface-card group relative h-full overflow-hidden p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)] md:p-7">
      <span className="absolute right-5 top-4 font-display text-5xl font-semibold text-[var(--color-accent)]/20">
        {String(step).padStart(2, "0")}
      </span>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-soft)] text-[var(--color-primary)] transition-transform duration-200 group-hover:scale-105">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="font-display mt-8 text-2xl font-semibold text-[var(--color-foreground)]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
        {description}
      </p>
    </article>
  );
}

export default function Atendimento() {
  const cards = [
    {
      icon: MessageCircle,
      title: "Entre em contato",
      description: "O primeiro contato pode ser realizado pelo WhatsApp para conhecer o funcionamento do atendimento e consultar a disponibilidade de horários.",
    },
    {
      icon: Calendar,
      title: "Agendamento",
      description: "Após a definição do dia e do horário, serão fornecidas as orientações necessárias para o atendimento.",
    },
    {
      icon: Video,
      title: "Encontro online",
      description: "A sessão acontece por videochamada, em ambiente virtual previamente combinado.",
    },
    {
      icon: Lock,
      title: "Privacidade",
      description: "Para aproveitar melhor o encontro, recomenda-se estar em um local reservado, tranquilo e com conexão estável à internet.",
    },
  ];

  return (
    <PageTransition>
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
            <FadeIn key={card.title} delay={index * 100} className="h-full">
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                step={index + 1}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <section className="mt-16 grid items-center gap-8 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-secondary)] p-7 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <p className="eyebrow">Próximo passo</p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-[var(--color-foreground)] md:text-4xl">
                Vamos conversar?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] md:text-base">
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
          </section>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
