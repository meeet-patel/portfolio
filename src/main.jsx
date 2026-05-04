import "./utils/setFavicon.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { bootstrapThemeBeforeReact } from "./utils/theme.js";
import "./index.css";
import App from "./App.jsx";

bootstrapThemeBeforeReact();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}
    >
      <App />
    </BrowserRouter>
  </StrictMode>,
);
