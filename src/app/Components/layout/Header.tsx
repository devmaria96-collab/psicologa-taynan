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
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[rgba(250,247,243,0.9)] backdrop-blur-xl">
      <div className="site-shell flex min-h-20 items-center justify-between gap-3 sm:gap-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 py-3 sm:gap-3"
          aria-label="Taynan Azevedo — página inicial"
        >
          <Image
            src="/logo.png"
            alt="Logo Taynan Azevedo Psicologia"
            width={44}
            height={55}
            priority
            className="h-11 w-auto shrink-0 object-contain md:h-[3.25rem]"
          />
          <span className="flex min-w-0 flex-col">
            <span className="font-display text-[1.05rem] font-semibold leading-none tracking-[0.04em] text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary)] sm:text-xl">
              TAYNAN AZEVEDO
            </span>
            <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
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
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-[var(--color-soft)] text-[var(--color-primary-hover)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-primary-hover)]"
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