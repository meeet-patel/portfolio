/**
 * Ensures the tab icon resolves under Vite `base` (e.g. /portfolio/).
 * Static <link> in index.html can be ignored by some browsers; this runs first.
 */
const FAVICON_VERSION = "8";

function apply() {
  if (typeof document === "undefined") return;
  const base = String(import.meta.env.BASE_URL || "/");
  const root = base.endsWith("/") ? base : `${base}/`;
  const href = `${root}favicon.svg?v=${FAVICON_VERSION}`;

  document
    .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
    .forEach((el) => el.remove());

  const icon = document.createElement("link");
  icon.rel = "icon";
  icon.type = "image/svg+xml";
  icon.href = href;
  icon.setAttribute("sizes", "any");
  document.head.appendChild(icon);

  const shortcut = document.createElement("link");
  shortcut.rel = "shortcut icon";
  shortcut.type = "image/svg+xml";
  shortcut.href = href;
  document.head.appendChild(shortcut);
}

apply();
