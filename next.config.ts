import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external network access for mobile testing
  experimental: {
    // Disable experimental features that may cause build cache corruption
    webpackBuildWorker: false,
  },
  
  // Add headers for mobile access
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
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
        // Disable code splitting in development to prevent corruption
        runtimeChunk: false,
      };
      
      // Ensure stable module resolution
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      };
      
      // Disable aggressive caching in development
      config.cache = false;
    }
    
    // Ensure stable module resolution for all environments
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.jsx': ['.jsx', '.tsx'],
    };
    
    return config;
  },
  
  // Ensure stable build output
  output: 'standalone',
  
  // Disable source maps in production to prevent corruption
  productionBrowserSourceMaps: false,
  
  // Force stable TypeScript compilation
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Ensure stable ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
