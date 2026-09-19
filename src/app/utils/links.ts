import { siteConfig } from "@/config/site";

export const navigationItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre mim" },
  { href: "/atendimento", label: "Atendimento" },
  { href: "/contato", label: "Contato" },
] as const;

export function getWhatsAppUrl() {
  const message = encodeURIComponent(siteConfig.whatsapp.message);
  return `https://wa.me/${siteConfig.whatsapp.fullNumber}?text=${message}`;
}
