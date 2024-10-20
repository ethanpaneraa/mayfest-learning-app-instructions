/** @type {import('next').NextConfig} */
const repo = "mayfest-learning-app-instructions";

const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
};

module.exports = nextConfig;
