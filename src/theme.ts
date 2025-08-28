import { createTheme } from "@mui/material/styles";

export const makeTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#2563eb" }, // cobalt
      secondary: { main: "#0ea5e9" }, // sky
      background: {
        default: mode === "dark" ? "#0b1020" : "#f6f8fb",
        paper: mode === "dark" ? "#0f172a" : "#ffffff",
      },
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: `Inter, ui-sans-serif, -apple-system, Segoe UI, Roboto, Helvetica, Arial`,
      h1: { fontWeight: 800, letterSpacing: -1 },
      h2: { fontWeight: 800, letterSpacing: -0.5 },
      h3: { fontWeight: 700 },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: { transition: "transform .2s ease, box-shadow .2s ease" },
        },
      },
    },
  });
