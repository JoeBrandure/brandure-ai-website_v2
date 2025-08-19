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
    const icons = container.querySelectorAll('.sphere-icon');
    
    // Calculate positions in a 3D sphere formation
    icons.forEach((icon, index) => {
      const element = icon as HTMLElement;
      
      // Create a 3D sphere with multiple layers
      const phi = Math.acos(-1 + (2 * index) / logos.length); // Vertical angle
      const theta = Math.sqrt(logos.length * Math.PI) * phi; // Horizontal angle
      
      const radius = 80; // Sphere radius
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
      element.style.setProperty('--z', `${z}px`);
      element.style.setProperty('--index', `${index}`);
    });
  }, []);

  return (
    <div className="sphere-container">
      <div 
        ref={containerRef}
        className="sphere-wrapper"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="sphere-icon"
            style={{
              '--x': '0px',
              '--y': '0px',
              '--z': '0px',
              '--index': '0',
            } as React.CSSProperties}
          >
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={32}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8 object-contain opacity-90 hover:opacity-100 transition-all duration-300"
              style={{ 
                filter: 'brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(1.5)',
                mixBlendMode: 'multiply'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
