

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mysite',
  assetPrefix: '/mysite/',
  // Optional: if you use images or static assets
  images: {
    unoptimized: true,
  },
  // Optional: if deploying static export
  output: 'export',
};

module.exports = nextConfig;
