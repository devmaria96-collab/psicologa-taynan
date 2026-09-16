import PageTransition from "../components/PageTransition";
import FadeIn from "../ui/FadeIn";
import { MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
        <FadeIn>
          <h1 className="font-serif text-4xl leading-tight text-[#3D3A38] md:text-5xl mb-12 text-center">
            ENTRE EM CONTATO COMIGO
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#FFD69B] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
              <div className="flex-shrink-0">
                <MessageCircle className="w-12 h-12 text-[#3D3A38]" />
              </div>
              <div>
                <p className="text-sm tracking-wide text-[#3D3A38] mb-1">WhatsApp</p>
                <p className="text-[#3D3A38]">0000-0000</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#FFD69B] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
              <div className="flex-shrink-0">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#3D3A38]"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm tracking-wide text-[#3D3A38] mb-1">Instagram</p>
                <p className="text-[#3D3A38]">@taynan_psico</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-center text-lg text-[#3D3A38] mb-12 tracking-wide">
            ATENDIMENTO ONLINE, SEM FRONTEIRAS GEOGRÁFICAS
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="max-w-2xl mx-auto bg-[#FFD69B] rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
            <h2 className="font-serif text-2xl text-[#3D3A38] mb-4">
              HORÁRIO PARA CONTATO E AGENDAMENTO
            </h2>
            <p className="text-[#3D3A38] mb-2">
              SEGUNDA, QUARTA E SEXTA-FEIRA
            </p>
            <p className="text-[#3D3A38]">
              09:00 ÀS 18:00 HORAS
            </p>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
