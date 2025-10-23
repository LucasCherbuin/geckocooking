/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
};

export default nextConfig;
