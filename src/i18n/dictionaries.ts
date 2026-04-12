import type { Locale } from "./config";

export type AboutTestimonial = {
  quote: string;
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
};

export type AboutCarouselCopy = {
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

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    creations: string;
    technologies: string;
    toolbox: string;
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
    creations: { title: string; body: string };
    technologies: TechnologiesPageCopy;
    toolbox: { title: string; body: string };
    contact: { title: string; body: string };
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
    technologies: "Tecnologias",
    toolbox: "Caixa de ferramentas",
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
        titleBefore1: "Converte ideias em ",
        emphasis1: "realidade",
        titleBetween: " com soluções ",
        emphasis2: "à tua medida",
        titleAfter: " — da web ao objeto físico.",
        cta: "Ver criações",
        imageAlt: "Pessoa a trabalhar com portátil numa secretária clara",
      },
      carousel: {
        items: [
          {
            quote: "Adorei colaborar contigo neste projeto.",
            body: "Comunicação clara, entregas no prazo e atenção ao detalhe. O resultado superou o que imaginámos para a nossa presença online.",
            attribution: "Ana | Isla Lab",
          },
          {
            quote: "Profissionalismo e criatividade em cada etapa.",
            body: "Desde o protótipo ao deploy, sentimos confiança total. Recomendo para equipas que querem ir além do template.",
            attribution: "Miguel | Estúdio paralelo",
          },
          {
            quote: "O equilíbrio entre design e engenharia é raro.",
            body: "Conseguiste traduzir requisitos técnicos numa experiência simples para o utilizador. Voltaremos a trabalhar juntos.",
            attribution: "Sofia | Tech for Good",
          },
        ],
        cta: "Trabalhar comigo",
        prevAria: "Depoimento anterior",
        nextAria: "Próximo depoimento",
      },
    },
    creations: {
      title: "Minhas criações",
      body: "Galeria ou lista de projetos: substitua por cards, imagens e links reais.",
    },
    technologies: {
      title: "Tecnologias",
      body:
        "Ferramentas e práticas que uso no dia a dia para construir interfaces claras, performantes e fáceis de evoluir.",
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
        body:
          "Combinamos boas práticas de front-end, acessibilidade e deploy para entregar algo sólido — com espaço para iterar contigo em cada passo.",
        imageAlt: "Portátil numa secretária com código no ecrã",
      },
    },
    toolbox: {
      title: "Caixa de ferramentas",
      body: "Ferramentas do dia a dia: editores, plugins, fluxos de trabalho.",
    },
    contact: {
      title: "Diga olá",
      body: "Formulário, e-mail ou redes — adicione seu canal preferido aqui.",
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
    technologies: "Technologies",
    toolbox: "Toolbox",
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
        titleBefore1: "Turn ideas into ",
        emphasis1: "reality",
        titleBetween: " with ",
        emphasis2: "tailored",
        titleAfter: " solutions — from the web to the physical object.",
        cta: "View creations",
        imageAlt: "Person working on a laptop at a bright desk",
      },
      carousel: {
        items: [
          {
            quote: "I have absolutely loved working with you on this project.",
            body: "Clear communication, on-time delivery, and attention to detail. The outcome went beyond what we imagined for our online presence.",
            attribution: "Ana | Isla Lab",
          },
          {
            quote: "Professionalism and creativity at every step.",
            body: "From prototype to deploy, we felt complete confidence. I recommend for teams that want more than a template.",
            attribution: "Miguel | Parallel studio",
          },
          {
            quote: "The balance between design and engineering is rare.",
            body: "You turned technical requirements into a simple experience for users. We will work together again.",
            attribution: "Sofia | Tech for Good",
          },
        ],
        cta: "Work with me",
        prevAria: "Previous testimonial",
        nextAria: "Next testimonial",
      },
    },
    creations: {
      title: "Creations",
      body: "Gallery or project list: replace with real cards, images and links.",
    },
    technologies: {
      title: "Technologies",
      body:
        "Tools and practices I rely on to ship clear, fast interfaces that are easy to evolve.",
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
        body:
          "We pair solid front-end practices, accessibility, and deployment so the result holds up — with room to iterate with you at every step.",
        imageAlt: "Laptop on a desk with code on the screen",
      },
    },
    toolbox: {
      title: "Toolbox",
      body: "Day-to-day tools: editors, plugins, workflows.",
    },
    contact: {
      title: "Say hello",
      body: "Form, email or socials — add your preferred channel here.",
    },
  },
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.pt;
}
