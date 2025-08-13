'use client';

import { useEffect, useRef } from 'react';

export default function FloatingGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create floating gradient blobs
      const gradient1 = ctx.createRadialGradient(
        canvas.width * (0.3 + Math.sin(time * 0.0005) * 0.1),
        canvas.height * (0.3 + Math.cos(time * 0.0003) * 0.1),
        0,
        canvas.width * (0.3 + Math.sin(time * 0.0005) * 0.1),
        canvas.height * (0.3 + Math.cos(time * 0.0003) * 0.1),
        300
      );
      
      gradient1.addColorStop(0, 'rgba(0, 217, 255, 0.05)');
      gradient1.addColorStop(1, 'rgba(0, 217, 255, 0)');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Second blob
      const gradient2 = ctx.createRadialGradient(
        canvas.width * (0.7 + Math.cos(time * 0.0004) * 0.1),
        canvas.height * (0.6 + Math.sin(time * 0.0006) * 0.1),
        0,
        canvas.width * (0.7 + Math.cos(time * 0.0004) * 0.1),
        canvas.height * (0.6 + Math.sin(time * 0.0006) * 0.1),
        400
      );
      
      gradient2.addColorStop(0, 'rgba(0, 153, 204, 0.03)');
      gradient2.addColorStop(1, 'rgba(0, 153, 204, 0)');
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
