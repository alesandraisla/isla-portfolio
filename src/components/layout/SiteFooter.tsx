import type { Dictionary } from "@/i18n/dictionaries";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="mt-auto border-t border-jardim-verde/30 bg-jardim-pessego/20 py-8 text-center text-sm text-foreground/70">
      <p>© {new Date().getFullYear()} Isla Lab — {dict.nav.home}</p>
    </footer>
  );
}
