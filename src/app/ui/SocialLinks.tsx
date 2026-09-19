import { BriefcaseBusiness, Camera, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "../utils/links";

export default function SocialLinks() {
  const links = [
    {
      href: getWhatsAppUrl(),
      label: "WhatsApp",
      icon: MessageCircle,
      external: true,
    },
    {
      href: siteConfig.instagram.url,
      label: "Instagram",
      icon: Camera,
      external: siteConfig.instagram.url !== "#",
    },
    {
      href: siteConfig.linkedin.url,
      label: "LinkedIn",
      icon: BriefcaseBusiness,
      external: siteConfig.linkedin.url !== "#",
    },
  ];

  return (
    <div className="flex items-center gap-2" aria-label="Redes sociais">
      {links.map(({ href, label, icon: Icon, external }) => {
        if (href === "#") {
          return (
            <span
              key={label}
              className="icon-button cursor-not-allowed opacity-40"
              aria-label={`${label} indisponível no momento`}
              aria-disabled="true"
              title={`${label} em breve`}
            >
              <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
            </span>
          );
        }

        return (
          <a
            key={label}
            href={href}
            aria-label={`${label}${external ? " (abre em nova aba)" : ""}`}
            className="icon-button"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
