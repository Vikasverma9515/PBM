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
      'qfynqbizqsyponqsfjby.supabase.co',
    ],
  },
  serverExternalPackages: ['@supabase/supabase-js'],
  // Silence workspace root warning when another lockfile exists up the tree
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
