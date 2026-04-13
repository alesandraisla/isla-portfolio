import type { YoutubeLessonItem } from "@/i18n/dictionaries";
import { youtubeThumbnailUrl, youtubeWatchUrl } from "@/lib/youtube";
import { AulasLessonCard } from "./AulasLessonCard";

const DEFAULT_FRAMES = [
  "bg-jardim-pessego/50",
  "bg-foreground/15",
  "bg-jardim-azul/45",
  "bg-jardim-verde/55",
] as const;

type Props = {
  items: YoutubeLessonItem[];
  openVideoAriaTemplate: string;
};

function linkAria(template: string, title: string) {
  return template.replaceAll("{title}", title);
}

export function AulasYoutubeGrid({ items, openVideoAriaTemplate }: Props) {
  if (items.length === 0) return null;

  return (
    <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:gap-14">
      {items.map((item, index) => {
        const frame =
          item.frameClassName ??
          DEFAULT_FRAMES[index % DEFAULT_FRAMES.length]!;
        const href = youtubeWatchUrl(item.videoId);
        const imageUrl = youtubeThumbnailUrl(item.videoId);
        return (
          <li key={`${item.videoId}-${item.title}`}>
            <AulasLessonCard
              title={item.title}
              href={href}
              imageUrl={imageUrl}
              imageAlt={item.imageAlt}
              frameClassName={frame}
              ariaLabel={linkAria(openVideoAriaTemplate, item.title)}
            />
          </li>
        );
      })}
    </ul>
  );
}
