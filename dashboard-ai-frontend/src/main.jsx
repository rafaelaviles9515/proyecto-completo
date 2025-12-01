import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // opcional, crea el archivo si quieres estilos globales

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
