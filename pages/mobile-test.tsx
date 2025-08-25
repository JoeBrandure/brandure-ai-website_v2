import Link from 'next/link';

export default function MobileTest() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <h1>📱 Mobile Test Page</h1>
      <p>If you can see this page on your mobile device, the connection is working!</p>
      
      <div style={{ 
        margin: '20px 0', 
        padding: '15px', 
        backgroundColor: '#333', 
        borderRadius: '8px' 
      }}>
        <h2>Connection Info:</h2>
        <p><strong>Server IP:</strong> 10.20.12.9</p>
        <p><strong>Port:</strong> 3000</p>
        <p><strong>URL:</strong> http://10.20.12.9:3000</p>
      </div>
      
      <div style={{ 
        margin: '20px 0', 
        padding: '15px', 
        backgroundColor: '#333', 
        borderRadius: '8px' 
      }}>
        <h2>Testing Steps:</h2>
        <ol>
          <li>Make sure your phone is on the same WiFi network</li>
          <li>Try accessing: <code>http://10.20.12.9:3000</code></li>
          <li>If that doesn&apos;t work, try: <code>http://10.20.12.9:3000/mobile-test</code></li>
          <li>Check if your phone&apos;s browser shows any error messages</li>
        </ol>
      </div>
      
      <div style={{ 
        margin: '20px 0', 
        padding: '15px', 
        backgroundColor: '#333', 
        borderRadius: '8px' 
      }}>
        <h2>Common Issues:</h2>
        <ul>
          <li>Phone not on same WiFi network</li>
          <li>Firewall blocking port 3000</li>
          <li>Router blocking local network access</li>
          <li>Mobile browser cache issues</li>
        </ul>
      </div>
      
      <Link 
        href="/" 
        style={{ 
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          marginTop: '20px'
        }}
      >
        ← Back to Main Site
      </Link>
    </div>
  );
}
