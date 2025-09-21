import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // turbo: false, // บังคับไม่ใช้ Turbopack
  },
}

export default nextConfig
