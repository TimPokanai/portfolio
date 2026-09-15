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
  statement: "Experience from industry leaders in financial services.",
} as const;

export const experience: ExperienceRole[] = [
  {
    id: "solution-designer",
    dates: "May 2026 — Present",
    role: "Solution Designer - Enterprise Architecture, IT",
    company: "CIBC Mellon",
    location: "Toronto - Hybrid",
    summary: [
      "Helping shape the current and future state of the technology landscape at CIBC Mellon by designing the foundations of Enterprise Aarchitecture technology security, governance, and compliance.",
      "Collaborating across IT teams to design and implement solutions that align with business objectives and technology strategies. Building the occasional data analysis dashboard in PowerBI and automated flow using Power Automate.",
    ],
  },
  {
    id: "software-developer",
    dates: "Jan 2025 — Aug 2025",
    role: "Software Developer - Shared Services, IT",
    company: "Intact Financial Corporation",
    location: "Toroto - Hybrid",
    summary: [
      "I built a generic and configurable API that performed ETLs for mainframe data validation and processing using Java Spring Boot and MongoDB. This saved the senior devs on our team 10+ hours/week to focus on more important things.", 
      "I also built, migrated, and maintained backend systems, resolving 150+ critical/high CVE's and bugs in systems shared across Intact's IT.",
    ],
  },
  {
    id: "software-engineer-intern",
    dates: "May 2024 — Dec 2024",
    role: "Software Engineer Intern - API Team, IT",
    company: "LTM Canada",
    location: "Mississauga - Hybrid",
    summary: [
      "Built and maintained an API to perform data masking services for clients using Java Spring Boot, AWS Lambda and AWS Step Functions. Further developed, maintained, and tested other APIs.",
      "Enhanced the performance and security of multiple Java Spring Boot APIs by migrating from SQL authentication to JWT authentication.",
    ],
  },
  {
    id: "full-stack-developer",
    dates: "June 2023 - May 2024",
    role: "Full-Stack Developer",
    company: "314Labs",
    location: "Toronto - Hybrid",
    summary: [
      "Worked in a highly energetic and small startup team, responsible for the development and ownership of HypeFundr's Campaign Creation component. ",
    ],
  },
];
