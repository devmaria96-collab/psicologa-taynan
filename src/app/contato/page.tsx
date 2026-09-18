import PageTransition from "../components/PageTransition";
import FadeIn from "../ui/FadeIn";
import { MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Coluna principal - Informações de contato */}
          <div className="md:col-span-3">
            <FadeIn>
              <h1 className="font-serif text-4xl leading-tight text-[#3D3A38] md:text-5xl mb-6">
                ENTRE EM CONTATO COMIGO
              </h1>
              <p className="text-lg text-[#3D3A38] mb-12 tracking-wide">
                ATENDIMENTO ONLINE, SEM FRONTEIRAS GEOGRÁFICAS
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-6">
                {/* WhatsApp - Contato principal */}
                <div className="bg-[#FFD69B] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#3D3A38] flex items-center justify-center">
                        <MessageCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-[#3D3A38] mb-2">WhatsApp</h3>
                      <p className="text-[#3D3A38] text-lg">0000-0000</p>
                      <p className="text-sm text-[#3D3A38] mt-2 opacity-80">
                        Contato preferencial para agendamento
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="bg-[#FFD69B] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#3D3A38] flex items-center justify-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-[#3D3A38] mb-2">Instagram</h3>
                      <p className="text-[#3D3A38] text-lg">@taynan_psico</p>
                      <p className="text-sm text-[#3D3A38] mt-2 opacity-80">
                        Acompanhe conteúdos sobre terapia e bem-estar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Coluna lateral - Horário e informações */}
          <div className="md:col-span-2">
            <FadeIn delay={300}>
              <div className="bg-[#FFD69B] rounded-2xl p-8 sticky top-8">
                <h2 className="font-serif text-2xl text-[#3D3A38] mb-6">
                  HORÁRIO PARA CONTATO E AGENDAMENTO
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3D3A38]" />
                    <p className="text-[#3D3A38]">SEGUNDA, QUARTA E SEXTA-FEIRA</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3D3A38]" />
                    <p className="text-[#3D3A38]">09:00 ÀS 18:00 HORAS</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#3D3A38] border-opacity-20">
                  <p className="text-sm text-[#3D3A38] leading-relaxed">
                    Respondo às mensagens no período de atendimento. Fora desse horário, entrarei em contato assim que possível.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
