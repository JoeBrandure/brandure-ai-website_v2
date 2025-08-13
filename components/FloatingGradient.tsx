'use client';

import { useEffect, useRef } from 'react';

export default function FloatingGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.scale(DPR, DPR);

    const blobs = [
      { x: width * 0.3, y: height * 0.4, r: Math.min(width, height) * 0.35, a: 0.16, dx: 0.08, dy: 0.06 },
      { x: width * 0.7, y: height * 0.6, r: Math.min(width, height) * 0.28, a: 0.14, dx: -0.06, dy: 0.05 },
    ];

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      blobs.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const grad = ctx.createRadialGradient(b.x, b.y, b.r * 0.1, b.x, b.y, b.r);
        // Brandure blues with soft center glow
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

      rafRef.current = requestAnimationFrame(draw);
    }

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.scale(DPR, DPR);
    }

    draw();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0, // behind everything
        pointerEvents: 'none',
        opacity: 0.6
      }}
      aria-hidden
    />
  );
}
