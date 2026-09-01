import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // static export — same as the current HTML site
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
