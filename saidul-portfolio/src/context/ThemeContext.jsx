import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * ThemeContext
 * ------------
 * Provides `theme` ("light" | "dark") and `toggleTheme` to the whole app.
 * - Reads the visitor's OS preference on first load.
 * - Persists the explicit choice in localStorage so it survives reloads.
 * - Applies the theme as a `data-theme` attribute on <html>, which is what
 *   every CSS Module reads its custom properties from (see index.css).
 */
const ThemeContext = createContext(undefined);

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
