/** @type {import('next').NextConfig} */
const nextConfig = {
   compress: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol:'https',
        hostname:'i.ibb.co.com'
      },
      {
        protocol:'https',
        hostname:'lh3.googleusercontent.com'
      },
      {
        protocol:'https',
        hostname:'avatars.githubusercontent.com'
      },
      {
        protocol:'https',
        hostname:'i.pravatar.cc'
      }
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
