import { BriefcaseBusiness } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "../utils/links";
import { WhatsAppIcon } from "./BrandIcons";
import InstagramIcon from "./InstagramIcon";

type SocialLinksProps = {
  variant?: "default" | "minimal";
  className?: string;
};

function isPlaceholder(href: string) {
  return href === "#";
}

export default function SocialLinks({
  variant = "default",
  className = "",
}: SocialLinksProps) {
  const links = [
    {
      href: getWhatsAppUrl(),
      label: "WhatsApp",
      icon: WhatsAppIcon,
      external: true,
    },
    {
      href: siteConfig.instagram.url,
      label: "Instagram",
      icon: InstagramIcon,
      external: !isPlaceholder(siteConfig.instagram.url),
    },
    {
      href: siteConfig.linkedin.url,
      label: "LinkedIn",
      icon: BriefcaseBusiness,
      external: !isPlaceholder(siteConfig.linkedin.url),
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
        if (isPlaceholder(href)) return null;

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
