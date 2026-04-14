import type { StaticImageData } from "next/image";
import rpg from "@/assets/rpg.png";
import rpg2 from "@/assets/rpg2.png";
import rpg3 from "@/assets/rpg3.png";
import rpg4 from "@/assets/rpg4.png";
import rpg5 from "@/assets/rpg5.png";
import countdown from "@/assets/countdown.png";
import social from "@/assets/social.png";

const RPG_GALLERY: StaticImageData[] = [rpg, rpg2, rpg3, rpg4, rpg5];

/** Imagens mostradas no modal de detalhe por `id` do projeto. */
export function getCreationGalleryImages(projectId: string): StaticImageData[] {
  switch (projectId) {
    case "rpg":
      return RPG_GALLERY;
    case "countdown":
      return [countdown];
    case "social":
      return [social];
    default:
      return [];
  }
}
