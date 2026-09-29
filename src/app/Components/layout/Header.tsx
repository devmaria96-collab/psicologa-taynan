"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import MobileMenu from "../MobileMenu";
import { navigationItems, getWhatsAppUrl } from "../../utils/links";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[var(--color-border)] bg-[rgba(250,247,243,0.85)] backdrop-blur-xl transition-all duration-300">
      <div className="site-shell flex min-h-16 items-center justify-between gap-2 py-2 sm:min-h-20 sm:gap-6 sm:py-0">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 py-2 sm:gap-3 sm:py-3 relative"
          aria-label="Taynan Azevedo — página inicial"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-accent)]/10 to-[var(--color-primary)]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          <Image
            src="/logo.png"
            alt="Logo Taynan Azevedo Psicologia"
            width={44}
            height={55}
            priority
            className="h-9 w-auto shrink-0 object-contain sm:h-11 md:h-[3.25rem] relative z-10 group-hover:scale-105 transition-transform duration-300"
          />
          <span className="flex min-w-0 flex-col relative z-10">
            <span className="font-display text-[0.9rem] font-semibold leading-none tracking-[0.04em] text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary)] sm:text-[1.05rem] md:text-xl bg-gradient-to-r from-[var(--color-foreground)] to-[var(--color-foreground)] group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] bg-clip-text text-transparent">
              TAYNAN AZEVEDO
            </span>
            <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)] group-hover:text-[var(--color-primary-hover)] transition-colors sm:text-[0.62rem]">
              Psicologia online
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-gradient-to-r from-[var(--color-soft)] to-[var(--palette-beige-rose)]/30 text-[var(--color-primary-hover)] shadow-sm"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-primary-hover)] hover:shadow-sm"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-primary)] rounded-full" />
              )}
            </Link>
          ))}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary ml-3 relative overflow-hidden group"
            aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-action)] via-[var(--color-primary-hover)] to-[var(--color-primary-action)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              Agendar consulta
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}