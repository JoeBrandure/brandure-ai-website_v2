'use client';

export default function JourneyTriangle() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '-200px',  // Half above, half below
      left: '50%',
      transform: 'translateX(-50%)',
      width: '400px',
      height: '400px',
      zIndex: 10,
    }}>
      <svg
        viewBox="0 0 400 400"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0099CC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Large outer triangle - filled with gradient, semi-transparent */}
        <polygon
          points="200,50 350,350 50,350"
          fill="url(#triangleGradient)"
          stroke="#00D9FF"
          strokeWidth="1"
          opacity="0.3"
          filter="url(#glow)"
        />
        
        {/* Inner triangle - hollow with thicker stroke */}
        <polygon
          points="200,100 300,300 100,300"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="3"
          opacity="0.8"
        />
        
        {/* Innermost triangle - thin stroke */}
        <polygon
          points="200,150 250,250 150,250"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
