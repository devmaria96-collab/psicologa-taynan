import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import { siteConfig } from "@/config/site";

export default function Abordagem() {
  return (
    <section id="abordagem" className="scroll-section border-t border-[var(--color-border)]/60">
      <div className="site-shell page-section">
        <FadeIn>
          <SectionTitle
            eyebrow="Abordagem"
            title="Um encontro pautado pela escuta e pelo cuidado."
            description="A psicoterapia é um espaço de acolhimento e reflexão, construído com presença, ética e respeito ao ritmo de cada pessoa."
          />
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-14 max-w-3xl space-y-5 text-base leading-8 text-[var(--color-muted)] md:text-lg">
            <p>
              O trabalho de {siteConfig.name} parte da escuta atenta e do
              acolhimento como caminhos para a compreensão de si e para
              transformações possíveis no cotidiano.
            </p>
            <p>
              Cada processo é único. Por isso, o atendimento é conduzido com
              sensibilidade às necessidades de adolescentes e adultos, em um
              ambiente online seguro e confidencial.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
