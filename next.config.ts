import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GITHUB_ID: "Ov23lie1OwmeDGGjm8fP",
    GITHUB_SECRET: "422abbac390dbdb3803cc2c57771f1bf5a2fa691",
  },

  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
