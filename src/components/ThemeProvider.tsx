"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);
const THEME_EVENT = "tasneem-theme-change";
let fallbackTheme: Theme = "light";

function getThemeSnapshot(): Theme {
  try {
    const stored = window.localStorage.getItem("tasneem-theme");
    return stored === "dark" ? "dark" : stored === "light" ? "light" : fallbackTheme;
  } catch {
    return fallbackTheme;
  }
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function saveTheme(theme: Theme) {
  fallbackTheme = theme;
  try {
    window.localStorage.setItem("tasneem-theme", theme);
    window.dispatchEvent(new Event(THEME_EVENT));
  } catch {
    // Theme still updates for this session if storage is unavailable.
    window.dispatchEvent(new Event(THEME_EVENT));
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => saveTheme(theme === "light" ? "dark" : "light"), [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button className={`theme-toggle ${isDark ? "is-dark" : ""}`} type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "Royal Blue light" : "Midnight dark"} theme`} aria-pressed={isDark} title={isDark ? "Switch to light theme" : "Switch to midnight theme"}>
      <span className="theme-toggle-track" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={theme} className="theme-toggle-icon" initial={{ opacity: 0, rotate: -35, scale: .75 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 35, scale: .75 }} transition={{ duration: .2 }}>
            {isDark ? <Moon size={15} fill="currentColor" /> : <Sun size={15} />}
          </motion.span>
        </AnimatePresence>
        <span className="theme-toggle-knob" />
      </span>
      <span className="theme-toggle-label">{isDark ? "NIGHT" : "DAY"}</span>
    </button>
  );
}
