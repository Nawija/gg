/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.datocms-assets.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
};

module.exports = nextConfig;
