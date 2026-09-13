import { site } from "@/content/site";

const linkClassName =
  "font-mono text-meta text-silver transition-colors duration-500 ease-out hover:text-lavender-muted";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    ...(site.email
      ? [{ label: site.email, href: `mailto:${site.email}` }]
      : []),
    ...site.socials.map((social) => ({
      label: social.label,
      href: social.href,
    })),
  ];

  return (
    <footer className="mt-24 border-t border-graphite tablet:mt-32">
      <div className="editorial-grid items-baseline px-8 py-16 tablet:px-16 tablet:py-24 desktop:px-24">
        <ul className="col-span-12 flex flex-wrap gap-x-8 gap-y-4 desktop:col-span-7 desktop:col-start-2">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            const isMail = link.href.startsWith("mailto:");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${linkClassName} ${
                    isMail
                      ? "normal-case tracking-wide"
                      : "uppercase tracking-meta"
                  }`}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="col-span-12 mt-8 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-3 desktop:col-start-10 desktop:mt-0 desktop:text-right">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
