import { useEffect, useRef } from 'react';

export default function ParticleTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // Particle configuration with Brandure colors
    const particles: Particle[] = [];
    const particleCount = 140;
    const colors = ['#00D9FF', '#FFFFFF', 'rgba(0, 217, 255, 0.5)'];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      angle: number;
      radius: number;
      centerX: number;
      centerY: number;

      constructor() {
        this.centerX = (canvas?.width || 0) / 2;
        this.centerY = (canvas?.height || 0) * 0.65; // start below header
        this.radius = Math.random() * 200 + 120;
        this.angle = Math.random() * Math.PI * 2;
        this.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.y = this.centerY + Math.sin(this.angle) * this.radius;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(scrollProgress: number) {
        // progress subtly rotates the ring while we scroll
        this.angle += 0.015 + scrollProgress * 0.01;
        const cy = ((canvas?.height || 0) * (0.65 - 0.25 * scrollProgress));
        this.centerY = cy;
        this.centerX = (canvas?.width || 0) / 2;

        this.x = this.centerX + Math.cos(this.angle) * this.radius + this.speedX;
        this.y = this.centerY + Math.sin(this.angle) * this.radius + this.speedY;

        if (this.x > (canvas?.width || 0)) this.x = 0;
        if (this.x < 0) this.x = canvas?.width || 0;
        if (this.y > (canvas?.height || 0)) this.y = 0;
        if (this.y < 0) this.y = canvas?.height || 0;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function drawOrb(scrollProgress: number) {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h * (0.65 - 0.25 * scrollProgress); // moves up as you scroll
      const r = Math.min(w, h) * 0.28;

      const grad = ctx.createRadialGradient(cx, cy, r * 0.15, cx, cy, r);
      grad.addColorStop(0, 'rgba(0,217,255,0.35)');
      grad.addColorStop(0.55, 'rgba(0,153,204,0.22)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth transition progress across Journey -> HowWeWork
      const scrollProgress = Math.min(
        Math.max((window.scrollY - window.innerHeight * 0.5) / (window.innerHeight * 1.5), 0),
        1
      );

      drawOrb(scrollProgress);

      particles.forEach((p) => {
        p.update(scrollProgress);
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => setSize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="particle-transition">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: 'transparent', zIndex: 1 }}
      />
    </div>
  );
}
