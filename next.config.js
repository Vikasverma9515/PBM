// module.exports = {
//   // ...other config...
//   images: {
//     domains: [
//       'images.unsplash.com',
//       // add other domains if needed
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
    ],
  },
  serverExternalPackages: ['@supabase/supabase-js'],
}

module.exports = nextConfig
