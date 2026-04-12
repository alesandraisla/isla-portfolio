import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageTransition } from "@/components/motion/PageTransition";
import { AboutSplitSection } from "@/components/about/AboutSplitSection";
import { TestimonialCarousel } from "@/components/about/TestimonialCarousel";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const about = dict.pages.about;

  return (
    <PageTransition>
      <div className="space-y-12 sm:space-y-16">
        <AboutSplitSection locale={locale} copy={about.split} />
        <TestimonialCarousel locale={locale} copy={about.carousel} />
      </div>
    </PageTransition>
  );
}
