import { existsSync } from "fs";
import path from "path";

export type TrajectoryMoment = {
  src: string;
  alt: string;
  available: boolean;
  /** Enquadramento individual para object-position (ex.: "center 18%") */
  objectPosition: string;
};

const SOBRE_PHOTOS = [
  {
    file: "sofa.png.jpeg",
    alt: "Taynan Azevedo, psicóloga, sentada em um sofá com o jaleco de psicologia",
    objectPosition: "center 30%",
  },
  {
    file: "cafe.jpg",
    alt: "Taynan Azevedo em um café, com uma xícara vermelha",
    objectPosition: "center 35%",
  },
  {
    file: "foto1.jpg",
    alt: "Taynan Azevedo, psicóloga, em retrato profissional",
    objectPosition: "center 20%",
  },
  {
    file: "palestra.jpg",
    alt: "Taynan Azevedo apresentando uma palestra",
    objectPosition: "22% center",
  },
  {
    file: "palestra2.jpg",
    alt: "Taynan Azevedo durante uma palestra sobre doença crônica",
    objectPosition: "20% center",
  },
  {
    file: "tay.jpg",
    alt: "Taynan Azevedo em retrato com blusa verde",
    objectPosition: "center 18%",
  },
] as const;

export function getSobrePhotos(): TrajectoryMoment[] {
  const directory = path.join(process.cwd(), "public", "imagens");

  return SOBRE_PHOTOS.map((photo) => {
    const src = `/imagens/${photo.file}`;
    return {
      src,
      alt: photo.alt,
      objectPosition: photo.objectPosition,
      available: existsSync(path.join(directory, photo.file)),
    };
  });
}
