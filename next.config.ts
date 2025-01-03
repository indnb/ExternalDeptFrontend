import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_PORT: 'http://0.0.0.0:8181/api',
  }, 
};

export default nextConfig;
