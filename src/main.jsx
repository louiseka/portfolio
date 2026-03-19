import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import CookieBanner from "./components/CookieBanner.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <CookieBanner />
  </StrictMode>,
);
