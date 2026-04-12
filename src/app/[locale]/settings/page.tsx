import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageTransition } from "@/components/motion/PageTransition";
import { SettingsPanels } from "@/components/settings/SettingsPanels";

type Props = { params: Promise<{ locale: string }> };

export default async function SettingsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <PageTransition>
      <div className="space-y-8">
        <h1 className="font-serif text-4xl text-foreground">
          {dict.settings.title}
        </h1>
        <SettingsPanels locale={locale} dict={dict} />
      </div>
    </PageTransition>
  );
}
