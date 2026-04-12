import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

const routes: { key: keyof Dictionary["nav"]; path: string }[] = [
  { key: "about", path: "about" },
  { key: "creations", path: "creations" },
  { key: "technologies", path: "technologies" },
  { key: "toolbox", path: "toolbox" },
  { key: "contact", path: "contact" },
];

export function SiteHeader({ locale, dict }: Props) {
  const base = `/${locale}`;

  return (
    <header className="border-b border-jardim-verde/40 bg-jardim-creme/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href={base}
          className="font-serif text-xl tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Isla Garden
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {routes.map(({ key, path }) => (
            <Link
              key={path}
              href={`${base}/${path}`}
              className="text-foreground/85 underline-offset-4 transition-colors hover:text-jardim-verde hover:underline"
            >
              {dict.nav[key]}
            </Link>
          ))}
          <Link
            href={`${base}/settings`}
            className="rounded-full border border-jardim-azul/50 bg-jardim-azul/15 px-3 py-1 text-foreground/90 transition-colors hover:bg-jardim-azul/25"
          >
            {dict.nav.settings}
          </Link>
        </nav>
      </div>
    </header>
  );
}
