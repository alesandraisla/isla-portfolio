import Image from "next/image";
import type { TechnologiesWaveCopy } from "@/i18n/dictionaries";

const WAVE_IMAGE =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80";

type Props = {
  copy: TechnologiesWaveCopy;
};

export function TechnologiesWaveSection({ copy }: Props) {
  return (
    <section className="relative mt-2 sm:mt-4">
      {/* Onda no topo: preenchimento azul-tema; acima da curva fica transparente (vê-se a grelha / fundo creme). */}
      <svg
        className="block h-10 w-full text-jardim-azul/40 sm:h-14"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,48 L0,22 Q150,4 300,22 Q450,40 600,22 Q750,4 900,22 Q1050,40 1200,22 L1200,48 Z"
        />
      </svg>

      <div className="relative z-[1] -mt-px bg-jardim-azul/35 px-4 pb-14 pt-2 sm:px-6 sm:pb-16 sm:pt-4">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="relative order-1 w-full shrink-0 md:order-none md:w-[46%]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-jardim-verde/25 shadow-sm">
              <Image
                src={WAVE_IMAGE}
                alt={copy.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </div>

          <div className="relative order-2 flex flex-1 flex-col justify-center md:order-none">
            <h2 className="font-sans text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {copy.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              {copy.body}
            </p>
          </div>

          <CodePetSketch className="pointer-events-none absolute bottom-2 right-2 h-16 w-24 text-foreground/20 sm:bottom-4 sm:right-4 md:h-20 md:w-28" />
        </div>
      </div>
    </section>
  );
}

function CodePetSketch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" aria-hidden>
      <path
        d="M8 24l4 4 4-4M8 28h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M72 48c8-12 24-14 32-4 6 8 4 20-6 26-10 6-24 4-32-6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="88" cy="38" r="3" fill="currentColor" />
    </svg>
  );
}
