import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionTriangleTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !triRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(triRef.current,
        { rotate: 0 },
        {
          rotate: 180,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            pin: true,
            anticipatePin: 1
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '140vh', // extended space for a nice transition
        zIndex: 1
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '20vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg
          ref={triRef}
          width={560}
          height={560}
          viewBox="0 0 560 560"
          style={{ filter: 'drop-shadow(0 0 16px rgba(0,217,255,0.25))' }}
          aria-hidden
        >
          {/* Reuse your existing triangle paths here (stroke Brandure blue). */}
          <polygon
            points="280,40 520,520 40,520"
            fill="none"
            stroke="#00D9FF"
            strokeWidth="4"
            opacity="0.9"
          />
          <polygon
            points="280,100 460,500 100,500"
            fill="none"
            stroke="#00A8CC"
            strokeWidth="2"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}
