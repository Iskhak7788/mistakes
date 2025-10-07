/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Configure basePath for GitHub Pages
  basePath: '/mistakes',
}

module.exports = nextConfig