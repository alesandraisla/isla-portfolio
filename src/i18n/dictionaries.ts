import type { Locale } from "./config";

export type AboutTestimonial = {
  body: string;
  attribution: string;
};

export type AboutSplitCopy = {
  eyebrow: string;
  titleBefore1: string;
  emphasis1: string;
  titleBetween: string;
  emphasis2: string;
  titleAfter: string;
  cta: string;
  imageAlt: string;
  titleBefore2: string;
};

export type AboutCarouselCopy = {
  headingBefore: string;
  headingEmphasis: string;
  headingAfter: string;
  items: AboutTestimonial[];
  cta: string;
  prevAria: string;
  nextAria: string;
};

export type TechGridIconId =
  | "react"
  | "next"
  | "typescript"
  | "tailwind"
  | "node"
  | "git";

export type TechGridItem = {
  iconId: TechGridIconId;
  title: string;
  description: string;
};

export type TechnologiesWaveCopy = {
  heading: string;
  body: string;
  imageAlt: string;
};

export type TechnologiesPageCopy = {
  title: string;
  body: string;
  grid: {
    heading?: string;
    items: TechGridItem[];
  };
  wave: TechnologiesWaveCopy;
};

/** Três cartões fixos (imagens em `CreationsGithubGrid`: rpg, countdown, social). */
export type CreationShowcaseItem = {
  id: string;
  title: string;
  imageAlt: string;
  /** Texto mostrado no painel de detalhe ao clicar no cartão. */
  detailBody: string;
  /** Legendas das fotos no modal (mesma ordem que `getCreationGalleryImages(id)`). */
  galleryImageAlts?: string[];
  frameClassName?: string;
};

export type CreationsPageCopy = {
  title: string;
  body: string;
  /** Use `{title}` no `aria-label` do botão que abre o detalhe. */
  openDetailAria: string;
  /** Rótulo do botão que fecha o painel (modal). */
  closeDetail: string;
  projects: [CreationShowcaseItem, CreationShowcaseItem, CreationShowcaseItem];
};

export type YoutubeLessonItem = {
  /** Chave estável — alinha com `AULA_THUMBNAIL_BY_ID` em `lessonThumbnails.ts`. */
  id: string;
  title: string;
  /** URL completa do vídeo no YouTube. */
  youtubeUrl: string;
  imageAlt: string;
  frameClassName?: string;
};

export type AulasPageCopy = {
  title: string;
  body: string;
  /** Template com `{title}` para o `aria-label` do link. */
  openVideoAria: string;
  lessons: YoutubeLessonItem[];
};

export type ContactSocialId =
  | "youtube"
  | "github"
  | "instagram"
  | "linkedin";

export type ContactSocialItem = {
  id: ContactSocialId;
  url: string;
  label: string;
  action: string;
  linkAria: string;
};

export type ContactPageCopy = {
  title: string;
  body: string;
  socials: ContactSocialItem[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    creations: string;
    aulas: string;
    technologies: string;
    contact: string;
    settings: string;
  };
  home: {
    headline: string;
    sub: string;
    ctaSettings: string;
  };
  settings: {
    title: string;
    language: string;
    palette: string;
    palettes: Record<
      "jardim" | "lavanda" | "blossom" | "orchid",
      { name: string; hint: string }
    >;
  };
  pages: {
    about: {
      title: string;
      body: string;
      split: AboutSplitCopy;
      carousel: AboutCarouselCopy;
    };
    creations: CreationsPageCopy;
    aulas: AulasPageCopy;
    technologies: TechnologiesPageCopy;
    contact: ContactPageCopy;
  };
};

