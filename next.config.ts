import type { NextConfig } from "next";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '/defectscan.github.io';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: base,
  assetPrefix: `${base}/`,
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
