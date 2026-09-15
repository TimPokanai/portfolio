const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public-root path so GitHub Pages (`/portfolio`) still resolves. */
export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  return `${basePath}${path}`;
}

