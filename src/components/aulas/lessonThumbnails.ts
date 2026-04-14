import type { StaticImageData } from "next/image";
import componenteAcessibilidade from "@/assets/componente_acessibilidade.png";
import criandoDropdown from "@/assets/criando_drodown.png";
import menuHamburguer from "@/assets/menuhamburguer.png";
import microfront from "@/assets/microfront.png";

/** Miniaturas locais — chaves = `YoutubeLessonItem.id` nos dicionários. */
export const AULA_THUMBNAIL_BY_ID: Record<string, StaticImageData> = {
  acessibilidade: componenteAcessibilidade,
  dropdown: criandoDropdown,
  menu_hamburguer: menuHamburguer,
  microfrontend: microfront,
};
