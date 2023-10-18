import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { DevTools } from "jotai-devtools";
import DebugAtoms from "./DebugAtoms.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DevTools />
    <DebugAtoms />
    <App />
  </React.StrictMode>
);
