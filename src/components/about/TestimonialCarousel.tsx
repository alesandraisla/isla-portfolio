"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import type { AboutCarouselCopy, AboutTestimonial } from "@/i18n/dictionaries";

type Props = {
  locale: Locale;
  copy: AboutCarouselCopy;
};

export function TestimonialCarousel({ locale, copy }: Props) {
  const { items, cta, prevAria, nextAria } = copy;
  const [index, setIndex] = useState(0);
  const total = items.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  const base = `/${locale}`;
  const current: AboutTestimonial = items[index]!;

  return (
    <section className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] px-4 py-10 text-[#f5f5f5] sm:px-8 sm:py-14">
      <Sparkles className="pointer-events-none absolute right-6 top-6 h-14 w-14 text-white/90 opacity-90 sm:right-10 sm:top-8" />

      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-[auto,minmax(0,1fr),auto] md:items-center md:gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            className="order-2 mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#92dbdc] text-[#1a1a1a] transition hover:bg-[#7ecbcd] md:order-1 md:mx-0"
            aria-label={prevAria}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="order-1 min-h-48 text-center md:order-2 md:min-h-56">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <p className="font-serif text-2xl leading-snug sm:text-3xl md:text-[1.75rem]">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                  {current.body}
                </p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/95">
                  {current.attribution}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            className="order-3 mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#92dbdc] text-[#1a1a1a] transition hover:bg-[#7ecbcd] md:order-3 md:mx-0"
            aria-label={nextAria}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center gap-2 rounded-full bg-[#d8c8e8] px-6 py-3 text-sm font-medium text-[#1a1a1a] transition hover:bg-[#cbb8e0]"
          >
            {cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden>
      <path d="M32 4l2 10 10 2-10 2-2 10-2-10-10-2 10-2 2-10zm24 24l1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5 1.5-6zM8 40l1 5 5 1-5 1-1 5-1-5-5-1 5-1 1-5z" />
    </svg>
  );
}
