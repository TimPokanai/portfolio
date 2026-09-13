"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavActive, navItems, site } from "@/content/site";

const linkClassName =
  "font-sans text-meta uppercase tracking-widest transition-colors duration-500 ease-out hover:text-lavender-muted";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite bg-obsidian">
      <div className="editorial-grid items-baseline px-8 py-8 tablet:px-16 desktop:px-24">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="col-span-3 font-display text-h3 tracking-display text-bone transition-colors duration-500 ease-out hover:text-silver desktop:col-span-2 desktop:text-h2"
        >
          {site.initials}
        </Link>
        <nav
          aria-label="Primary"
          className="col-span-9 desktop:col-span-7 desktop:col-start-6"
        >
          <ul className="flex flex-wrap justify-end gap-x-6 gap-y-4 tablet:gap-x-8">
            {navItems.map((item) => {
              const active = isNavActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${linkClassName} ${
                      active ? "text-lavender-muted" : "text-silver"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
