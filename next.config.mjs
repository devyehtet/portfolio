/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*']
    }
  },
  images: {
    domains: ['localhost', 'vercel.app']
  }
}

export default nextConfig