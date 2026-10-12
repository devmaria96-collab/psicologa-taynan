import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const paragraphs = [
  "A Terapia de Aceitação e Compromisso (ACT) é uma abordagem terapêutica que convida você a desenvolver uma relação mais acolhedora com seus pensamentos, sentimentos e experiências, inclusive nos momentos difíceis.",
  "Ao longo do processo terapêutico, trabalhamos o reconhecimento das emoções, a atenção ao momento presente e a compreensão dos valores que dão sentido à sua vida. A proposta não é eliminar o sofrimento, mas aprender a lidar com ele de maneira mais flexível e consciente, construindo caminhos que estejam alinhados com o que realmente importa para você.",
  "Cada processo é único, respeitando sua história, seu tempo e suas particularidades.",
] as const;

export default function Abordagem() {
  return (
    <section id="abordagem" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <FadeIn>
          <SectionTitle
            eyebrow="Abordagem"
            title="Terapia de Aceitação e Compromisso (ACT)"
            description={paragraphs}
          />
        </FadeIn>
      </div>
    </section>
  );
}
