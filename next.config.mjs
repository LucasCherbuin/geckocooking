const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  //react
  reactStrictMode: true,
  //sass
  sassOptions: {
    implementation: 'sass-embedded'
  },
  //optimizeCSS
  experimental: {
    optimizeCss: false,
    turbo: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "lightningcss": false,
    };
    return config;
=======
  reactStrictMode: true,
  assetPrefix: isProd ? '/_assets' : '',
  experimental: {
    optimizePackageImports: ['@mui/material'],
>>>>>>> Authentification/connexion
  },
};

export default nextConfig;
