/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/mysite',
  assetPrefix: '/mysite/',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
