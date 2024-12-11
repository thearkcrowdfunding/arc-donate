import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kovcheg.live',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: [
      '@/components/ui',
      'intl-messageformat',
      '@formatjs/intl-localematcher'
    ],
    optimizeCss: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|next|@next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name: 'lib',
              priority: 30,
              enforce: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
            intl: {
              name: 'intl',
              test: /[\\/]node_modules[\\/](intl-messageformat|@formatjs)[\\/]/,
              priority: 50,
              enforce: true,
            }
          }
        }
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/ru',
        destination: '/',
        permanent: true,
      },
    ];
  },
  output: 'standalone',
};

export default withNextIntl(nextConfig);
