/** Replace these placeholders with real roles. Keep summaries as prose, not bullets. */

export type ExperienceRole = {
  id: string;
  dates: string;
  role: string;
  company: string;
  location: string;
  summary: string[];
};

export const experienceIndex = {
  kicker: "Experience / 03 / Record",
  statement: "Replace this line with a short note on the work you have done.",
} as const;

export const experience: ExperienceRole[] = [
  {
    id: "role-one",
    dates: "Jun 2025 — Present",
    role: "Placeholder role one",
    company: "Studio or company name",
    location: "City — Type of engagement",
    summary: [
      "A short paragraph on what you were responsible for and the kind of problems you held. Write it as prose, not a list of duties.",
      "A second sentence or paragraph if needed. Delete it if one is enough.",
    ],
  },
  {
    id: "role-two",
    dates: "Sep 2024 — May 2025",
    role: "Placeholder role two",
    company: "Studio or company name",
    location: "City — Type of engagement",
    summary: [
      "Describe the context: the team, the material, the constraint. Keep it specific when you replace this.",
    ],
  },
  {
    id: "role-three",
    dates: "Jan 2024 — Aug 2024",
    role: "Placeholder role three",
    company: "Studio or company name",
    location: "City — Type of engagement",
    summary: [
      "Earlier work can live here. Delete any entry you do not need, or add more objects to this array.",
    ],
  },
];
