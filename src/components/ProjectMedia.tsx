import type { Project } from "@/content/projects";
import { withBasePath } from "@/lib/paths";

type ProjectMediaProps = {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ProjectMedia({
  project,
  className = "",
}: ProjectMediaProps) {
  const grayscale = project.imageGrayscale !== false;
  const fitClassName =
    project.imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <figure
      className={`relative overflow-hidden bg-charcoal ${className}`}
    >
      {project.image ? (
        <img
          src={withBasePath(project.image)}
          alt={project.imageAlt}
          className={`absolute inset-0 h-full w-full ${fitClassName} ${
            grayscale ? "grayscale contrast-125" : ""
          } transition-opacity duration-500 ease-out group-hover:opacity-90`.trim()}
        />
      ) : (
        <>
          <div
            className={`project-mesh project-mesh-${project.tone} absolute inset-0`}
          />
          <div className="hero-grain absolute inset-0 opacity-[0.07]" />
          <svg
            aria-hidden
            viewBox="0 0 320 220"
            className="absolute inset-0 h-full w-full text-silver/35"
          >
            {project.tone === 1 ? (
              <path
                d="M40 200 V96 C40 48 72 24 160 24 C248 24 280 48 280 96 V200"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            ) : null}
            {project.tone === 2 ? (
              <path
                d="M24 40 H296 M24 110 H296 M24 180 H296"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            ) : null}
            {project.tone === 3 ? (
              <circle
                cx="160"
                cy="110"
                r="64"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            ) : null}
            {project.tone === 4 ? (
              <path
                d="M48 200 L160 28 L272 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
              />
            ) : null}
          </svg>
        </>
      )}
    </figure>
  );
}