const pt: Dictionary = {
  meta: {
    title: "Isla Lab — Portfólio",
    description: "Portfólio com tema de jardim, Next.js e Tailwind.",
  },
  nav: {
    home: "Início",
    about: "Sobre mim",
    creations: "Minhas criações",
    aulas: "Aulas",
    technologies: "Tecnologias",
    contact: "Diga olá",
    settings: "Configurações",
  },
  home: {
    headline: "Do código ao físico: Explorando o universo maker",
    sub: "Navegue pelas seções ou ajuste idioma e paleta em configurações.",
    ctaSettings: "Abrir configurações",
  },
  settings: {
    title: "Configurações",
    language: "Idioma",
    palette: "Paleta de cores",
    palettes: {
      jardim: {
        name: "Jardim (padrão)",
        hint: "Creme, verde, pêssego e água — base do projeto.",
      },
      lavanda: {
        name: "Lavanda costeira",
        hint: "Periwinkle, lilás e rosas em pó.",
      },
      blossom: {
        name: "Tema Isla lab",
        hint: "Roxo escuro, ciano e acentos violeta.",
      },
      orchid: {
        name: "Orquídea cristal",
        hint: "Azuis aço, lavanda e acentos violeta.",
      },
    },
  },
  pages: {
    about: {
      title: "Sobre mim",
      body: "Conte sua história, valores e o que te move — este bloco é um ponto de partida.",
      split: {
        eyebrow: "Portfólio & experiência maker",
        titleBefore1: "Codificando o ",
        emphasis1: "digital, ",
        titleBetween: " esculpindo ",
        emphasis2: "a",
        titleAfter: " realidade.",
        cta: "Ver criações",
        imageAlt: "Pessoa a trabalhar com portátil numa secretária clara",
        titleBefore2:
          "Sou uma desenvolvedora Frontend movida pela intersecção entre o software e o mundo tangível. Com sólida experiência na construção de interfaces complexas e escaláveis, aplico o rigor da engenharia de software tanto no desenvolvimento web quanto na fabricação digital. Meu foco é unir estética minimalista e precisão técnica para transformar conceitos abstratos em experiências reais, seja através de linhas de código ou de modelos materializados em 3D.",
      },
      carousel: {
        headingBefore: "Impacto real, ",
        headingEmphasis: "do pixel",
        headingAfter: " ao físico",
        items: [
          {
            body: "Achei muito fofa a impressão em 3D, linda mesmo, arrasa demais, trabalho impecável",
            attribution: "Cristhiane | Isla lab",
          },
          {
            body: "Site ficou perfeito com todas as funcionalidades que precisávamos.",
            attribution: "Anieila | Isla lab",
          },
        ],
        cta: "Contactar",
        prevAria: "Depoimento anterior",
        nextAria: "Próximo depoimento",
      },
    },
    creations: {
      title: "Minhas criações",
      body: "Três projetos em destaque — clica num cartão para ver a descrição e o contexto de cada um.",
      openDetailAria: "Ver detalhes de {title}",
      closeDetail: "Fechar",
      projects: [
        {
          id: "rpg",
          title: "RPG & Coffee",
          imageAlt: "Captura do site RPG & Coffee com estética fantástica",
          detailBody:
            "RPGECOFFEE reúne a comunidade de RPG de mesa: agenda de mesas com dezenas de sistemas e horários, livraria online, cardápio temático do café e serviços como pintura de miniaturas — tudo com identidade visual acolhedora e ilustrações fantásticas.",
          galleryImageAlts: [
            "Início com hero, navegação e eventos",
            "Mesas de RPG — diretório com sistemas e horários",
            "Livraria — grelha de livros e HQs",
            "Coffee — cardápio com itens temáticos",
            "Serviços — miniaturas, contacto e redes",
          ],
          frameClassName: "bg-jardim-pessego/50",
        },
        {
          id: "countdown",
          title: "Countdown de lançamento",
          imageAlt: "Landing com contagem decrescente e ilustração de foguete",
          detailBody:
            "Página “coming soon” com temporizador (dias, horas, minutos e segundos), chamada para inscrição e ilustração de foguete. Ideal para gerar expectativa antes de um lançamento.",
          frameClassName: "bg-foreground/15",
        },
        {
          id: "social",
          title: "Página social",
          imageAlt: "Página estilo link-in-bio com avatar e botões",
          detailBody:
            "Perfil estilo link-in-bio: avatar, nome de utilizador, botões para vídeos ou recursos e ícones de redes sociais num layout simples e centrado.",
          frameClassName: "bg-jardim-azul/45",
        },
      ],
    },
    aulas: {
      title: "Aulas",
      body: "Vídeos do canal — clique em um dos cartões para assistir a aula.",
      openVideoAria:
        "Abrir a aula {title} no YouTube (abre num novo separador)",
      lessons: [
        {
          id: "acessibilidade",
          title: "Componente de acessibilidade (font size)",
          youtubeUrl: "https://www.youtube.com/watch?v=TbBB2GkY93Q",
          imageAlt:
            "Miniatura: Criando um componente de acessibilidade — Font Size",
          frameClassName: "bg-jardim-pessego/50",
        },
        {
          id: "dropdown",
          title: "Dropdown customizado (ReactJS)",
          youtubeUrl: "https://www.youtube.com/watch?v=wb6JzjY-u_M",
          imageAlt: "Miniatura: Criando um dropdown customizado em ReactJS",
          frameClassName: "bg-foreground/15",
        },
        {
          id: "menu_hamburguer",
          title: "Menu hambúrguer (React)",
          youtubeUrl: "https://www.youtube.com/watch?v=7j6s_TiQNGY",
          imageAlt: "Miniatura: Criando um menu hambúrguer com React",
          frameClassName: "bg-jardim-azul/45",
        },
        {
          id: "microfrontend",
          title: "Micro-frontend, bibliotecas e monorepo",
          youtubeUrl: "https://www.youtube.com/watch?v=lch6KXesgTw",
          imageAlt:
            "Miniatura: Micro-frontend, bibliotecas e monorepo no YouTube",
          frameClassName: "bg-jardim-verde/55",
        },
      ],
    },
    technologies: {
      title: "Tecnologias",
      body: "Ferramentas e práticas que uso no dia a dia para construir interfaces claras, performantes e fáceis de evoluir.",
      grid: {
        heading: "Stack de trabalho",
        items: [
          {
            iconId: "react",
            title: "React",
            description:
              "Componentes declarativos e ecossistema maduro para UIs reutilizáveis.",
          },
          {
            iconId: "next",
            title: "Next.js",
            description:
              "App Router, rotas e otimizações para carregar rápido em produção.",
          },
          {
            iconId: "typescript",
            title: "TypeScript",
            description:
              "Tipagem que reduz erros e documenta intenções no código.",
          },
          {
            iconId: "tailwind",
            title: "Tailwind CSS",
            description:
              "Utilitários consistentes com o tema do jardim e iteração rápida.",
          },
          {
            iconId: "node",
            title: "Node.js",
            description:
              "Scripts, APIs e ferramentas quando o projeto precisa de backend.",
          },
          {
            iconId: "git",
            title: "Git",
            description:
              "Histórico claro, branches e revisão para trabalhar em equipa.",
          },
        ],
      },
      wave: {
        heading: "Do protótipo à produção",
        body: "Combinamos boas práticas de front-end, acessibilidade e deploy para entregar algo sólido — com espaço para iterar contigo em cada passo.",
        imageAlt: "Portátil numa secretária com código no ecrã",
      },
    },
    contact: {
      title: "Diga olá",
      body: "Escolhe uma rede abaixo — cada ícone leva ao perfil ou canal correspondente.",
      socials: [
        {
          id: "youtube",
          url: "https://www.youtube.com/@isladevlab",
          label: "YouTube",
          action: "Subscrever",
          linkAria: "Abrir YouTube num novo separador",
        },
        {
          id: "github",
          url: "https://github.com/alesandraisla/",
          label: "GitHub",
          action: "Ver código",
          linkAria: "Abrir GitHub num novo separador",
        },
        {
          id: "instagram",
          url: "https://www.instagram.com/alesandradev/",
          label: "Instagram",
          action: "Seguir",
          linkAria: "Abrir Instagram num novo separador",
        },
        {
          id: "linkedin",
          url: "https://www.linkedin.com/in/alesandramempis/",
          label: "LinkedIn",
          action: "Conectar",
          linkAria: "Abrir LinkedIn num novo separador",
        },
      ],
    },
  },
};

