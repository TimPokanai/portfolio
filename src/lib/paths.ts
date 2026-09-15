const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public-root path so GitHub Pages (`/portfolio`) still resolves. */
export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function resumeFileUrl() {
  const url = withBasePath("/resume/tim-pokanai-resume.pdf");
  const version = process.env.NEXT_PUBLIC_RESUME_V;

  return version ? `${url}?v=${version}` : url;
}

