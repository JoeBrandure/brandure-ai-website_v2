'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    console.log('LoadingAnimation: Starting animation');
    
    // Primary timer: complete after 2 seconds
    const primaryTimer = setTimeout(() => {
      console.log('LoadingAnimation: Primary timer complete');
      setIsAnimating(false);
    }, 2000);

    // Secondary timer: call onComplete after fade out
    const secondaryTimer = setTimeout(() => {
      console.log('LoadingAnimation: Calling onComplete');
      onComplete();
    }, 2500);

    // Fallback timer: force completion after 6 seconds total
    const fallbackTimer = setTimeout(() => {
      console.log('LoadingAnimation: Fallback timer triggered');
      setIsAnimating(false);
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(primaryTimer);
      clearTimeout(secondaryTimer);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  // Manual skip handler
  const handleSkip = () => {
    console.log('LoadingAnimation: Manual skip triggered');
    setIsAnimating(false);
    setTimeout(onComplete, 100);
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
          animation: 'logoScale 2s ease-in-out',
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={handleSkip}
        title="Click to skip loading"
      >
        <Image
          src="/logos/brandure-ai-white.png"
          alt="Brandure AI"
          width={300}
          height={80}
          priority
          style={{ 
            width: 'auto',
            height: 'auto',
            maxWidth: '300px',
            objectFit: 'contain'
          }}
          onError={() => {
            console.error('LoadingAnimation: Image failed to load');
            handleSkip();
          }}
        />
        
        {/* Skip hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '14px',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          Click to skip
        </div>
      </div>
      
      <style jsx>{`
        @keyframes logoScale {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
