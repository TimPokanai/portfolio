import type { NextConfig } from "next";
import path from "path";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export" as const,
        basePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: path.join(__dirname),
    resolveAlias: {
      canvas: "./src/lib/empty-module.ts",
    },
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
