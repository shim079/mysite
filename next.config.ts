/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mysite',
  assetPrefix: '/mysite/',
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
