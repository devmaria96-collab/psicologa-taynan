"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { getWhatsAppUrl, navigationItems } from "../utils/links";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const menuTitleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="icon-button lg:hidden"
        aria-label="Abrir menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id={menuId}
          className="fixed inset-0 z-50 flex justify-end bg-[rgba(48,45,42,0.28)] backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            ref={panelRef}
            className="flex h-full w-full max-w-sm flex-col border-l border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
            <Link
              id={menuTitleId}
              href="/"
                className="font-display text-xl font-semibold tracking-[0.04em] text-[var(--color-text)]"
                onClick={() => setIsOpen(false)}
            >
                THAYNAN AZEVEDO
            </Link>
            <button
                ref={closeButtonRef}
                type="button"
              onClick={() => setIsOpen(false)}
                className="icon-button"
              aria-label="Fechar menu"
            >
                <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

            <nav className="mt-12 flex flex-col gap-2" aria-label="Navegação móvel">
              {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-2xl px-4 py-4 text-lg font-semibold transition-colors ${
                  isActive(item.href)
                      ? "bg-[var(--color-accent-soft)] text-[var(--color-brand-strong)]"
                      : "text-[var(--color-text-muted)] hover:bg-white/70 hover:text-[var(--color-text)]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
                href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="button button-primary mt-6 w-full"
                aria-label="Agendar consulta pelo WhatsApp (abre em nova aba)"
            >
              Agendar consulta
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>

            <p className="mt-auto border-t border-[var(--color-border)] pt-6 text-sm leading-6 text-[var(--color-text-muted)]">
              Atendimento psicológico online para adolescentes e adultos.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
