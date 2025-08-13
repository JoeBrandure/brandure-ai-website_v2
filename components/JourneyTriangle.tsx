'use client';

export default function JourneyTriangle() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '-50%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '300px',
      height: '300px',
    }}>
      <svg
        viewBox="0 0 300 300"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0099CC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer triangle - filled with gradient */}
        <polygon
          points="150,50 250,200 50,200"
          fill="url(#triangleGradient)"
          stroke="#00D9FF"
          strokeWidth="1"
          opacity="0.3"
          filter="url(#glow)"
        />
        
        {/* Inner triangle - hollow */}
        <polygon
          points="150,80 220,180 80,180"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="2"
          opacity="0.8"
        />
        
        {/* Innermost small triangle */}
        <polygon
          points="150,110 190,160 110,160"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
