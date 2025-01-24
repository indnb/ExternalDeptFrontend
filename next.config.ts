import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_PORT: "http://0.0.0.0:8181/api",
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
