#!/bin/bash

echo "🧹 Cleaning Next.js development environment..."

# Kill any running Next.js processes
echo "🔄 Stopping Next.js processes..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "next start" 2>/dev/null || true

# Clean build cache
echo "🗑️  Cleaning build cache..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .swc

# Clean temporary files
echo "🧽 Cleaning temporary files..."
find . -name "*.tsbuildinfo" -delete 2>/dev/null || true
find . -name ".DS_Store" -delete 2>/dev/null || true

# Reset port conflicts
echo "🔌 Checking for port conflicts..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
lsof -ti:3001 | xargs kill -9 2>/dev/null || true

echo "✅ Cleanup complete! Run 'npm run dev' to start fresh."
