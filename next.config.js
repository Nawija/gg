/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["res.cloudinary.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/djseas9ht/**",
            },
        ],
    },
};

module.exports = nextConfig;
