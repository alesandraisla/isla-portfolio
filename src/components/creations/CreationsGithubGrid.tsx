import Image, { type StaticImageData } from "next/image";
import type { CreationShowcaseItem } from "@/i18n/dictionaries";
import rpg from "@/assets/rpg.png";
import countdown from "@/assets/countdown.png";
import social from "@/assets/social.png";

const SHOWCASE_IMAGES: readonly [StaticImageData, StaticImageData, StaticImageData] =
  [rpg, countdown, social];

const DEFAULT_FRAMES = [
  "bg-jardim-pessego/50",
  "bg-foreground/15",
  "bg-jardim-azul/45",
] as const;

type Props = {
  items: [CreationShowcaseItem, CreationShowcaseItem, CreationShowcaseItem];
  /** Template com `{title}` para o atributo `aria-label` do link. */
  openRepoAriaTemplate: string;
};

function linkAria(template: string, title: string) {
  return template.replaceAll("{title}", title);
}

export function CreationsGithubGrid({
  items,
  openRepoAriaTemplate,
}: Props) {
  return (
    <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14">
      {items.map((item, index) => {
        const frame =
          item.frameClassName ??
          DEFAULT_FRAMES[index % DEFAULT_FRAMES.length]!;
        const src = SHOWCASE_IMAGES[index]!;
        return (
          <li key={item.title}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkAria(openRepoAriaTemplate, item.title)}
              className="group block rounded-[2rem] outline-none transition-transform duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-jardim-verde focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div
                className={`rounded-[2rem] p-8 shadow-sm ring-1 ring-foreground/5 sm:p-10 ${frame}`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-background/40">
                  <Image
                    src={src}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top transition duration-300 group-hover:brightness-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-center font-serif text-lg text-foreground sm:text-xl">
                {item.title}
              </h3>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
