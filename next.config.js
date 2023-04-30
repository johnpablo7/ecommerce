/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "directus.johnpablo7.com",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
