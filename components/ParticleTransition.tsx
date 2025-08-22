import { useEffect, useRef } from 'react';

export default function ParticleTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle configuration with Brandure colors
    const particles: Particle[] = [];
    const particleCount = 150;
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
        this.centerY = (canvas?.height || 0) / 2;
        this.radius = Math.random() * 200 + 100; // Random radius between 100-300
        this.angle = Math.random() * Math.PI * 2; // Random starting angle
        this.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.y = this.centerY + Math.sin(this.angle) * this.radius;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(scrollProgress: number) {
        // Update angle based on scroll progress
        this.angle += 0.02 + (scrollProgress * 0.01);
        
        // Calculate new position based on angle and radius
        this.x = this.centerX + Math.cos(this.angle) * this.radius;
        this.y = this.centerY + Math.sin(this.angle) * this.radius;
        
        // Add some random movement
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Keep particles within bounds
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

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate scroll progress for smooth transition between Journey and HowWeWork
      const scrollProgress = Math.min(Math.max((window.scrollY - window.innerHeight * 0.5) / (window.innerHeight * 1.5), 0), 1);
      
      particles.forEach(particle => {
        particle.update(scrollProgress);
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
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
        style={{ 
          background: 'transparent',
          zIndex: 1
        }}
      />
    </div>
  );
}
