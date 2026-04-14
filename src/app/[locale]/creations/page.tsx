import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageTransition } from "@/components/motion/PageTransition";
import { CreationsGithubGrid } from "@/components/creations/CreationsGithubGrid";

type Props = { params: Promise<{ locale: string }> };

export default async function CreationsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const p = dict.pages.creations;

  return (
    <PageTransition>
      <div className="space-y-10 sm:space-y-14">
        <header className="space-y-4">
          <h1 className="font-serif text-4xl tracking-tight text-foreground">
            {p.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/85">
            {p.body}
          </p>
        </header>
        <CreationsGithubGrid
          items={p.projects}
          openDetailAriaTemplate={p.openDetailAria}
          closeLabel={p.closeDetail}
        />
      </div>
    </PageTransition>
  );
}
