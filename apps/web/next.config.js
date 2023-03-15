/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io'
      }
    ]
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  }
};
