import PageTransition from "../components/PageTransition";
import FadeIn from "../ui/FadeIn";
import { MessageCircle, Calendar, Video, Lock } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="h-full min-h-[320px] bg-[#FFD69B] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg flex flex-col items-center justify-start">
      <div className="h-12 flex items-center justify-center mb-6">
        <Icon className="w-12 h-12 text-[#3D3A38]" />
      </div>
      <h2 className="font-serif text-xl text-[#3D3A38] mb-4 text-center">
        {title}
      </h2>
      <p className="text-[#3D3A38] text-center leading-relaxed flex-1">
        {description}
      </p>
    </div>
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
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
        <FadeIn>
          <h1 className="font-serif text-4xl leading-tight text-[#3D3A38] md:text-5xl mb-8 text-center">
            COMO FUNCIONA O ATENDIMENTO ONLINE
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
          {cards.map((card, index) => (
            <FadeIn key={index} delay={index * 100}>
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <div className="mt-16 text-center">
            <p className="text-base text-[#3D3A38] max-w-2xl mx-auto leading-relaxed">
              Informações sobre valores, duração das sessões, plataforma utilizada e demais detalhes práticos são explicadas diretamente no contato pelo WhatsApp.
            </p>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
