"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre mim" },
    { href: "/atendimento", label: "Atendimentos" },
    { href: "/contato", label: "Contato" },
  ];

  const isActive = (href: string) => pathname === href;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <span
          className={`w-6 h-0.5 bg-[#3D3A38] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-[#3D3A38] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-[#3D3A38] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#F4E9DD] z-50 flex flex-col">
          <div className="w-full px-6 py-6 flex justify-between items-center">
            <Link
              href="/"
              className="font-serif text-lg text-[#3D3A38]"
              onClick={handleLinkClick}
            >
              TAYNAN AZEVEDO
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2"
              aria-label="Fechar menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3D3A38]"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-center gap-8 px-6 py-12">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`text-lg tracking-wide transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#8B7355] after:transition-all after:duration-300 hover:after:w-full ${
                  isActive(item.href)
                    ? "text-[#8B7355] after:w-full"
                    : "text-[#3D3A38] hover:text-[#8B7355]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-4 rounded-full bg-[#3D3A38] px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:bg-[#2D2A28] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agendar consulta
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
