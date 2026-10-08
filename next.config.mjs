import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/**
 * Isola o cache de desenvolvimento do cache de produção.
 *
 * Causa do bug: `next build` / `next start` sobrescreviam a pasta `.next`
 * enquanto `next dev` ainda referenciava `/_next/static/css/app/layout.css`
 * gerado no modo dev → 404 → CSS some no F5.
 *
 * Usamos `phase` (API oficial do Next) em vez de `process.argv.includes("dev")`,
 * porque workers do Next podem carregar este arquivo sem o argv original.
 *
 * @param {string} phase
 * @returns {import('next').NextConfig}
 */
const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    distDir: isDev ? ".next-dev" : ".next",
    allowedDevOrigins: ["10.10.10.20", "127.0.0.1", "localhost"],
  };
};

export default nextConfig;
