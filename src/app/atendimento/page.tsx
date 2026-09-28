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
    <article className="surface-card group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)] md:p-7">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-soft)]/0 via-transparent to-[var(--palette-beige-rose)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="absolute right-5 top-4 font-display text-5xl font-semibold text-[var(--color-accent)]/20 group-hover:scale-110 group-hover:text-[var(--color-primary)]/30 transition-all duration-300">
        {String(step).padStart(2, "0")}
      </span>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-soft)] to-[var(--palette-beige-rose)]/50 text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="font-display mt-8 text-2xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary-hover)] transition-colors">
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
      <div className="site-shell page-section section-with-pattern">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 pattern-grid opacity-8" />
        
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
          <section className="mt-16 grid items-center gap-8 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface-secondary)] via-[var(--color-soft)]/50 to-[var(--palette-beige-rose)]/20 p-7 md:grid-cols-[1fr_auto] md:p-10 backdrop-blur-sm relative">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <p className="eyebrow">Próximo passo</p>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-[var(--color-foreground)] md:text-4xl bg-gradient-to-r from-[var(--color-foreground)] to-[var(--color-primary-hover)] bg-clip-text text-transparent">
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
              className="button button-primary w-full md:w-auto relative overflow-hidden group"
              aria-label="Falar pelo WhatsApp (abre em nova aba)"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-action)] via-[var(--color-primary-hover)] to-[var(--color-primary-action)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Falar pelo WhatsApp
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </a>
          </section>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
