const nextConfig = {
  reactStrictMode: true,
  webpack: (config: any) => {
    return config
  },
  experimental: {
    turbo: false,
  },
}
