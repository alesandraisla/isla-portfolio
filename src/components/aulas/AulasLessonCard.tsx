import Image from "next/image";

export type AulasLessonCardProps = {
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  frameClassName: string;
  ariaLabel: string;
};

export function AulasLessonCard({
  title,
  href,
  imageUrl,
  imageAlt,
  frameClassName,
  ariaLabel,
}: AulasLessonCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group block rounded-[2rem] outline-none transition-transform duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-jardim-verde focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div
        className={`rounded-[2rem] p-8 shadow-sm ring-1 ring-foreground/5 sm:p-10 ${frameClassName}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-background/40">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:brightness-[1.03]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <span
            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10"
            aria-hidden
          >
            <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full bg-background/95 text-foreground opacity-0 shadow-md transition duration-300 group-hover:scale-100 group-hover:opacity-100">
              <PlayIcon className="ml-0.5 h-7 w-7" />
            </span>
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-center font-serif text-lg text-foreground sm:text-xl">
        {title}
      </h3>
    </a>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
