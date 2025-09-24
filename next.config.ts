import type { NextConfig } from "next";

const target = process.env.NEXT_TARGET; // 'ghpages' | undefined
const explicitBase = process.env.NEXT_PUBLIC_BASE_PATH;
const isGhPages = target === 'ghpages';
const base =
  explicitBase !== undefined
    ? explicitBase
    : isGhPages
    ? '/defectscan.github.io'
    : '';

const nextConfig: NextConfig = {
  output: isGhPages ? 'export' : undefined,
  trailingSlash: isGhPages ? true : undefined,
  basePath: base || undefined,
  assetPrefix: base ? `${base}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;
