"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";

export function DocumentLang() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0];
    const lang: Locale = segment && isLocale(segment) ? segment : "pt";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
