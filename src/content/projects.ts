export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  year: string;
  role: string;
  timeline: string;
  stack: string[];
  links: ProjectLink[];
  body: string[];
  pullQuote: string;
  /** Path under `/public`. Drop the file there, e.g. `/projects/study-one.png`. */
  image: string | null;
  imageAlt: string;
  /** Photos stay grayscale. Screenshots should set this to false. */
  imageGrayscale?: boolean;
  imageFit?: "cover" | "contain";
  tone: 1 | 2 | 3 | 4;
};

export const projectsIndex = {
  kicker: "Projects / 02 / Index",
  statement: "I try to make things that are useful and beautiful.",
} as const;

export const projects: Project[] = [
  {
    slug: "portfolio",
    code: "SITE_01",
    title: "Portfolio Website",
    year: "2026",
    role: "Designer / Developer",
    timeline: "Summer 2026",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    links: [
      { label: "View Website", href: "https://timpokanai.com" },
      { label: "View Code", href: "https://github.com/TimPokanai/portfolio" },
    ],
    body: [
      "I wanted a site that could hold still. Most developer portfolios shout: neon, centered stacks, a hamburger, a résumé as a download and nothing else. This one is built as an editorial object — nocturnal, architectural, with Fraunces for the things I am willing to stand on and Inter for everything you actually have to read. The constraint was the brief: lavender only as a whisper, motion only as a fade and sixteen pixels of lift, no filled buttons, no bounce.",
      "The work was sequential on purpose. Tokens and type first, then nav and footer, then home, about, the project card and its detail, the experience timeline, and finally contact with an in-page résumé. The record on Contact is drawn with pdf.js rather than the browser’s plugin; the form is underlined fields and a hairline send, with a mail draft as the fallback until a form backend earns its keep. Photographs are desaturated. The one exception is this screenshot, which is a still of the interface and has to stay in color or it stops being evidence.",
      "Shipping was part of the design. The app is a Next.js static export on GitHub Pages, which means the live object lives under /portfolio and every public file has to know that. Making the repository public, wiring the Action, and watching the first deploy go up with blank figures taught the same lesson as the palette: the unglamorous path is the one that actually holds. The site is the proof of the process, not a brochure for it.",
    ],
    pullQuote: "Inspired by E-era Ecco2k.",
    image: "/projects/study-one.png",
    imageAlt: "Color screenshot of the portfolio home page",
    imageGrayscale: false,
    imageFit: "contain",
    tone: 1,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectMeta(project: Project) {
  const stack = project.stack[0]?.toUpperCase() ?? "—";
  return `${project.code} / ${project.year} / ${stack}`;
}
