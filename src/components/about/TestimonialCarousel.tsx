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
  const {
    headingBefore,
    headingEmphasis,
    headingAfter,
    items,
    cta,
    prevAria,
    nextAria,
  } = copy;
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
    <section className="relative overflow-hidden rounded-2xl bg-jardim-verde/55 ring-1 ring-foreground/10">
      <div className="px-4 pb-6 pt-10 text-foreground sm:px-8 sm:pb-8 sm:pt-12">
        <h2 className="text-center font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-[1.75rem]">
          {headingBefore}
          <span
            className="mx-1.5 inline-block text-[1.35em] leading-none text-foreground sm:text-[1.4em]"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            {headingEmphasis}
          </span>
          {headingAfter}
        </h2>

        <div className="relative mx-auto mt-10 min-h-[220px] max-w-3xl sm:min-h-[260px] md:mt-12">
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-foreground text-background shadow-sm transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jardim-verde sm:left-1 sm:h-11 sm:w-11"
            aria-label={prevAria}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-foreground text-background shadow-sm transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jardim-verde sm:right-1 sm:h-11 sm:w-11"
            aria-label={nextAria}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative mx-auto max-w-md px-11 sm:px-14 md:max-w-lg md:px-16">
            <div
              className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-[1.75rem] bg-jardim-pessego/85 shadow-[6px_6px_0_0_rgba(61,43,32,0.28)] sm:translate-x-2.5 sm:translate-y-2.5 sm:rounded-[2rem]"
              aria-hidden
            />
            <div className="relative rounded-[1.75rem] bg-background px-6 py-8 shadow-sm ring-1 ring-foreground/10 sm:rounded-[2rem] sm:px-8 sm:py-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <p className="font-serif text-xl leading-snug sm:text-2xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <p className="mt-5 font-serif text-base font-semibold sm:text-lg">
                    {current.attribution}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {current.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center gap-2 rounded-full bg-jardim-pessego/90 px-6 py-3 text-sm font-medium text-foreground shadow-sm ring-1 ring-foreground/10 transition hover:bg-jardim-pessego"
          >
            {cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>

      <CarouselScallopedDivider className="block h-11 w-full text-background sm:h-14" />
    </section>
  );
}

/** Ondinhas na base: preenchimento igual ao fundo da página para transição suave. */
function CarouselScallopedDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0,12 Q50,40 100,12 T200,12 T300,12 T400,12 T500,12 T600,12 T700,12 T800,12 T900,12 T1000,12 T1100,12 T1200,12 L1200,48 L0,48 Z"
      />
    </svg>
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
