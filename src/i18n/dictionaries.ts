import type { Locale } from "./config";

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
    about: { title: string; body: string };
    creations: { title: string; body: string };
    technologies: { title: string; body: string };
    toolbox: { title: string; body: string };
    contact: { title: string; body: string };
  };
};

const pt: Dictionary = {
  meta: {
    title: "Isla Garden — Portfólio",
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
    headline: "Um cantinho verde no código",
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
        name: "Aurora cerejeira",
        hint: "Teal suave, rosas em pó e fundo luminoso.",
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
    },
    creations: {
      title: "Minhas criações",
      body: "Galeria ou lista de projetos: substitua por cards, imagens e links reais.",
    },
    technologies: {
      title: "Tecnologias",
      body: "Stack favorita, frameworks e onde você mais gosta de codar.",
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
    title: "Isla Garden — Portfolio",
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
    headline: "A green corner in the code",
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
        name: "Cherry dawn",
        hint: "Soft teal, dusty rose and airy highlights.",
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
    },
    creations: {
      title: "Creations",
      body: "Gallery or project list: replace with real cards, images and links.",
    },
    technologies: {
      title: "Technologies",
      body: "Favorite stack, frameworks and where you love to build.",
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
