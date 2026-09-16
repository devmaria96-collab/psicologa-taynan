import PageTransition from "../components/PageTransition";
import FadeIn from "../ui/FadeIn";

export default function Agendar() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
        <FadeIn>
          <h1 className="font-serif text-4xl leading-tight text-[#3D3A38] md:text-5xl mb-8">
            Agendar Consulta
          </h1>
          <p className="text-lg text-[#3D3A38] mb-12">
            Agende sua sessão de terapia online de forma simples e segura.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="max-w-2xl mx-auto bg-[#FFD69B] rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm text-[#3D3A38] mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#3D3A38] text-[#3D3A38] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#3D3A38] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#3D3A38] text-[#3D3A38] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm text-[#3D3A38] mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#3D3A38] text-[#3D3A38] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label htmlFor="tipo-atendimento" className="block text-sm text-[#3D3A38] mb-2">
                  Tipo de atendimento
                </label>
                <select
                  id="tipo-atendimento"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#3D3A38] text-[#3D3A38] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                >
                  <option value="">Selecione</option>
                  <option value="adolescente">Adolescente</option>
                  <option value="adulto">Adulto</option>
                </select>
              </div>

              <div>
                <label htmlFor="data-preferencia" className="block text-sm text-[#3D3A38] mb-2">
                  Data de preferência
                </label>
                <input
                  type="date"
                  id="data-preferencia"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#3D3A38] text-[#3D3A38] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <div>
                <label htmlFor="horario-preferencia" className="block text-sm text-[#3D3A38] mb-2">
                  Horário de preferência
                </label>
                <select
                  id="horario-preferencia"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#3D3A38] text-[#3D3A38] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                >
                  <option value="">Selecione</option>
                  <option value="manha">Manhã (9h - 12h)</option>
                  <option value="tarde">Tarde (14h - 18h)</option>
                </select>
              </div>

              <div>
                <label htmlFor="observacoes" className="block text-sm text-[#3D3A38] mb-2">
                  Observações (opcional)
                </label>
                <textarea
                  id="observacoes"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#3D3A38] text-[#3D3A38] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#3D3A38] px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-[#2D2A28] hover:-translate-y-0.5 hover:shadow-lg"
              >
                Solicitar agendamento
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
