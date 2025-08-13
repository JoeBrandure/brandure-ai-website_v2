import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionTriangleTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !triangleRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        pin: false, // Don't pin, let it scroll naturally
      }
    });

    // Rotate from pointing up (0deg) to pointing down (180deg)
    tl.fromTo(triangleRef.current, 
      { rotation: 0 },
      { rotation: 180, ease: 'none' }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[50vh] relative flex items-center justify-center">
      <svg 
        ref={triangleRef} 
        className="w-[200px] h-[200px]" 
        viewBox="0 0 200 200"
        style={{ filter: 'drop-shadow(0 0 20px rgba(0,217,255,0.3))' }}
        aria-hidden
      >
        <polygon
          points="100,20 180,180 20,180"
          fill="none"
          stroke="#00D9FF"
          strokeWidth="3"
          opacity="0.9"
        />
        <polygon
          points="100,40 160,160 40,160"
          fill="none"
          stroke="#0099CC"
          strokeWidth="2"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
