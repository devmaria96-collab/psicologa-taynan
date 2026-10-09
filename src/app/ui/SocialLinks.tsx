import { BriefcaseBusiness, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "../utils/links";
import InstagramIcon from "./InstagramIcon";

type SocialLinksProps = {
  variant?: "default" | "minimal";
  className?: string;
};

export default function SocialLinks({
  variant = "default",
  className = "",
}: SocialLinksProps) {
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
      icon: InstagramIcon,
      external: siteConfig.instagram.url !== "#",
    },
    {
      href: siteConfig.linkedin.url,
      label: "LinkedIn",
      icon: BriefcaseBusiness,
      external: siteConfig.linkedin.url !== "#",
    },
  ];

  const buttonClass =
    variant === "minimal"
      ? "inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-foreground)] transition-colors hover:text-[var(--color-primary)]"
      : "icon-button";

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      aria-label="Redes sociais"
    >
      {links.map(({ href, label, icon: Icon, external }) => {
        if (href === "#") {
          return (
            <span
              key={label}
              className={`${buttonClass} cursor-not-allowed opacity-40`}
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
            className={buttonClass}
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
