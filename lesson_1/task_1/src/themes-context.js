import React from "react";

export const themes = {
  dark: {
    fontColor: "#ffffff",
    background: "#222222",
  },
  light: {
    fontColor: "#000000",
    background: "#eeeeee",
  },
};

export const ThemeContext = React.createContext(themes.dark);
