import Link from "next/link";
import { projectMeta, type Project } from "@/content/projects";
import { ProjectMedia } from "@/components/ProjectMedia";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-graphite transition-colors duration-500 ease-out hover:border-silver"
    >
      <ProjectMedia
        project={project}
        className="aspect-[4/3]"
        sizes="(min-width: 1025px) 50vw, 100vw"
      />
      <div className="px-6 py-6">
        <h2 className="font-display text-h2 text-bone transition-colors duration-500 ease-out group-hover:text-lavender-muted">
          {project.title}
        </h2>
        <p className="mt-4 font-mono text-meta uppercase tracking-meta text-silver">
          {projectMeta(project)}
        </p>
      </div>
    </Link>
  );
}
