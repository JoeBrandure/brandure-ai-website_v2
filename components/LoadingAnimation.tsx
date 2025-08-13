'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Animate for 2 seconds then call onComplete
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500); // Fade out transition
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

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
        }}
      >
        <Image
          src="/logos/brandure-ai-white-2.png"
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
        />
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
