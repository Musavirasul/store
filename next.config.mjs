/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com'],
        remotePatterns: [{ hostname: 'fakestoreapi.com' }],
    },
};

export default nextConfig;
