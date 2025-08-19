'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const logos = [
  '/logos/Carousel Logo/bottlebottle-carousel-transparent.png',
  '/logos/Carousel Logo/homematters-carousel-transparent.png',
  '/logos/Carousel Logo/lionmortgage-carousel-transparent.png',
  '/logos/Carousel Logo/macypetgrooming-carousel-transparent.png',
  '/logos/Carousel Logo/petlove-carousel-transparent.png',
  '/logos/Carousel Logo/finsbury-carousel-transparent.png',
  '/logos/Carousel Logo/tiger21-carousel-transparent.png',
  '/logos/Carousel Logo/warmauk-carousel-transparent.png',
  '/logos/Carousel Logo/sukoon-carousel-transparent.png',
  '/logos/Carousel Logo/tdc-carousel-transparent.png',
  '/logos/Carousel Logo/citationuk-carousel-transparent.png',
  '/logos/Carousel Logo/realestateu-carousel-transparent.png',
  '/logos/Carousel Logo/briefslaw-carousel-transparent.png',
  '/logos/Carousel Logo/kwluxury-carousel-transparent.png',
  '/logos/Carousel Logo/beehive-carousel-transparent.png',
  '/logos/Carousel Logo/lme-carousel-transparent.png',
  '/logos/Carousel Logo/uaelawyers-carousel-transparent.png',
  '/logos/Carousel Logo/arcticedge-carousel-transparent.png',
];

export default function InteractiveIconCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const icons = container.querySelectorAll('.floating-icon');
    
    // Calculate positions in a circular formation
    icons.forEach((icon, index) => {
      const element = icon as HTMLElement;
      
      // Create a tighter circular formation
      const radius = 120; // Smaller radius for closer logos
      const angle = (index / logos.length) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
    });
  }, []);

  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full h-full"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="floating-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              '--x': '0px',
              '--y': '0px',
            } as React.CSSProperties}
          >
            <div className="relative group cursor-pointer">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  filter: 'brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(1.5)',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
