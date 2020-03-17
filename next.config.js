const path = require('path');
const withPWA = require('next-pwa');

const nextConfig = {
  pwa: {
    dest: 'public',
  },
  webpack(config) {
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    return config;
  },
};

module.exports = withPWA(nextConfig);
