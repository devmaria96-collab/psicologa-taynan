"use client";

import { useEffect } from "react";

type SectionRedirectProps = {
  hash: "inicio" | "sobre" | "atendimento" | "abordagem" | "contato";
};

export default function SectionRedirect({ hash }: SectionRedirectProps) {
  useEffect(() => {
    window.location.replace(`/#${hash}`);
  }, [hash]);

  return (
    <div className="site-shell page-section">
      <p className="text-sm text-[var(--color-muted)]">Redirecionando…</p>
    </div>
  );
}
