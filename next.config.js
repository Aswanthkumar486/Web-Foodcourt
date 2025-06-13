/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ✅ Enables static HTML export
  reactStrictMode: false,     // Optional, disables strict mode
  images: {
    domains: ['images.unsplash.com'], // ✅ Allows loading from Unsplash
    unoptimized: true,                // ✅ Required for static export to skip Next Image optimization
  },
  trailingSlash: true,  
   output: "export",
  basePath: "/Web-Foodcourt",
  assetPrefix: "/Web-Foodcourt/"      // ✅ Adds trailing slash to every route (e.g., /about/ instead of /about)
};

module.exports = nextConfig;
