import { existsSync } from "fs";
import path from "path";

export type SitePhoto = {
  src: string;
  alt: string;
  available: boolean;
  /** Enquadramento individual para object-position (ex.: "center 18%") */
  objectPosition: string;
};

const SOBRE_PHOTOS = [
  {
    file: "foto-1.jpg",
    alt: "Taynan Azevedo, psicóloga, em retrato profissional",
    objectPosition: "center 18%",
  },
  {
    file: "foto-2.jpg",
    alt: "Taynan Azevedo em momento profissional",
    objectPosition: "center 22%",
  },
  {
    file: "foto-3.jpg",
    alt: "Retrato editorial de Taynan Azevedo",
    objectPosition: "center 20%",
  },
  {
    file: "foto-4.jpg",
    alt: "Taynan Azevedo em ensaio fotográfico",
    objectPosition: "center 16%",
  },
  {
    file: "foto-5.jpg",
    alt: "Retrato de Taynan Azevedo em ambiente acolhedor",
    objectPosition: "center 24%",
  },
] as const;

export function getSobrePhotos(): SitePhoto[] {
  const directory = path.join(process.cwd(), "public", "images", "sobre");

  return SOBRE_PHOTOS.map((photo) => {
    const src = `/images/sobre/${photo.file}`;
    return {
      src,
      alt: photo.alt,
      objectPosition: photo.objectPosition,
      available: existsSync(path.join(directory, photo.file)),
    };
  });
}
