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
    
    // Set initial random positions and animations
    icons.forEach((icon, index) => {
      const element = icon as HTMLElement;
      
      // Random initial position
      const x = Math.random() * 80 - 40; // -40% to 40%
      const y = Math.random() * 80 - 40; // -40% to 40%
      
      // Random animation duration and delay
      const duration = 15 + Math.random() * 10; // 15-25s
      const delay = Math.random() * 5; // 0-5s delay
      
      element.style.setProperty('--x', `${x}%`);
      element.style.setProperty('--y', `${y}%`);
      element.style.setProperty('--duration', `${duration}s`);
      element.style.setProperty('--delay', `${delay}s`);
    });
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full h-full"
        style={{ perspective: '1000px' }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="floating-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              '--x': '0%',
              '--y': '0%',
              '--duration': '20s',
              '--delay': '0s',
            } as React.CSSProperties}
          >
            <div className="relative group cursor-pointer">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(1.5)' }}
              />
              <div className="absolute inset-0 bg-[#C0C0C0] opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
