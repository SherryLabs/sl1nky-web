/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  domains: ['ipfs.io', 'tu-dominio.com', "gunzillagames.com", "miro.medium.com"],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'via.placeholder.com'
    }, {
      protocol: 'https',
      hostname: 'plus.unsplash.com'
    }
  ]
  }
};

export default nextConfig;
