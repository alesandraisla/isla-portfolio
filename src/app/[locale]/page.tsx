import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageTransition } from "@/components/motion/PageTransition";
import islaLab from "@/assets/islaLab.png";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  const cards = [
    {
      href: `${base}/about`,
      title: dict.nav.about,
      accent: "bg-jardim-verde/35",
    },
    {
      href: `${base}/creations`,
      title: dict.nav.creations,
      accent: "bg-jardim-pessego/40",
    },
    {
      href: `${base}/aulas`,
      title: dict.nav.aulas,
      accent: "bg-jardim-azul/30",
    },
    {
      href: `${base}/technologies`,
      title: dict.nav.technologies,
      accent: "bg-jardim-azul/35",
    },
    {
      href: `${base}/contact`,
      title: dict.nav.contact,
      accent: "bg-jardim-pessego/30",
    },
  ];

  return (
    <PageTransition>
      <section className="space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
              Isla Lab
            </p>
            <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {dict.home.headline}
            </h1>
            <p className="max-w-xl text-lg text-foreground/80">{dict.home.sub}</p>
            <Link
              href={`${base}/settings`}
              className="inline-flex w-fit items-center rounded-full border border-jardim-azul/50 bg-jardim-azul/20 px-5 py-2 text-sm font-medium text-foreground transition hover:bg-jardim-azul/35"
            >
              {dict.home.ctaSettings}
            </Link>
          </div>
          <div className="group relative aspect-square max-h-[min(100%,420px)] w-full overflow-hidden rounded-3xl border border-jardim-verde/40 bg-jardim-pessego/20 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <Image
              src={islaLab}
              alt="Isla Lab"
              fill
              className="object-contain p-4 transition duration-300 ease-out group-hover:brightness-110 group-hover:contrast-[0.97] group-hover:saturate-90"
              sizes="(max-width: 1024px) 100vw, min(420px, 40vw)"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-jardim-creme/30 to-jardim-pessego/15 opacity-0 mix-blend-soft-light transition-opacity duration-300 ease-out group-hover:opacity-100"
              aria-hidden
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group rounded-2xl border border-jardim-verde/30 p-5 transition hover:-translate-y-0.5 hover:shadow-md ${card.accent}`}
            >
              <span className="font-serif text-xl text-foreground group-hover:underline">
                {card.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
