'use client';

import { useEffect, useRef, useState } from 'react';

export default function FloatingGradient() {
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

    const blobs = [
      { x: width * 0.3, y: height * 0.4, r: Math.min(width, height) * 0.35, a: 0.16, dx: 0.08, dy: 0.06 },
      { x: width * 0.7, y: height * 0.6, r: Math.min(width, height) * 0.28, a: 0.14, dx: -0.06, dy: 0.05 },
    ];

    // Add floating particles (the ones you liked from the original animation)
    const particles: Particle[] = [];
    const particleCount = 120;
    const colors = ['#00D9FF', '#FFFFFF', 'rgba(0, 217, 255, 0.4)'];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function draw() {
      try {
        if (!ctx) return;
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

        // Draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw(ctx);
        });

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

  // Don't render until client-side
  if (!isClient) return null;

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
