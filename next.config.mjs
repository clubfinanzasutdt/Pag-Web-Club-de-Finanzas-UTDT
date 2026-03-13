import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: repoRoot,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: repoRoot
  }
};

export default nextConfig;
