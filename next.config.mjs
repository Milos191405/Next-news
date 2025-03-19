// next.config.js
const nextConfig = {
  webpack(config) {
    // Enable polling for file watching in a development environment
    config.watchOptions = {
      poll: 2000,  // Check for changes every 1 second
      aggregateTimeout: 300,  // Debounce file change detection
    };

    // Optionally, modify the webpack configuration further
    // Add custom configurations if necessary, e.g., for Babel or other plugins
    
    return config;
  },
  // Enable React Strict Mode for development to catch potential issues
  reactStrictMode: true,
};

export default nextConfig;

