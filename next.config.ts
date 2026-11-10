import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to static files in ./out, served by the Cloudflare Worker in ./worker.
  output: "export",
};

export default nextConfig;
