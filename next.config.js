/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  redirects: async () => [
    { source: '/products/category/post-surgery-essentials', destination: '/products/category/post-surgery', permanent: true },
    { source: '/products/category/chemotherapy-support', destination: '/products/category/chemo-essentials', permanent: true },
    { source: '/products/category/hair-loss-solutions', destination: '/products/category/wigs-hair', permanent: true },
    { source: '/products/category/lymphedema-management', destination: '/products/category/lymphedema', permanent: true },
  ],
}

export default nextConfig
