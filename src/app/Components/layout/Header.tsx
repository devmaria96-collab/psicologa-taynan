"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import MobileMenu from "../MobileMenu";
import { navigationItems, getWhatsAppUrl } from "../../utils/links";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[rgba(247,242,235,0.88)] backdrop-blur-xl">
      <div className="site-shell flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex flex-col py-3"
          aria-label="Thaynan Azevedo — página inicial"
        >
          <span className="font-display text-xl font-semibold leading-none tracking-[0.04em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-brand)]">
            THAYNAN AZEVEDO
          </span>
          <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Psicologia online
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-[var(--color-accent-soft)] text-[var(--color-brand-strong)]"
                  : "text-[var(--color-text-muted)] hover:bg-white/60 hover:text-[var(--color-text)]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary ml-3"
            aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
          >
            Agendar consulta
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}