import Link from "next/link";
import SocialLinks from "../../ui/SocialLinks";
import { navigationItems } from "../../utils/links";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-footer)] bg-gradient-to-br from-[var(--color-footer)] via-[var(--color-footer)] to-[var(--color-burnt-orange)]/20 text-[var(--color-on-dark)] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="site-shell grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start md:gap-10 md:py-12 relative">
        <div className="max-w-sm">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-[0.03em] text-[var(--color-on-dark)] transition-colors hover:text-[var(--color-soft)] group relative inline-block sm:text-2xl"
          >
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-soft)] to-[var(--color-accent)] group-hover:w-full transition-all duration-300" />
            {siteConfig.name}
          </Link>
          <p className="mt-3 text-sm leading-6 text-[var(--color-on-dark-muted)]">
            Psicologia e atendimento online para adolescentes e adultos.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3" aria-label="Links do rodapé">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-on-dark-muted)] transition-all duration-300 hover:text-[var(--color-soft)] hover:translate-x-1 relative inline-block"
            >
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--color-soft)] group-hover:w-full transition-all duration-300" />
              {item.label}
            </Link>
          ))}
        </nav>

        <SocialLinks />
      </div>

      <div className="border-t border-white/15 relative">
        <div className="site-shell flex flex-col gap-2 py-4 text-xs text-[var(--color-on-dark-muted)] sm:flex-row sm:items-center sm:justify-between sm:py-5">
          <p>© 2026 MT. Todos os direitos reservados.</p>
          <p>Atendimento psicológico online • CRP {siteConfig.crp}</p>
        </div>
      </div>
    </footer>
  );
}
