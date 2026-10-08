import { existsSync, rmSync } from "fs";
import path from "path";

const nextDevDir = path.join(process.cwd(), ".next-dev");
const nextProdDir = path.join(process.cwd(), ".next");
const forceClean = process.argv.includes("--clean");

function cleanDir(dir, reason) {
  if (!existsSync(dir)) return;
  console.log(`[prepare-dev] ${reason}`);
  rmSync(dir, { recursive: true, force: true });
}

if (forceClean) {
  cleanDir(nextDevDir, "Limpando cache .next-dev sob demanda (--clean).");
  process.exit(0);
}

// Se alguém rodou build enquanto o dev usava `.next` antigo, limpa resíduos.
// O cache de produção permanece em `.next` e não interfere no `next dev`.
const legacyDevCss = path.join(nextProdDir, "static", "css", "app", "layout.css");
const legacyBuildId = path.join(nextProdDir, "BUILD_ID");
const mixedLegacyCache =
  existsSync(legacyBuildId) &&
  existsSync(path.join(nextProdDir, "static", "css", "app")) &&
  !existsSync(legacyDevCss);

if (mixedLegacyCache) {
  console.log(
    "[prepare-dev] Cache legado misturado em .next detectado (ignorado pelo distDir .next-dev).",
  );
}

// Se o cache de desenvolvimento estiver incompleto/corrompido, recria.
const devCssPath = path.join(nextDevDir, "static", "css", "app", "layout.css");
const devServerPath = path.join(nextDevDir, "server");
if (
  existsSync(nextDevDir) &&
  existsSync(devServerPath) &&
  existsSync(path.join(nextDevDir, "static", "css")) &&
  !existsSync(devCssPath)
) {
  cleanDir(
    nextDevDir,
    "Cache .next-dev incompleto sem CSS de desenvolvimento. Limpando.",
  );
}
