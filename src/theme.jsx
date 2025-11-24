import React from "react";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#464D53",
            main: "#000000",
          },

          bg: {
            main: "#fcfafaff",
          },
          favColor: {
            main: grey[800],

            cont: "#f48915",
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#f48915",
            main: "#ffffff",
          },
          bg: {
            main: "#464D53",
          },

          favColor: {
            main: grey[300],
            cont: "#2C2C2C",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
