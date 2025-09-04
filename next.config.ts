import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO and Performance Optimization
  poweredByHeader: false,
  compress: true,
  
  // Force HTTPS in production
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://brandureai.com' : '',
  
  // Allow external network access for mobile testing
  experimental: {
    // Disable experimental features that may cause build cache corruption
    webpackBuildWorker: false,
  },
  
  // Add headers for mobile access, SEO, and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Explicitly allow indexing for all pages (belt-and-suspenders)
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          // Security Headers for Firewall Compliance
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https://app.relevanceai.com https://www.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net; child-src 'self' https://app.relevanceai.com https://www.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=*, geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          
          // CORS Headers (Restricted for Security)
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://brandureai.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, X-Requested-With',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'false',
          },
          
          // Cache Control for Static Assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Specific headers for HTML pages
      {
        source: '/(.*).html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      // API routes security
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; style-src 'self';",
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

  // Canonicalize domain: redirect www -> apex
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'www.brandureai.com' }
        ],
        destination: 'https://brandureai.com/:path*',
        permanent: true,
      },
    ];
  },
  
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
