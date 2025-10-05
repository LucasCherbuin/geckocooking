const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/_assets' : '',
  experimental: {
    optimizePackageImports: ['@mui/material'],
  },
};

export default nextConfig;
