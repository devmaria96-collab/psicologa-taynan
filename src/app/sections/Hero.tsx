import { psychologist } from "./Content";
import SocialLinks from "../ui/SocialLinks";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[55%_45%] md:px-10 md:py-20"
    >
      <div className="flex flex-col">
        <FadeIn delay={0}>
          <p className="mb-6 text-sm tracking-widest text-[#3D3A38]">
            {psychologist.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-serif text-4xl leading-tight text-[#3D3A38] md:text-5xl lg:text-6xl">
            {psychologist.title}
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8">
            <p className="font-serif text-xl text-[#3D3A38]">
              {psychologist.name}
            </p>
            <p className="font-serif text-lg text-[#3D3A38]">
              Psicóloga • CRP {psychologist.crp}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-6 text-lg text-[#3D3A38]">
            {psychologist.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#3D3A38]">
            {psychologist.description}
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#3D3A38] px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-[#2D2A28] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agendar consulta
            </a>
            <a
              href="/sobre"
              className="rounded-full border-2 border-[#3D3A38] px-6 py-3 text-center font-medium text-[#3D3A38] transition-all duration-300 hover:bg-[#3D3A38] hover:text-white hover:-translate-y-0.5"
            >
              Conheça meu trabalho
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={300} direction="right">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-[#FFD69B] opacity-20 rounded-tl-[150px] rounded-br-[150px] transform translate-x-4 translate-y-4"></div>
          <div
            className="relative flex h-[400px] w-full max-w-[430px] items-center justify-center bg-[#FFD69B] px-10 text-center text-xl text-[#3D3A38] rounded-tl-[120px] rounded-br-[120px] md:h-[530px] transition-transform duration-500 hover:scale-[1.02]"
          >
            Foto profissional
          </div>
        </div>
      </FadeIn>
    </section>
  );
}