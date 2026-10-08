import { existsSync, rmSync } from "fs";
import path from "path";

const dirs = [".next", ".next-dev"];

for (const dirName of dirs) {
  const dir = path.join(process.cwd(), dirName);
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`[clean-next] Pasta ${dirName} removida.`);
  }
}
