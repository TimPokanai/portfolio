import { projects, projectsIndex } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function ProjectsIndex() {
  return (
    <main className="editorial-grid px-8 pb-24 pt-16 tablet:px-16 tablet:pb-32 tablet:pt-24 desktop:px-24">
      <p className="hero-copy col-span-12 flex items-center gap-4 font-mono text-meta uppercase tracking-meta text-silver desktop:col-span-7 desktop:col-start-2">
        <span aria-hidden className="inline-block h-px w-8 bg-lavender-muted" />
        {projectsIndex.kicker}
      </p>
      <h1 className="hero-copy hero-copy-delay-1 col-span-12 mt-8 font-display font-medium text-h1 text-bone desktop:col-span-8 desktop:col-start-2">
        {projectsIndex.statement}
      </h1>
      <div className="hero-copy hero-copy-delay-2 col-span-12 mt-16 border-t border-graphite desktop:col-span-8 desktop:col-start-2" />

      {projects.map((project, index) => (
        <Reveal
          key={project.slug}
          delayMs={index * 70}
          className="editorial-grid col-span-12 mt-16 desktop:mt-24"
        >
          <div
            className={`col-span-12 desktop:col-span-7 ${
              index % 2 === 0 ? "desktop:col-start-2" : "desktop:col-start-5"
            }`}
          >
            <ProjectCard project={project} />
          </div>
        </Reveal>
      ))}
    </main>
  );
}
