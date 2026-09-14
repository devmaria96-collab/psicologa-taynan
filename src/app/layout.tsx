import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
