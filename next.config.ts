import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable experimental features that may cause build cache corruption
  experimental: {
    // Disable features that can cause module resolution issues
    webpackBuildWorker: false,
  },
  
  // Force stable webpack configuration
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable aggressive optimizations in development
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
      
      // Ensure stable module resolution
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Ensure stable build output
  output: 'standalone',
  
  // Disable source maps in production to prevent corruption
  productionBrowserSourceMaps: false,
};

export default nextConfig;
