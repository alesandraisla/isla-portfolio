import { PageTransition } from "@/components/motion/PageTransition";

export function PageArticle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      <article className="space-y-6">
        <h1 className="font-serif text-4xl tracking-tight text-foreground">
          {title}
        </h1>
        <div className="max-w-2xl text-lg leading-relaxed text-foreground/85">
          {children}
        </div>
      </article>
    </PageTransition>
  );
}