const en: Dictionary = {
  meta: {
    title: "Isla Lab — Portfolio",
    description: "A garden-themed portfolio built with Next.js and Tailwind.",
  },
  nav: {
    home: "Home",
    about: "About",
    creations: "Creations",
    aulas: "Lessons",
    technologies: "Technologies",
    contact: "Say hello",
    settings: "Settings",
  },
  home: {
    headline: "From code to physical: Exploring the maker universe",
    sub: "Browse sections or adjust language and palette in settings.",
    ctaSettings: "Open settings",
  },
  settings: {
    title: "Settings",
    language: "Language",
    palette: "Color palette",
    palettes: {
      jardim: {
        name: "Garden (default)",
        hint: "Cream, green, peach and water — project baseline.",
      },
      lavanda: {
        name: "Coastal lavender",
        hint: "Periwinkle, lilac and dusty rose.",
      },
      blossom: {
        name: "Isla lab theme",
        hint: "Dark purple, cyan and violet accents.",
      },
      orchid: {
        name: "Crystal orchid",
        hint: "Steel blues, lavender and violet accents.",
      },
    },
  },
  pages: {
    about: {
      title: "About",
      body: "Tell your story, values and what drives you — this is a starting point.",
      split: {
        eyebrow: "Bespoke portfolio & maker craft",
        titleBefore1: "Coding the ",
        emphasis1: "digital, ",
        titleBetween: " sculpting ",
        emphasis2: "the",
        titleAfter: " reality.",
        cta: "View creations",
        imageAlt: "Person working on a laptop at a bright desk",
        titleBefore2: "I'm a Frontend Developer driven by the intersection of software and tangible world. With solid experience building complex and scalable interfaces, I apply software engineering rigor in both web development and digital fabrication. My focus is to unite minimalist aesthetics and technical precision to transform abstract concepts into real experiences, whether through lines of code or 3D models materialized.",
      },
      carousel: {
        headingBefore: "Real impact, ",
        headingEmphasis: "from the pixel",
        headingAfter: " to the physical",
        items: [
          {
            body: "I found the 3D print really cute, really beautiful, amazing, impeccable work.",
            attribution: "Cristhiane | Isla lab",
          },
          {
            body: "The site is perfect with all the features we needed.",
            attribution: "Anieila | Isla lab",
          },
        ],
        cta: "Work with me",
        prevAria: "Previous testimonial",
        nextAria: "Next testimonial",
      },
    },
    creations: {
      title: "Creations",
      body: "Three featured projects — click a card to read more about each one.",
      openDetailAria: "View details for {title}",
      closeDetail: "Close",
      projects: [
        {
          id: "rpg",
          title: "RPG & Coffee",
          imageAlt: "Screenshot of the RPG & Coffee fantasy-themed site",
          detailBody:
            "RPGECOFFEE brings together the tabletop RPG community: a directory of game tables and schedules across many systems, an online bookstore, a themed café menu, and services like miniature painting—wrapped in a warm, illustrated brand.",
          galleryImageAlts: [
            "Home — hero, navigation, and events",
            "RPG tables — directory with systems and schedules",
            "Bookstore — product grid",
            "Coffee — themed menu",
            "Services — miniatures, contact, and socials",
          ],
          frameClassName: "bg-jardim-pessego/50",
        },
        {
          id: "countdown",
          title: "Launch countdown",
          imageAlt: "Landing page with countdown timer and rocket illustration",
          detailBody:
            "A “coming soon” page with a live countdown (days, hours, minutes, seconds), signup CTA, and rocket artwork — built to build hype before a launch.",
          frameClassName: "bg-foreground/15",
        },
        {
          id: "social",
          title: "Social page",
          imageAlt: "Link-in-bio style page with avatar and buttons",
          detailBody:
            "Link-in-bio profile: avatar, handle, buttons for videos or links, and social icons in a clean, centered layout.",
          frameClassName: "bg-jardim-azul/45",
        },
      ],
    },
    aulas: {
      title: "Lessons",
      body: "Videos from the channel — click a card to watch the lesson.",
      openVideoAria: "Open the {title} lesson on YouTube (opens in a new tab)",
      lessons: [
        {
          id: "acessibilidade",
          title: "Accessibility component (font size)",
          youtubeUrl: "https://www.youtube.com/watch?v=TbBB2GkY93Q",
          imageAlt:
            "Thumbnail: Building an accessibility component — Font Size",
          frameClassName: "bg-jardim-pessego/50",
        },
        {
          id: "dropdown",
          title: "Custom dropdown (React)",
          youtubeUrl: "https://www.youtube.com/watch?v=wb6JzjY-u_M",
          imageAlt: "Thumbnail: Custom dropdown in React",
          frameClassName: "bg-foreground/15",
        },
        {
          id: "menu_hamburguer",
          title: "Hamburger menu (React)",
          youtubeUrl: "https://www.youtube.com/watch?v=7j6s_TiQNGY",
          imageAlt: "Thumbnail: Hamburger menu with React",
          frameClassName: "bg-jardim-azul/45",
        },
        {
          id: "microfrontend",
          title: "Micro-frontends, libraries & monorepo",
          youtubeUrl: "https://www.youtube.com/watch?v=lch6KXesgTw",
          imageAlt:
            "Thumbnail: Micro-frontends, libraries and monorepo on YouTube",
          frameClassName: "bg-jardim-verde/55",
        },
      ],
    },
    technologies: {
      title: "Technologies",
      body: "Tools and practices I rely on to ship clear, fast interfaces that are easy to evolve.",
      grid: {
        heading: "Day-to-day stack",
        items: [
          {
            iconId: "react",
            title: "React",
            description:
              "Declarative components and a mature ecosystem for reusable UIs.",
          },
          {
            iconId: "next",
            title: "Next.js",
            description:
              "App Router, routing, and production-minded performance defaults.",
          },
          {
            iconId: "typescript",
            title: "TypeScript",
            description:
              "Types that catch mistakes early and clarify intent in the codebase.",
          },
          {
            iconId: "tailwind",
            title: "Tailwind CSS",
            description:
              "Utility-first styling aligned with the garden theme and fast iteration.",
          },
          {
            iconId: "node",
            title: "Node.js",
            description:
              "Scripts, APIs, and tooling when a project needs a backend layer.",
          },
          {
            iconId: "git",
            title: "Git",
            description:
              "History, branches, and review workflows for confident collaboration.",
          },
        ],
      },
      wave: {
        heading: "From prototype to production",
        body: "We pair solid front-end practices, accessibility, and deployment so the result holds up — with room to iterate with you at every step.",
        imageAlt: "Laptop on a desk with code on the screen",
      },
    },
    contact: {
      title: "Say hello",
      body: "Pick a network below — each icon opens the matching profile or channel.",
      socials: [
        {
          id: "youtube",
          url: "https://www.youtube.com/",
          label: "YouTube",
          action: "Subscribe",
          linkAria: "Open YouTube in a new tab",
        },
        {
          id: "github",
          url: "https://github.com/",
          label: "GitHub",
          action: "View code",
          linkAria: "Open GitHub in a new tab",
        },
        {
          id: "instagram",
          url: "https://www.instagram.com/",
          label: "Instagram",
          action: "Follow",
          linkAria: "Open Instagram in a new tab",
        },
        {
          id: "linkedin",
          url: "https://www.linkedin.com/",
          label: "LinkedIn",
          action: "Connect",
          linkAria: "Open LinkedIn in a new tab",
        },
      ],
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.pt;
}
