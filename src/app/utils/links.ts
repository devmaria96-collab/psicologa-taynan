import { siteConfig } from "@/config/site";

export const navigationItems = [
  { id: "inicio", href: "/#inicio", label: "Início" },
  { id: "sobre", href: "/#sobre", label: "Sobre mim" },
  { id: "atendimento", href: "/#atendimento", label: "Meus Serviços" },
  { id: "abordagem", href: "/#abordagem", label: "Abordagem" },
  { id: "contato", href: "/#contato", label: "Contato" },
] as const;

export const sectionIds = navigationItems.map((item) => item.id);

export function getWhatsAppUrl() {
  return `https://wa.me/${siteConfig.whatsapp.fullNumber}`;
}
