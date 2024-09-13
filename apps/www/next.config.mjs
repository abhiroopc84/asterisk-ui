/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer2'
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.producthunt.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default withContentlayer(nextConfig);