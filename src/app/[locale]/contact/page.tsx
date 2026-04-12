import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageArticle } from "@/components/layout/PageArticle";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const p = dict.pages.contact;

  return (
    <PageArticle title={p.title}>
      <p>{p.body}</p>
    </PageArticle>
  );
}
