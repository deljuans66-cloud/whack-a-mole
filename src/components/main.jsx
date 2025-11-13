import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GameProvider from "./context/GameContext";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </GameProvider>
  </StrictMode>
);
