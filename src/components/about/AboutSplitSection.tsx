import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { AboutSplitCopy } from "@/i18n/dictionaries";

const SPLIT_IMAGE =
  "https://images.unsplash.com/photo-1499951360447-b19be8e80a2f?w=900&q=80";

type Props = {
  locale: Locale;
  copy: AboutSplitCopy;
};

export function AboutSplitSection({ locale, copy }: Props) {
  const base = `/${locale}`;

  return (
    <section className="overflow-hidden rounded-2xl border border-jardim-verde/20 shadow-sm md:rounded-[1.25rem]">
      <div className="flex min-h-0 flex-col md:flex-row">
        <div className="relative aspect-[4/3] w-full shrink-0 md:aspect-auto md:w-1/2 md:min-h-[min(100vw,22rem)] lg:min-h-[26rem]">
          <Image
            src={SPLIT_IMAGE}
            alt={copy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="relative flex w-full flex-col justify-center bg-[#D1E1E9] px-6 py-10 md:w-1/2 md:px-10 md:py-12 lg:px-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2c3540]/80">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#1a2330] sm:text-4xl lg:text-[2.35rem]">
            {copy.titleBefore1}
            <em className="font-serif italic text-[#1a2330]">{copy.emphasis1}</em>
            {copy.titleBetween}
            <em className="font-serif italic text-[#1a2330]">{copy.emphasis2}</em>
            {copy.titleAfter}
          </h1>

          <Link
            href={`${base}/creations`}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#fdfbf7] px-6 py-3 text-sm font-medium text-[#1a2330] shadow-sm transition hover:bg-white"
          >
            {copy.cta}
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
          </Link>

          <LaptopSketch className="pointer-events-none absolute bottom-4 right-4 hidden opacity-[0.18] sm:block md:bottom-6 md:right-6" />
        </div>
      </div>
    </section>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function LaptopSketch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="80"
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 18h100v52H10V18z"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-[#1a2330]"
      />
      <path
        d="M4 70h112l-8-8H12l-8 8z"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-[#1a2330]"
      />
    </svg>
  );
}
