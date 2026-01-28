import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bayside-graphics",
  assetPrefix: "/bayside-graphics/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
