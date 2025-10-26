"use client";

import { ReactNode } from "react";
import * as React from "react";

export const THEMES = [
  { name: "orange", label: "Orange", color: "#d97706" },
  { name: "red", label: "Red", color: "#be123c" },
  { name: "green", label: "Green", color: "#059669" },
  { name: "blue", label: "Blue", color: "#0284c7" },
  { name: "violet", label: "Violet", color: "#6d28d9" },
];

const DEFAULT_THEME = THEMES[0].name;

type ThemeContextType = {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

export function ColorThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme?: string;
}) {
  const [activeTheme, setActiveTheme] = React.useState<string>(
    () => initialTheme || DEFAULT_THEME,
  );

  React.useEffect(() => {
    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className);
      });
    document.body.classList.add(`theme-${activeTheme}`);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeConfig must be used within an ActiveThemeProvider",
    );
  }
  return context;
}
