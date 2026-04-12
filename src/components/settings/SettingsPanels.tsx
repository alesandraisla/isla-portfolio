"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  type PaletteId,
  useThemePalette,
} from "@/components/providers/ThemeProvider";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

const paletteOrder: PaletteId[] = [
  "jardim",
  "lavanda",
  "blossom",
  "orchid",
];

export function SettingsPanels({ locale, dict }: Props) {
  const pathname = usePathname();
  const { palette, setPalette } = useThemePalette();

  const rest = pathname.replace(/^\/(pt|en)/, "") || "/";

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h2 className="font-serif text-lg text-foreground">
          {dict.settings.language}
        </h2>
        <div className="flex flex-wrap gap-2">
          {locales.map((loc) => (
            <Link
              key={loc}
              href={`/${loc}${rest === "/" ? "" : rest}`}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                loc === locale
                  ? "bg-jardim-verde text-foreground"
                  : "border border-jardim-azul/40 bg-jardim-creme hover:bg-jardim-pessego/30"
              }`}
            >
              {loc.toUpperCase()}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-lg text-foreground">
          {dict.settings.palette}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {paletteOrder.map((id) => {
            const item = dict.settings.palettes[id];
            const active = palette === id;
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => setPalette(id)}
                  className={`w-full rounded-2xl border p-4 text-left transition-all ${
                    active
                      ? "border-jardim-azul bg-jardim-azul/20 shadow-sm ring-2 ring-jardim-pessego/40"
                      : "border-jardim-verde/40 bg-jardim-creme hover:border-jardim-pessego/60"
                  }`}
                >
                  <span className="block font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-sm text-foreground/75">
                    {item.hint}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
