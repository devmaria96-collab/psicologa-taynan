import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";

export const metadata: Metadata = {
  title: "Taynan Azevedo - Psicólogo",
  description: "Terapia online para adolescentes e adultos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#F4E9DD] flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
