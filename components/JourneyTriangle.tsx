'use client';

export default function JourneyTriangle() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '-300px',  // Adjusted for larger size
      left: '50%',
      transform: 'translateX(-50%)',
      width: '600px',  // Increased from 400px
      height: '600px',  // Increased from 400px
      zIndex: 10,
    }}>
      <svg
        viewBox="0 0 600 600"  // Updated viewBox
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0099CC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Large outer triangle */}
        <polygon
          points="300,75 525,525 75,525"
          fill="url(#triangleGradient)"
          stroke="#00D9FF"
          strokeWidth="2"
          opacity="0.3"
          filter="url(#glow)"
        />
        
        {/* Inner triangle */}
        <polygon
          points="300,150 450,450 150,450"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="3"
          opacity="0.8"
        />
        
        {/* Innermost triangle */}
        <polygon
          points="300,225 375,375 225,375"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
