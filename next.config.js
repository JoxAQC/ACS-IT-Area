/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  }
};

module.exports = nextConfig;
