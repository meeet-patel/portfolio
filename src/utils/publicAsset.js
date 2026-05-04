/** Resolves `public/` URLs when `base` is not `/` (e.g. GitHub Pages). */
export function publicAsset(path) {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
