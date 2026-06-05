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
    minimumCacheTTL: 2592000,
  },
  redirects: async () => [
    // ── Old category slugs → new collection URLs ──
    { source: '/products/category/post-surgery',                destination: '/collections/recovery-body-support', permanent: true },
    { source: '/products/category/post-surgery-essentials',     destination: '/collections/recovery-body-support', permanent: true },
    { source: '/products/category/chemo-essentials',            destination: '/collections/everyday-wellness',     permanent: true },
    { source: '/products/category/chemotherapy-support',        destination: '/collections/everyday-wellness',     permanent: true },
    { source: '/products/category/wigs-hair',                   destination: '/collections/hair-confidence',       permanent: true },
    { source: '/products/category/wigs',                        destination: '/collections/hair-confidence',       permanent: true },
    { source: '/products/category/hair-loss-solutions',         destination: '/collections/hair-confidence',       permanent: true },
    { source: '/products/category/lymphedema',                  destination: '/collections/recovery-body-support', permanent: true },
    { source: '/products/category/lymphedema-management',       destination: '/collections/recovery-body-support', permanent: true },
    { source: '/products/category/sensitive-skin',              destination: '/collections/everyday-wellness',     permanent: true },

    // ── Old product ID-based URLs → new slug-based URLs ──
    { source: '/products/1',  destination: '/products/nature-nest',     permanent: true },
    { source: '/products/2',  destination: '/products/nest-carry',      permanent: true },
    { source: '/products/3',  destination: '/products/nest-carry',      permanent: true },
    { source: '/products/4',  destination: '/products/willow-support',  permanent: true },
    { source: '/products/5',  destination: '/products/airbloom',        permanent: true },
    { source: '/products/6',  destination: '/products/willow-wrap',     permanent: true },
    { source: '/products/7',  destination: '/products/bloomcrown',      permanent: true },
    { source: '/products/8',  destination: '/products/petalwrap',       permanent: true },
    { source: '/products/9',  destination: '/products/flowsleeve',      permanent: true },
    { source: '/products/10', destination: '/products/comfort-shape',   permanent: true },
    { source: '/products/11', destination: '/products/nature-nest',     permanent: true },
    { source: '/products/12', destination: '/products/bloomcrown',      permanent: true },

    // ── Old slug-based product URLs ──
    { source: '/products/gentle-hug-pillow',             destination: '/products/nature-nest',    permanent: true },
    { source: '/products/recovery-kit',                  destination: '/products/nest-carry',     permanent: true },
    { source: '/products/recovery-drain-pouch',          destination: '/products/nest-carry',     permanent: true },
    { source: '/products/mastectomy-bra-front-opening',  destination: '/products/willow-support', permanent: true },
    { source: '/products/mastectomy-bra',                destination: '/products/willow-support', permanent: true },
    { source: '/products/head-scarf-hair-lace',          destination: '/products/airbloom',       permanent: true },
    { source: '/products/printed-head-scarf',            destination: '/products/willow-wrap',    permanent: true },
    { source: '/products/medical-wig',                   destination: '/products/bloomcrown',     permanent: true },
    { source: '/products/premium-wig',                   destination: '/products/bloomcrown',     permanent: true },
    { source: '/products/special-fabric-towel',          destination: '/products/petalwrap',      permanent: true },
    { source: '/products/lymphoedema-sleeves',           destination: '/products/flowsleeve',     permanent: true },
    { source: '/products/mastectomy-prosthesis-cover',   destination: '/products/comfort-shape',  permanent: true },
    { source: '/products/arm-rest-pillow-cover',         destination: '/products/nature-nest',    permanent: true },

    // ── Scarf page redirect ──
    { source: '/products/scarf-hair-lace', destination: '/products/airbloom', permanent: true },
  ],
}

export default nextConfig
