export const site = {
  name: "Tim Pokanai",
  initials: "TGP",
  location: "Hamilton",
  email: "timpokanai@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/TimPokanai" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/timpokanai/" },
  ],
  hero: {
    kicker: "Home / 2026 / Hamilton",
    givenName: "Tim",
    surname: "Pokanai",
    lede: "Software and data systems.",
  },
} as const;

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
