/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_END_POINT,
    publicDomainName: process.env.NEXT_PUBLIC_SITE_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
