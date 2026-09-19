import Link from "next/link";
import SocialLinks from "../../ui/SocialLinks";
import { navigationItems } from "../../utils/links";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-footer)] bg-[var(--color-footer)] text-[var(--color-on-dark)]">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
        <div className="max-w-sm">
          <Link
            href="/"
            className="font-display text-2xl font-semibold tracking-[0.03em] text-[var(--color-on-dark)] transition-colors hover:text-[var(--color-soft)]"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-3 text-sm leading-6 text-[var(--color-on-dark-muted)]">
            Psicologia e atendimento online para adolescentes e adultos.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-3" aria-label="Links do rodapé">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-on-dark-muted)] transition-colors hover:text-[var(--color-soft)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <SocialLinks />
      </div>

      <div className="border-t border-white/15">
        <div className="site-shell flex flex-col gap-2 py-5 text-xs text-[var(--color-on-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MT. Todos os direitos reservados.</p>
          <p>Atendimento psicológico online • CRP {siteConfig.crp}</p>
        </div>
      </div>
    </footer>
  );
}
