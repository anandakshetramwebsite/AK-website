import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin workspace root so dev doesn't pick up ~/package-lock.json
  outputFileTracingRoot: path.join(process.cwd()),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
