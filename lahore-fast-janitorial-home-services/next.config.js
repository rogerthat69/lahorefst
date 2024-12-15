/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["karsaaz.app", "internal.karsaaz.app", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
