"use client";

import Image, { type StaticImageData } from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import type { CreationShowcaseItem } from "@/i18n/dictionaries";
import { getCreationGalleryImages } from "@/components/creations/creationGalleryImages";
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
  openDetailAriaTemplate: string;
  closeLabel: string;
};

function detailAria(template: string, title: string) {
  return template.replaceAll("{title}", title);
}

function resolveGallery(
  item: CreationShowcaseItem,
  fallbackThumb: StaticImageData,
): StaticImageData[] {
  const fromId = getCreationGalleryImages(item.id);
  return fromId.length > 0 ? fromId : [fallbackThumb];
}

function imageAltForSlot(
  item: CreationShowcaseItem,
  index: number,
  total: number,
): string {
  const list = item.galleryImageAlts;
  if (list?.[index]) return list[index]!;
  return `${item.imageAlt} (${index + 1}/${total})`;
}

export function CreationsGithubGrid({
  items,
  openDetailAriaTemplate,
  closeLabel,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogId = useId();

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  const activeItem = selected !== null ? items[selected]! : null;
  const fallbackThumb =
    selected !== null ? SHOWCASE_IMAGES[selected]! : null;
  const galleryImages =
    activeItem && fallbackThumb
      ? resolveGallery(activeItem, fallbackThumb)
      : [];

  const canUseDom = typeof document !== "undefined";

  const modal =
    canUseDom &&
    selected !== null &&
    activeItem &&
    galleryImages.length > 0 &&
    createPortal(
      <div
        className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6"
        role="presentation"
      >
        <button
          type="button"
          className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px] transition-opacity"
          aria-label={closeLabel}
          onClick={close}
        />
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${dialogId}-title`}
          className="relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xl"
        >
          <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 sm:gap-6 sm:p-8">
            <h2
              id={`${dialogId}-title`}
              className="font-serif text-2xl text-foreground sm:text-3xl"
            >
              {activeItem.title}
            </h2>
            <p className="text-base leading-relaxed text-foreground/85">
              {activeItem.detailBody}
            </p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {galleryImages.map((src, index) => (
                <li
                  key={`${activeItem.id}-${index}`}
                  className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-jardim-verde/15 ring-1 ring-foreground/10"
                >
                  <Image
                    src={src}
                    alt={imageAltForSlot(
                      activeItem,
                      index,
                      galleryImages.length,
                    )}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </li>
              ))}
            </ul>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md ring-1 ring-foreground/15 transition hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jardim-verde"
            aria-label={closeLabel}
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14">
        {items.map((item, index) => {
          const frame =
            item.frameClassName ??
            DEFAULT_FRAMES[index % DEFAULT_FRAMES.length]!;
          const src = SHOWCASE_IMAGES[index]!;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setSelected(index)}
                aria-label={detailAria(openDetailAriaTemplate, item.title)}
                aria-expanded={selected === index}
                aria-controls={dialogId}
                className="group w-full rounded-[2rem] text-left outline-none transition-transform duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-jardim-verde focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
              </button>
            </li>
          );
        })}
      </ul>
      {modal}
    </>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
