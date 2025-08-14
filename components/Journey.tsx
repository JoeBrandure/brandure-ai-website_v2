'use client';

export default function Journey() {
  return (
    <section id="journey" className="section-snap" style={{ 
      position: 'relative', 
      overflow: 'visible',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: 'calc(18vh)'  // halfway between current and center
    }}>
      <div className="content-wrapper">
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '35%' }}>
          <h2 className="section-heading-medium animate-text" style={{ lineHeight: 1.3, marginBottom: '40px' }}>
            We spend our days guiding companies<br />
            through our 3-step <span className="accent-blue accent-animated">AI-Transformation</span> process
          </h2>
        </div>
        
        {/* Large transition triangle at bottom with enhanced glow */}
        <div style={{
          position: 'absolute',
          bottom: '-300px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '660px',  // Increased by ~10% from 600px
          height: '660px',  // Increased by ~10% from 600px
          zIndex: 10,
          filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.3)) drop-shadow(0 0 60px rgba(0, 217, 255, 0.1))'
        }}>
          <svg
            viewBox="0 0 660 660"
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
              points="330,82.5 577.5,577.5 82.5,577.5"
              fill="url(#triangleGradient)"
              stroke="#00D9FF"
              strokeWidth="2"
              opacity="0.3"
              filter="url(#glow)"
            />

            {/* Inner triangle */}
            <polygon
              points="330,165 495,495 165,495"
              fill="none"
              stroke="#00D9FF"
              strokeWidth="3"
              opacity="0.8"
            />

            {/* Innermost triangle */}
            <polygon
              points="330,247.5 412.5,412.5 247.5,412.5"
              fill="none"
              stroke="#00D9FF"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
