import type { ReactNode } from "react";
import type { TechGridItem } from "@/i18n/dictionaries";

type Props = {
  items: TechGridItem[];
  heading?: string;
};

const icons: Record<
  TechGridItem["iconId"],
  (props: { className?: string }) => ReactNode
> = {
  react: IconReact,
  next: IconNext,
  typescript: IconTS,
  tailwind: IconTailwind,
  node: IconNode,
  git: IconGit,
};

export function TechnologiesGrid({ items, heading }: Props) {
  return (
    <section className="rounded-2xl border border-jardim-verde/25 bg-jardim-azul/35 px-4 py-10 sm:px-8 sm:py-12">
      {heading ? (
        <h2 className="mb-8 text-center font-serif text-2xl text-foreground sm:text-3xl">
          {heading}
        </h2>
      ) : null}
      <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
        {items.map((item) => {
          const Icon = icons[item.iconId];
          return (
            <li
              key={`${item.iconId}-${item.title}`}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center text-foreground/90 [&_svg]:h-10 [&_svg]:w-10">
                {Icon ? <Icon /> : null}
              </div>
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-foreground/80 sm:text-sm">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function IconReact() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

function IconNext() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M8 16L16 8M16 8H9M16 8V15" strokeLinecap="round" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  );
}

function IconTS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path
        d="M9.5 15.5V18M9.5 15.5c0-1.5 1.2-2.2 2.5-2.2M16 12.5v4.2c0 1-1 1.8-2.2 1.8-1.3 0-2.3-.8-2.3-1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTailwind() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path
        d="M12 6c-2 0-3.5 1.2-3.5 3 0 2 2.5 2.5 2.5 4.5 0 1.5-1.2 3-3.5 3-2.8 0-5-2-5-5"
        strokeLinecap="round"
      />
      <path
        d="M12 18c2 0 3.5-1.2 3.5-3 0-2-2.5-2.5-2.5-4.5 0-1.5 1.2-3 3.5-3 2.8 0 5 2 5 5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconNode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M12 3v18M8 5.5L12 3l4 2.5v5L12 13 8 10.5v-5z" strokeLinejoin="round" />
      <path d="M8 16.5L12 19l4-2.5v-5" strokeLinejoin="round" />
    </svg>
  );
}

function IconGit() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="6" cy="6" r="2" fill="currentColor" stroke="none" />
      <circle cx="6" cy="18" r="2" fill="currentColor" stroke="none" />
      <path d="M6 8v4c0 1.5 1 2 2.5 2H14M6 16v2" strokeLinecap="round" />
      <circle cx="18" cy="14" r="2" fill="currentColor" stroke="none" />
      <path d="M14 10h2.5c1.2 0 2 1 2 2.5v.5" strokeLinecap="round" />
    </svg>
  );
}
