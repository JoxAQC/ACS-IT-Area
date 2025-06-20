// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        // Opcional: puedes restringir por pathname o puerto
        // pathname: '/photos/**',
        // port: ''
      },
      // Agrega otros dominios si es necesario
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com' // Para la imagen del avatar de WhatsApp
      }
    ],
  },
  // Si necesitas habilitar CORS en desarrollo (opcional)
  experimental: {
    allowedDevOrigins: ['localhost', '192.168.0.103'] // Reemplaza con tu IP/localhost
  }
};

module.exports = nextConfig;