/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { destination: '/research', permanent: true, source: '/publications' },
    ];
  },
};

export default nextConfig;
