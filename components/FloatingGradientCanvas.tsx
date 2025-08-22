'use client';

import { useEffect, useRef, useState } from 'react';

export default function FloatingGradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.scale(DPR, DPR);

    // Soft gradient blobs
    const blobs = [
      { x: width * 0.3, y: height * 0.4, r: Math.min(width, height) * 0.35, a: 0.16, dx: 0.08, dy: 0.06 },
      { x: width * 0.7, y: height * 0.6, r: Math.min(width, height) * 0.28, a: 0.14, dx: -0.06, dy: 0.05 },
    ];

    // Starfield overlay – subtle drifting dots
    type Star = { x: number; y: number; size: number; vx: number; vy: number; color: string };
    const starColors = ['#00D9FF', 'rgba(255,255,255,0.95)', 'rgba(0,217,255,0.6)'];
    const starCount = Math.floor(Math.min(width, height) * 0.25);
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }));

    function draw() {
      try {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        // blobs
        blobs.forEach((b) => {
          b.x += b.dx;
          b.y += b.dy;
          if (b.x < -b.r) b.x = width + b.r;
          if (b.x > width + b.r) b.x = -b.r;
          if (b.y < -b.r) b.y = height + b.r;
          if (b.y > height + b.r) b.y = -b.r;

          const grad = ctx.createRadialGradient(b.x, b.y, b.r * 0.1, b.x, b.y, b.r);
          grad.addColorStop(0, 'rgba(0,217,255,0.35)');
          grad.addColorStop(0.6, 'rgba(0,153,204,0.2)');
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalCompositeOperation = 'source-over';
        });

        // stars overlay
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;

          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';

        rafRef.current = requestAnimationFrame(draw);
      } catch (error) {
        console.warn('FloatingGradient animation error:', error);
      }
    }

    function onResize() {
      try {
        if (!ctx) return;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * DPR;
        canvas.height = height * DPR;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(DPR, DPR);
      } catch (error) {
        console.warn('FloatingGradient resize error:', error);
      }
    }

    draw();
    window.addEventListener('resize', onResize);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('resize', onResize);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}
      aria-hidden
    />
  );
}

