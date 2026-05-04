import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** GitHub Pages: copy index.html to 404.html for SPA deep links. */
function githubPagesSpa404() {
  return {
    name: "github-pages-spa-404",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const index = path.join(dist, "index.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.join(dist, "404.html"));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), githubPagesSpa404()],
  server: { host: true },
  /** Site is served from `https://<host>/portfolio/` (e.g. GitHub Pages project site). */
  base: "/portfolio/",
});
