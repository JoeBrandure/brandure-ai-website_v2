'use client';

import { useEffect, useState } from 'react';
import { SpiralAnimation } from './SpiralAnimation';

export default function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    console.log('LoadingAnimation: Starting animation');
    
    // Simple timer: complete after 2 seconds
    const timer = setTimeout(() => {
      console.log('LoadingAnimation: Timer complete, calling onComplete');
      setIsAnimating(false);
      // Small delay to ensure state update, then call onComplete
      setTimeout(() => {
        console.log('LoadingAnimation: Calling onComplete after state update');
        onComplete();
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Manual skip handler
  const handleSkip = () => {
    console.log('LoadingAnimation: Manual skip triggered');
    setIsAnimating(false);
    // Call onComplete immediately
    onComplete();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isAnimating ? 1 : 0,
        transition: 'opacity 0.5s ease',
        pointerEvents: isAnimating ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          cursor: 'pointer',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
        onClick={handleSkip}
        title="Click to skip loading"
      >
        <SpiralAnimation size="xl" />
        
        {/* Skip hint */}
        <div
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '14px',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          Click to skip
        </div>
      </div>
      

    </div>
  );
}
