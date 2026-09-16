import FadeIn from "../ui/FadeIn";
import PhotoCarousel from "../components/PhotoCarousel";

export default function About() {
  // Array de fotos - adicione novos caminhos de imagens aqui
  const photos = [
    "Foto 1", // Substituir por: "/images/sobre/foto-1.jpg"
    "Foto 2", // Substituir por: "/images/sobre/foto-2.jpg"
    "Foto 3", // Substituir por: "/images/sobre/foto-3.jpg"
    "Foto 4", // Substituir por: "/images/sobre/foto-4.jpg"
    "Foto 5", // Substituir por: "/images/sobre/foto-5.jpg"
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
      <FadeIn>
        <div className="mb-12 text-center">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#3D3A38] md:text-lg">
            Thaynan Azevedo é psicóloga, registrada no Conselho Regional de Psicologia sob o CRP 00000, e realiza atendimento psicológico online para adolescentes e adultos.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <PhotoCarousel photos={photos} />
      </FadeIn>
    </div>
  );
}
