'use client';

import { forwardRef } from "react";

const SpiralAnimation = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { size?: 'sm' | 'lg' | 'xl' | 'default' }
>(({ className, size = 'default', ...props }, ref) => {
  console.log('SpiralAnimation rendering with size:', size);
  
  // Get size styles
  const getSizeStyles = () => {
    switch (size) {
      case 'sm': return { width: '64px', height: '64px' };
      case 'lg': return { width: '128px', height: '128px' };
      case 'xl': return { width: '192px', height: '192px' };
      default: return { width: '96px', height: '96px' };
    }
  };
  
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...getSizeStyles(),
        ...props.style
      }}
      className={className}
      {...props}
    >
      {/* Pure CSS Spiral Animation - No Framer Motion dependency */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          animation: 'spiralRotate1 3s linear infinite',
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '-15px',
          left: '-15px',
          right: '-15px',
          bottom: '-15px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.6)',
          animation: 'spiralRotate2 2s linear infinite',
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '-5px',
          left: '-5px',
          right: '-5px',
          bottom: '-5px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          animation: 'spiralRotate3 1.5s linear infinite',
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '5px',
          left: '5px',
          right: '5px',
          bottom: '5px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          animation: 'spiralRotate4 1s linear infinite',
        }}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          right: '15px',
          bottom: '15px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          animation: 'spiralRotate5 0.5s linear infinite',
        }}
      />
      
      {/* CSS Keyframes for the spiral effect */}
      <style jsx>{`
        @keyframes spiralRotate1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spiralRotate2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spiralRotate3 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spiralRotate4 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spiralRotate5 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
});

SpiralAnimation.displayName = "SpiralAnimation";

export { SpiralAnimation };
