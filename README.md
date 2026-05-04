# Meet Patel — Portfolio

Vite + React 19 + Tailwind CSS. The app is built for the **`/portfolio/`** public path (see `base` in `vite.config.js`).

## Scripts

- `npm run dev` — local dev server (open **`http://localhost:5173/portfolio/`**)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — ESLint

## Themes

- **Light/dark** is stored in `localStorage` under `portfolio-theme` and applied before paint (see `index.html` + `src/utils/theme.js`).
- **Accent color** is chosen at random on **every full page reload** (not persisted), so each refresh can pick a different palette.

## Images

Raster **PNG/JPG** are not used in the UI: project art and portrait use **SVG** (bundled from `src/assets/svg/…`). The CV is a **PDF**.

## Contact form

Set `VITE_CONTACT_FORM_URL` in `.env` to a JSON POST endpoint if you want the form to submit remotely.

## GitHub Pages

`base` is already **`/portfolio/`** for a project site at `https://<user>.github.io/portfolio/`. Deploy the contents of **`dist/`** to that site. Build emits **`404.html`** (copy of `index.html`) so client-side routes work.
