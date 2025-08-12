'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 1;
      if (scrollPos >= scroll.scrollWidth / 2) {
        scrollPos = 0;
      }
      scroll.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Using brandure logo as placeholder - repeat for carousel effect
  const logos = Array(10).fill('/logos/brandure-ai-white-2.png');

  return (
    <div 
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
        gap: '60px',
        marginBottom: '40px',
      }}
    >
      {/* Duplicate logos for seamless loop */}
      {[...logos, ...logos].map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt="Client Logo"
          width={120}
          height={40}
          style={{ opacity: 0.5, filter: 'grayscale(100%)' }}
        />
      ))}
    </div>
  );
}
