import type { ContactPageCopy } from "@/i18n/dictionaries";
import { SocialIcon } from "./ContactSocialIcons";

type Props = {
  copy: ContactPageCopy;
};

export function ContactSocialSection({ copy }: Props) {
  const { title, body, socials } = copy;

  return (
    <section className="relative overflow-hidden rounded-2xl ring-1 ring-foreground/10">
      <div className="bg-jardim-pessego/25 px-4 py-10 text-foreground sm:px-8 sm:py-12">
        <h1 className="text-center font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>

        <HandDrawnRule className="mx-auto mt-6 max-w-md text-jardim-pessego" />

        <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-foreground/85 sm:text-lg">
          {body}
        </p>

        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap items-start justify-center gap-8 sm:gap-10 md:gap-12">
          {socials.map((item, i) => (
            <li
              key={item.id}
              className={`flex w-[calc(50%-1rem)] max-w-[9.5rem] flex-col items-center sm:w-auto ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full flex-col items-center gap-3 text-center outline-none transition-transform duration-200 ease-out will-change-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-jardim-verde focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={item.linkAria}
              >
                <span className="inline-flex rounded-2xl border-2 border-dashed border-jardim-pessego/90 bg-background/60 px-4 py-3 shadow-sm ring-1 ring-foreground/5 transition group-hover:border-jardim-verde/80 group-hover:bg-background/80">
                  <SocialIcon id={item.id} className="h-9 w-9 text-foreground sm:h-10 sm:w-10" />
                </span>
                <span className="font-serif text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground sm:text-xs">
                  {item.label}
                </span>
                <span className="border-b-2 border-jardim-pessego/90 pb-0.5 font-sans text-xs font-medium text-foreground/90 underline-offset-4 transition group-hover:border-jardim-verde group-hover:text-foreground">
                  {item.action}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ContactCloudDivider className="-mt-px block h-14 w-full text-[#2c2e35] sm:h-16" />

      <div className="relative min-h-[5.5rem] overflow-hidden bg-[#2c2e35] px-4 py-8 sm:min-h-[6rem] sm:py-10">
      </div>
    </section>
  );
}

/** Linha tracejada orgânica (estilo “à mão”) sob o título */
function HandDrawnRule({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 10"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 5c28-3 52 4 78 1s54-5 82-1 50 4 78 1 54-4 78-1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeDasharray="5 7"
        opacity={0.85}
      />
    </svg>
  );
}

/** Ondinhas / borda em “nuvem” entre a zona clara e a faixa escura */
function ContactCloudDivider({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 72"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0,40 Q75,8 150,36 Q225,4 300,38 Q375,12 450,36 Q525,6 600,34 Q675,10 750,36 Q825,14 900,34 Q975,8 1050,36 Q1100,18 1150,32 Q1175,24 1200,28 L1200,72 L0,72 Z"
      />
    </svg>
  );
}
