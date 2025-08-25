'use client';

import { useEffect, useRef, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  // Manual skip handler - now with transition
  const handleSkip = () => {
    setIsTransitioning(true);
    
    // Start the logo transition animation
    if (logoRef.current) {
      logoRef.current.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
      logoRef.current.style.position = 'fixed';
      logoRef.current.style.zIndex = '9999';
      
      // Calculate the exact navigation logo position based on the actual page layout
      // Navigation is at top-0, with padding: '8px 40px', height: '60px'
      // Logo is width: '150px', height: 'auto'
      const viewportWidth = window.innerWidth;
      const navPadding = 40; // px-40 = 40px
      const logoWidth = 150;
      const logoHeight = 40; // height: '40px'
      const navTop = 8; // top padding
      
      // Center the logo vertically within the navigation bar
      const finalTop = navTop + (60 - logoHeight) / 2; // 60px nav height
      const finalLeft = navPadding;
      
      // Animate to final position
      logoRef.current.style.left = `${finalLeft}px`;
      logoRef.current.style.top = `${finalTop}px`;
      logoRef.current.style.width = `${logoWidth}px`;
      logoRef.current.style.height = `${logoHeight}px`;
      logoRef.current.style.transform = 'translate(0, 0)';
    }
    
    // Wait for transition to complete, then call onComplete
    setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
        opacity: isAnimating ? 1 : 0,
        transition: 'opacity 0.5s ease',
        pointerEvents: isAnimating ? 'auto' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Enter Brandure AI button - centered overlay */}
      <div
        style={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
        onClick={handleSkip}
        title="Enter Brandure AI"
      >
        {/* Logo with breathing animation */}
        <img
          ref={logoRef}
          src="/Logos/brandure-logo-new-white.png"
          alt="Brandure AI"
          className="animate-text"
          style={{
            maxWidth: '200px',
            width: '100%',
            height: 'auto',
            pointerEvents: 'none',
            userSelect: 'none',
            transition: isTransitioning ? 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
        
        {/* Fallback text if image fails to load */}
        {!imageLoaded && (
          <div 
            className="animate-text"
            style={{
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            BRANDURE AI
          </div>
        )}
      </div>
    </div>
  );
}
