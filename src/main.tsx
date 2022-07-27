import { getCustomTheme, ThemeProvider } from "@dasa-health/alma-react";
import { navTokens } from "@dasa-health/alma-tokens";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = getCustomTheme(navTokens);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
