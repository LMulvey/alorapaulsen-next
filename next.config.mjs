/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { destination: '/media', permanent: true, source: '/publications' },
    ];
  },
};

export default nextConfig;
