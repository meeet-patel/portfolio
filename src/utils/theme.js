export const THEME_STORAGE_KEY = "portfolio-theme";

/** RGB triples (space-separated) for Tailwind `rgb(var(--accent) / …))`. */
const ACCENT_PALETTES = [
  { main: "192 132 252", bright: "232 121 249" },
  { main: "96 165 250", bright: "147 197 253" },
  { main: "52 211 153", bright: "110 231 183" },
  { main: "251 146 60", bright: "253 186 116" },
  { main: "244 114 182", bright: "249 168 212" },
  { main: "248 113 113", bright: "252 165 165" },
  { main: "45 212 191", bright: "94 234 212" },
  { main: "167 139 250", bright: "196 181 253" },
];

function randomIndex(n) {
  if (n <= 1) return 0;
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return buf[0] % n;
  }
  return Math.floor(Math.random() * n);
}

/** New accent on every full page load (not persisted). */
export function applyRandomAccent() {
  const p = ACCENT_PALETTES[randomIndex(ACCENT_PALETTES.length)];
  const root = document.documentElement;
  root.style.setProperty("--accent", p.main);
  root.style.setProperty("--accent-bright", p.bright);
}

/** @param {'light' | 'dark'} mode */
export function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === "light") root.classList.remove("dark");
  else root.classList.add("dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }
}

export function readStoredMode() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

/** Run before React + CSS: dark/light from storage + random accent. */
export function bootstrapThemeBeforeReact() {
  applyTheme(readStoredMode());
  applyRandomAccent();
}
