"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import InstagramIcon from "../../ui/InstagramIcon";
import { navigationItems, getWhatsAppUrl } from "../../utils/links";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Header() {
  const activeId = useActiveSection();

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[var(--color-border)]/70 bg-[rgba(250,247,243,0.88)] backdrop-blur-md">
      <div className="site-shell flex min-h-[4.25rem] items-center gap-3 py-2.5 sm:min-h-[5rem] sm:gap-5 sm:py-3 md:min-h-[5.5rem] md:gap-8 md:py-4">
        <Link
          href="/#inicio"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          aria-label="Taynan Azevedo — página inicial"
        >
          <Image
            src="/logo.png"
            alt="Logo Taynan Azevedo Psicologia"
            width={48}
            height={60}
            priority
            className="h-9 w-auto shrink-0 object-contain sm:h-10 md:h-12"
          />
          <span className="flex min-w-0 flex-col">
            <span className="font-display text-[0.82rem] font-semibold leading-none tracking-[0.1em] text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-primary)] sm:text-[0.95rem] md:text-[1.15rem] md:tracking-[0.12em]">
              TAYNAN AZEVEDO
            </span>
            <span className="mt-1 text-[0.52rem] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)] sm:mt-1.5 sm:text-[0.58rem] sm:tracking-[0.32em] md:text-[0.65rem]">
              Psicóloga
            </span>
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 md:gap-4">
          <nav
            className="min-w-0 flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Navegação principal"
          >
            <div className="flex w-max items-center justify-end gap-0.5 sm:gap-1 md:gap-1.5">
              {navigationItems.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`whitespace-nowrap px-2 py-1.5 text-[0.68rem] font-medium tracking-[0.01em] transition-colors duration-200 sm:px-2.5 sm:py-2 sm:text-[0.75rem] md:px-3.5 md:text-[0.8125rem] md:tracking-[0.02em] ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button shrink-0"
            aria-label="Instagram de Taynan Azevedo (abre em nova aba)"
          >
            <InstagramIcon className="h-[1.125rem] w-[1.125rem]" />
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary shrink-0 !min-h-9 !px-3 !text-[0.7rem] sm:!min-h-10 sm:!px-4 sm:!text-[0.8rem] md:!min-h-[2.875rem] md:!px-5 md:!text-[0.875rem]"
            aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
          >
            <span className="sm:hidden">Agendar</span>
            <span className="hidden sm:inline">Agendar consulta</span>
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
