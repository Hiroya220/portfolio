import fs from "node:fs";
import path from "node:path";

export function publicAssetExists(assetPath: string): boolean {
  const normalizedPath = decodeURIComponent(assetPath).replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", normalizedPath));
}

