import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TriangleTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !triangleRef.current) return;

    gsap.to(triangleRef.current, {
      rotation: 180,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[100vh] flex items-center justify-center relative">
      <svg 
        ref={triangleRef}
        className="w-[300px] h-[300px]"
        viewBox="0 0 100 100"
      >
        {/* Triangle SVG with gradient */}
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0099CC" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <polygon 
          points="50,10 10,90 90,90" 
          fill="url(#triangleGradient)"
          stroke="#00D9FF"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default TriangleTransition;
