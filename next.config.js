/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    // trailingSlash: true,
    async redirects() {
      return [
        {
          source: '/blogs/:slug',
          destination: 'https://blog.goedu.in/:slug',
          basePath:false,
          permanent:false
        },
        {
          source: '/blogs',
          destination: 'https://blog.goedu.in',
          basePath:false,
          permanent:false
        },
      ];
    },
  };
