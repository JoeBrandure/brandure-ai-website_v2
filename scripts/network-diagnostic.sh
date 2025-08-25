#!/bin/bash

echo "🔍 Network Diagnostic for Mobile Access"
echo "======================================"
echo ""

# Get local IP address
LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | grep -v 169.254 | awk '{print $2}' | head -n 1)
echo "📍 Local IP Address: $LOCAL_IP"
echo ""

# Check if server is running
echo "🖥️  Server Status:"
if curl -s http://localhost:3000 > /dev/null; then
    echo "   ✅ Localhost (127.0.0.1:3000) - Working"
else
    echo "   ❌ Localhost (127.0.0.1:3000) - Not responding"
fi

if curl -s http://$LOCAL_IP:3000 > /dev/null; then
    echo "   ✅ Network IP ($LOCAL_IP:3000) - Working"
else
    echo "   ❌ Network IP ($LOCAL_IP:3000) - Not responding"
fi

# Check server binding
echo ""
echo "🔗 Server Binding:"
lsof -i :3000 | grep LISTEN | while read line; do
    echo "   $line"
done

# Check network interfaces
echo ""
echo "🌐 Network Interfaces:"
ifconfig | grep -A 2 "en0\|en1" | grep -E "(inet|status)" | while read line; do
    echo "   $line"
done

# Check routing
echo ""
echo "🛣️  Network Routing:"
netstat -rn | grep "10.20" | head -n 3 | while read line; do
    echo "   $line"
done

# Test external connectivity
echo ""
echo "📡 External Connectivity Test:"
echo "   Testing connection to $LOCAL_IP:3000..."
if timeout 10 curl -s http://$LOCAL_IP:3000 > /dev/null; then
    echo "   ✅ Server responds from network"
else
    echo "   ❌ Server not accessible from network"
fi

# Check for common issues
echo ""
echo "🔍 Common Issues Check:"
echo "   1. macOS Firewall:"
if sudo /usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate 2>/dev/null | grep -q "enabled"; then
    echo "      ⚠️  Firewall is enabled - may block external connections"
else
    echo "      ✅ Firewall is disabled"
fi

echo "   2. Network Segmentation:"
if [[ "$LOCAL_IP" == "10.20.12.9" ]]; then
    echo "      ✅ IP is in expected range (10.20.12.x)"
else
    echo "      ⚠️  IP is in unexpected range: $LOCAL_IP"
fi

echo "   3. Router Configuration:"
echo "      ℹ️  Some routers block local network access for security"
echo "      ℹ️  Check if your router has 'AP Isolation' or similar enabled"

# Mobile testing instructions
echo ""
echo "📱 Mobile Testing Instructions:"
echo "   1. Ensure phone is on SAME WiFi network (not mobile data)"
echo "   2. Try these URLs on your mobile browser:"
echo "      • http://$LOCAL_IP:3000"
echo "      • http://$LOCAL_IP:3000/mobile-test"
echo "   3. If still not working, try:"
echo "      • Clear mobile browser cache"
echo "      • Try different mobile browsers"
echo "      • Check router settings for AP isolation"

# Alternative solutions
echo ""
echo "💡 Alternative Solutions:"
echo "   1. Use ngrok for public access:"
echo "      npm install -g ngrok && ngrok http 3000"
echo "   2. Check router settings for local network access"
echo "   3. Try using mobile hotspot from your Mac"
echo "   4. Use browser dev tools mobile emulation instead"

echo ""
echo "🔧 To restart server with proper binding:"
echo "   npm run dev"
echo ""
echo "📊 Current server should be accessible at:"
echo "   • Local: http://localhost:3000"
echo "   • Network: http://$LOCAL_IP:3000"
