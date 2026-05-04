export const THEME_STORAGE_KEY = "portfolio-theme";
const ACCENT_LAST_INDEX_KEY = "portfolio-accent-last-index";

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
  { main: "129 140 248", bright: "165 180 252" },
  { main: "34 211 238", bright: "103 232 249" },
  { main: "163 230 53", bright: "190 242 100" },
  { main: "251 191 36", bright: "252 211 77" },
  { main: "251 113 133", bright: "253 164 175" },
  { main: "217 70 239", bright: "240 171 252" },
  { main: "20 184 166", bright: "45 212 191" },
  { main: "234 179 8", bright: "250 204 21" },
  { main: "249 115 22", bright: "251 146 60" },
  { main: "139 92 246", bright: "167 139 250" },
  { main: "14 165 233", bright: "56 189 248" },
  { main: "37 99 235", bright: "96 165 250" },
  { main: "29 78 216", bright: "59 130 246" },
  { main: "34 197 94", bright: "74 222 128" },
  { main: "22 163 74", bright: "34 197 94" },
  { main: "5 150 105", bright: "16 185 129" },
  { main: "13 148 136", bright: "20 184 166" },
  { main: "8 145 178", bright: "6 182 212" },
  { main: "6 182 212", bright: "34 211 238" },
  { main: "124 58 237", bright: "139 92 246" },
  { main: "147 51 234", bright: "168 85 247" },
  { main: "168 85 247", bright: "192 132 252" },
  { main: "219 39 119", bright: "236 72 153" },
  { main: "225 29 72", bright: "244 63 94" },
  { main: "190 18 60", bright: "251 113 133" },
  { main: "234 88 12", bright: "249 115 22" },
  { main: "194 65 12", bright: "234 88 12" },
  { main: "180 83 9", bright: "245 158 11" },
  { main: "202 138 4", bright: "250 204 21" },
  { main: "132 204 22", bright: "163 230 53" },
  { main: "101 163 13", bright: "132 204 22" },
  { main: "79 70 229", bright: "99 102 241" },
  { main: "67 56 202", bright: "129 140 248" },
  { main: "220 38 38", bright: "239 68 68" },
  { main: "185 28 28", bright: "248 113 113" },
  { main: "236 72 153", bright: "244 114 182" },
  { main: "192 38 211", bright: "217 70 239" },
  { main: "162 28 175", bright: "232 121 249" },
  { main: "59 130 246", bright: "147 197 253" },
  { main: "16 185 129", bright: "52 211 153" },
  { main: "244 63 94", bright: "251 113 133" },
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

function readLastAccentIndex() {
  try {
    const raw = localStorage.getItem(ACCENT_LAST_INDEX_KEY);
    const n = raw == null ? NaN : parseInt(raw, 10);
    if (!Number.isInteger(n) || n < 0 || n >= ACCENT_PALETTES.length) return NaN;
    return n;
  } catch {
    return NaN;
  }
}

function writeLastAccentIndex(index) {
  try {
    localStorage.setItem(ACCENT_LAST_INDEX_KEY, String(index));
  } catch {
    /* ignore */
  }
}

/**
 * Picks an accent index different from the one already on `:root` (stylesheet
 * default or inline) and from the last visit (stored), when possible.
 */
function pickAccentIndex(root) {
  const currentMain = getComputedStyle(root)
    .getPropertyValue("--accent")
    .trim()
    .replace(/\s+/g, " ");
  const lastIndex = readLastAccentIndex();
  const forbidden = new Set();
  ACCENT_PALETTES.forEach((p, i) => {
    if (p.main.replace(/\s+/g, " ") === currentMain) forbidden.add(i);
  });
  if (!Number.isNaN(lastIndex)) forbidden.add(lastIndex);
  const candidates = ACCENT_PALETTES.map((_, i) => i).filter((i) => !forbidden.has(i));
  const pool = candidates.length ? candidates : ACCENT_PALETTES.map((_, i) => i);
  return pool[randomIndex(pool.length)];
}

/** New accent on every full page load; avoids repeating last visit and unchanged default. */
export function applyRandomAccent() {
  const root = document.documentElement;
  const i = pickAccentIndex(root);
  const p = ACCENT_PALETTES[i];
  root.style.setProperty("--accent", p.main);
  root.style.setProperty("--accent-bright", p.bright);
  writeLastAccentIndex(i);
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
