import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      {/*
        React 19 exige `precedence` em <link rel="stylesheet"> renderizado
        fora do documento principal para promover a folha ao <head> com ordem
        estável. Sem isso: "Cannot render a link rel='stylesheet' outside..."
      */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Great+Vibes&display=swap"
        precedence="default"
      />
      <body className="flex min-h-screen flex-col antialiased">
        <a className="skip-link" href="#conteudo-principal">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
