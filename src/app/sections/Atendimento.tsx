import type { ElementType } from "react";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { Video, Mic, Heart, Handshake } from "lucide-react";

interface ServiceCardProps {
  icon: ElementType;
  title: string;
  description: string | readonly string[];
  step: number;
}

function ServiceCard({ icon: Icon, title, description, step }: ServiceCardProps) {
  const paragraphs = Array.isArray(description) ? description : [description];

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
      <div className="mt-3 space-y-3">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-sm leading-6 text-[var(--color-muted)]">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export default function Atendimento() {
  const cards = [
    {
      icon: Video,
      title: "Terapia online",
      description:
        "Ofereço terapia online para adolescentes e adultos, com a comodidade de realizar as sessões sem sair de casa.",
    },
    {
      icon: Mic,
      title: "Palestras e rodas de conversa",
      description:
        "Espaços de diálogo, troca de experiências e reflexão sobre saúde emocional, acolhimento e os desafios presentes no cotidiano, promovendo a escuta e a construção coletiva de conhecimento.",
    },
    {
      icon: Heart,
      title: "Experiências",
      description:
        "Atuação com pessoas que convivem com doenças crônicas, pessoas com deficiência (PCD) e pessoas com doenças raras.",
    },
    {
      icon: Handshake,
      title: "Parcerias",
      description:
        "Empresas, instituições e projetos que valorizem o bem-estar emocional e a saúde.",
    },
  ] as const;

  return (
    <section id="atendimento" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <FadeIn>
          <SectionTitle
            title="Meus serviços"
            description={[
              "Um espaço de escuta, acolhimento e cuidado para compreender o que você vive e construir novas formas de se relacionar consigo e com suas experiências.",
              "Meu trabalho é fundamentado na Terapia de Aceitação e Compromisso (ACT), considerando a singularidade, a história e aquilo que é significativo para cada pessoa.",
            ]}
            align="center"
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
