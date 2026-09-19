import FadeIn from "../ui/FadeIn";
import PhotoCarousel from "../Components/PhotoCarousel";
import SectionTitle from "../ui/SectionTitle";
import { HeartHandshake, Laptop, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function About() {
  // Array de fotos - adicione novos caminhos de imagens aqui
  const photos = [
    "Foto 1", // Substituir por: "/images/sobre/foto-1.jpg"
    "Foto 2", // Substituir por: "/images/sobre/foto-2.jpg"
    "Foto 3", // Substituir por: "/images/sobre/foto-3.jpg"
    "Foto 4", // Substituir por: "/images/sobre/foto-4.jpg"
    "Foto 5", // Substituir por: "/images/sobre/foto-5.jpg"
  ];

  const highlights = [
    {
      icon: HeartHandshake,
      title: "Escuta acolhedora",
      description: "Um espaço seguro para compreender sentimentos, relações e escolhas.",
    },
    {
      icon: Laptop,
      title: "Atendimento online",
      description: "Sessões realizadas de forma remota, com privacidade e praticidade.",
    },
    {
      icon: Users,
      title: "Adolescentes e adultos",
      description: "Acompanhamento psicológico atento às necessidades de cada fase.",
    },
  ];

  return (
    <div className="site-shell page-section">
      <FadeIn>
        <SectionTitle
          eyebrow="Sobre mim"
          title="Cuidado, presença e escuta em cada encontro."
          description={siteConfig.aboutText}
          align="center"
        />
      </FadeIn>

      <FadeIn delay={200}>
        <div className="mt-14">
          <PhotoCarousel photos={photos} />
        </div>
      </FadeIn>

      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, description }, index) => (
          <FadeIn key={title} delay={index * 100}>
            <article className="surface-card h-full p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)] md:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-brand-strong)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="font-display mt-6 text-2xl font-semibold text-[var(--color-text)]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
