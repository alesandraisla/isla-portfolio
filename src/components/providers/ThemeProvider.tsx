"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type PaletteId = "jardim" | "lavanda" | "blossom" | "orchid";

const STORAGE_KEY = "isla-garden-palette";

type ThemeContextValue = {
  palette: PaletteId;
  setPalette: (id: PaletteId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredPalette(): PaletteId {
  if (typeof window === "undefined") return "jardim";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (
    raw === "lavanda" ||
    raw === "blossom" ||
    raw === "orchid" ||
    raw === "jardim"
  ) {
    return raw;
  }
  return "jardim";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<PaletteId>("jardim");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- restauração de paleta persistida
    setPaletteState(readStoredPalette());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-palette", palette);
  }, [palette]);

  const setPalette = useCallback((id: PaletteId) => {
    setPaletteState(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const value = useMemo(
    () => ({ palette, setPalette }),
    [palette, setPalette],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemePalette() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemePalette must be used within ThemeProvider");
  }
  return ctx;
}
