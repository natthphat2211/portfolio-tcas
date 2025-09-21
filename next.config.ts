import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // turbo: false, // ปิด Turbopack ใช้ Webpack แทน
  },
}

export default nextConfig
