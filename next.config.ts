import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b8wuh0mhei.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
