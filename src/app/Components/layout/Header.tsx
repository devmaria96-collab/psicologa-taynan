"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MobileMenu from "../MobileMenu";
import { navigationItems, getWhatsAppUrl } from "../../utils/links";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Header() {
  const activeId = useActiveSection();

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[var(--color-border)]/70 bg-[rgba(250,247,243,0.88)] backdrop-blur-md">
      <div className="site-shell flex min-h-[4.5rem] items-center justify-between gap-6 py-3 md:min-h-[5.5rem] md:py-4">
        <Link
          href="/#inicio"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Taynan Azevedo — página inicial"
        >
          <Image
            src="/logo.png"
            alt="Logo Taynan Azevedo Psicologia"
            width={48}
            height={60}
            priority
            className="h-10 w-auto shrink-0 object-contain md:h-12"
          />
          <span className="flex min-w-0 flex-col">
            <span className="font-display text-[0.95rem] font-semibold leading-none tracking-[0.12em] text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary)] md:text-[1.15rem]">
              TAYNAN AZEVEDO
            </span>
            <span className="mt-1.5 text-[0.58rem] font-medium uppercase tracking-[0.32em] text-[var(--color-muted)] md:text-[0.65rem]">
              Psicóloga
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.02em] transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary ml-4"
            aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
          >
            Agendar consulta
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
