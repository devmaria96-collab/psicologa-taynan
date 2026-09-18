"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "../../components/MobileMenu";

export default function Header() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre mim" },
    { href: "/atendimento", label: "Atendimentos" },
    { href: "/contato", label: "Contato" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full px-6 py-6 md:px-16">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg text-[#3D3A38] transition-colors duration-300 hover:text-[#8B7355]"
        >
          TAYNAN AZEVEDO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#8B7355] after:transition-all after:duration-300 hover:after:w-full ${
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
            className="rounded-full bg-[#3D3A38] px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2D2A28] hover:-translate-y-0.5 hover:shadow-lg"
          >
            Agendar consulta
          </a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}