import { psychologist } from "./Content";
import SocialLinks from "../ui/SocialLinks";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid min-h-[85vh] max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-[55%_45%] md:px-10"
    >
      <div className="flex flex-col">
        <p className="mb-6 text-sm tracking-widest text-[#3D3A38]">
          {psychologist.tagline}
        </p>

        <h1 className="font-serif text-4xl leading-tight text-[#3D3A38] md:text-5xl lg:text-6xl">
          {psychologist.title}
        </h1>

        <div className="mt-8">
          <p className="font-serif text-xl text-[#3D3A38]">
            {psychologist.name}
          </p>
          <p className="font-serif text-lg text-[#3D3A38]">
            Psicóloga • CRP {psychologist.crp}
          </p>
        </div>

        <p className="mt-6 text-lg text-[#3D3A38]">
          {psychologist.subtitle}
        </p>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-[#3D3A38]">
          {psychologist.description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#agendar"
            className="rounded-full bg-[#3D3A38] px-6 py-3 text-center font-medium text-white transition hover:bg-[#2D2A28]"
          >
            Agendar consulta
          </a>
          <a
            href="#trabalho"
            className="rounded-full border-2 border-[#3D3A38] px-6 py-3 text-center font-medium text-[#3D3A38] transition hover:bg-[#3D3A38] hover:text-white"
          >
            Conheça meu trabalho
          </a>
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-[#FFD69B] opacity-20 rounded-tl-[150px] rounded-br-[150px] transform translate-x-4 translate-y-4"></div>
        <div
          className="relative flex h-[400px] w-full max-w-[430px] items-center justify-center bg-[#FFD69B] px-10 text-center text-xl text-[#3D3A38] rounded-tl-[120px] rounded-br-[120px] md:h-[530px]"
        >
          Foto profissional
        </div>
      </div>
    </section>
  );
}