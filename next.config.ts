import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local, no external domains needed
    formats: ["image/webp"],
  },
};

export default nextConfig;
