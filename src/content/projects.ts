/** Replace these placeholders with real projects. Set `image` to a file in `/public`. */

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
  image: string | null;
  imageAlt: string;
  tone: 1 | 2 | 3 | 4;
};

export const projectsIndex = {
  kicker: "Projects / 02 / Index",
  statement: "Replace this line with a short note on the work you choose to show.",
} as const;

export const projects: Project[] = [
  {
    slug: "study-one",
    code: "PROJECT_01",
    title: "Placeholder project one",
    year: "2025",
    role: "Role — replace this",
    timeline: "Season 2025",
    stack: ["TypeScript", "Next.js"],
    links: [],
    body: [
      "Editorial body copy lives here. Describe the problem, the constraint, and what you actually built — in prose, not a feature list.",
      "A second paragraph for texture. What changed because the work exists? What did you refuse to do?",
    ],
    pullQuote: "A sentence from the work, or about it, can sit here later.",
    image: null,
    imageAlt: "Placeholder still for project one",
    tone: 1,
  },
  {
    slug: "study-two",
    code: "PROJECT_02",
    title: "Placeholder project two",
    year: "2025",
    role: "Role — replace this",
    timeline: "Season 2025",
    stack: ["Python"],
    links: [],
    body: [
      "Another write-up. Keep the tone of the site: cold, specific, unhurried.",
      "Swap these sentences when you have the real story. The image panel above will take a grayscale photograph when you set the `image` field.",
    ],
    pullQuote: "A second pull-quote placeholder.",
    image: null,
    imageAlt: "Placeholder still for project two",
    tone: 2,
  },
  {
    slug: "study-three",
    code: "PROJECT_03",
    title: "Placeholder project three",
    year: "2024",
    role: "Role — replace this",
    timeline: "Season 2024",
    stack: ["JavaScript"],
    links: [],
    body: [
      "Use this page as the template. Title, metadata, body, and quote all come from `src/content/projects.ts`.",
    ],
    pullQuote: "Restraint is a material.",
    image: null,
    imageAlt: "Placeholder still for project three",
    tone: 3,
  },
  {
    slug: "study-four",
    code: "PROJECT_04",
    title: "Placeholder project four",
    year: "2024",
    role: "Role — replace this",
    timeline: "Season 2024",
    stack: ["TypeScript"],
    links: [],
    body: [
      "A fourth study so the index has a rhythm of offset cards. Delete any entry you do not need.",
    ],
    pullQuote: "Replace this line with something you would stand by.",
    image: null,
    imageAlt: "Placeholder still for project four",
    tone: 4,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectMeta(project: Project) {
  const stack = project.stack[0]?.toUpperCase() ?? "—";
  return `${project.code} / ${project.year} / ${stack}`;
}
