#!/bin/bash

echo "🚀 Mobile Testing Setup for Brandure AI Website"
echo "================================================"

# Get local IP address
LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)

if [ -z "$LOCAL_IP" ]; then
    LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "Could not determine IP")
fi

echo ""
echo "📱 To test on mobile devices:"
echo "   1. Make sure your phone is on the same WiFi network"
echo "   2. Use this URL on your mobile browser:"
echo "      http://$LOCAL_IP:3000"
echo ""
echo "🌐 Or scan this QR code (if you have qrencode installed):"
if command -v qrencode &> /dev/null; then
    qrencode -t ansiutf8 "http://$LOCAL_IP:3000"
else
    echo "   Install qrencode for QR code generation: brew install qrencode"
fi

echo ""
echo "⚠️  Note: The dev server will bind to 0.0.0.0:3000"
echo "   This allows external devices to connect to your local development server."
echo ""

# Start the development server
echo "🚀 Starting development server..."
npm run dev
