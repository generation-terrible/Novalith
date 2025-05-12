// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    APP_URL: process.env.APP_URL,
    DEFAULT_EMAIL: process.env.DEFAULT_EMAIL,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-production.easy2pilot-v8.com",
      },
    ],
  },
};

export default nextConfig;
