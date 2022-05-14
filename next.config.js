const withOptimizedImages = require('next-optimized-images');
const withFonts = require('nextjs-fonts');

module.exports = withOptimizedImages(
  withFonts({
    env: {
      STAGE: process.env.STAGE,
    },
    sassOptions: {
      cssModules: true,
      includePaths: ['./src'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    pageExtensions: ['page.tsx'],
    handleImages: ['jpg', 'jpeg', 'png', 'webp'],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  })
);
