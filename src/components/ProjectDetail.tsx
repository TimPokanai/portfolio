import Link from "next/link";
import { projectMeta, type Project } from "@/content/projects";
import { ProjectMedia } from "@/components/ProjectMedia";
import { Reveal } from "@/components/Reveal";

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-meta uppercase tracking-meta text-lavender-muted">
        {label}
      </p>
      <p className="mt-2 font-mono text-meta uppercase tracking-meta text-silver">
        {value}
      </p>
    </div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="editorial-grid px-8 pb-24 pt-16 tablet:px-16 tablet:pb-32 tablet:pt-24 desktop:px-24">
      <p className="hero-copy col-span-12 flex items-center gap-4 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-8 desktop:col-start-2">
        <span aria-hidden className="inline-block h-px w-8 bg-lavender-muted" />
        <Link
          href="/projects"
          className="transition-colors duration-500 ease-out hover:text-lavender-muted"
        >
          Index
        </Link>
        <span aria-hidden>/</span>
        <span>{project.code}</span>
      </p>
      <h1 className="hero-copy hero-copy-delay-1 col-span-12 mt-8 font-display font-medium text-h1 text-bone desktop:col-span-9 desktop:col-start-2">
        {project.title}
      </h1>
      <p className="hero-copy hero-copy-delay-2 col-span-12 mt-6 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-8 desktop:col-start-2">
        {projectMeta(project)}
      </p>

      <Reveal className="col-span-12 mt-16 desktop:mt-24">
        <ProjectMedia
          project={project}
          className="aspect-[16/10] min-h-64 desktop:min-h-96"
          sizes="100vw"
          priority
        />
      </Reveal>

      <Reveal className="col-span-12 mt-16 flex flex-col gap-8 desktop:col-span-3 desktop:col-start-2 desktop:mt-24">
        <MetaBlock label="Role" value={project.role} />
        <MetaBlock label="Timeline" value={project.timeline} />
        <MetaBlock label="Stack" value={project.stack.join(" / ")} />
        {project.links.length > 0 ? (
          <div>
            <p className="font-mono text-meta uppercase tracking-meta text-lavender-muted">
              Links
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-meta uppercase tracking-meta text-silver transition-colors duration-500 ease-out hover:text-lavender-muted"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Reveal>

      <Reveal className="col-span-12 mt-16 desktop:col-span-6 desktop:col-start-6 desktop:mt-24">
        <div className="flex flex-col gap-8">
          {project.body.map((paragraph, index) => (
            <p key={index} className="font-sans text-body text-silver">
              {paragraph}
            </p>
          ))}
        </div>
        <blockquote className="mt-16 font-display text-h2 text-bone">
          {project.pullQuote}
        </blockquote>
      </Reveal>
    </main>
  );
}
