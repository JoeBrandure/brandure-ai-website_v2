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
      scrollPos += 0.5;
      if (scrollPos >= scroll.scrollWidth / 2) {
        scrollPos = 0;
      }
      scroll.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Partner logos array
  const logos = [
    '/logos/Carousel Logo/bottlebottle-carousel-transparent.png',
    '/logos/Carousel Logo/homematters-carousel-transparent.png',
    '/logos/Carousel Logo/lionmortgage-carousel-transparent.png',
    '/logos/Carousel Logo/macypetgrooming-carousel-transparent.png',
    '/logos/Carousel Logo/petlove-carousel-transparent.png',
    '/logos/Carousel Logo/finsbury-carousel-transparent.png',
    '/logos/Carousel Logo/tiger21-carousel-transparent.png',
    '/logos/Carousel Logo/sukoon-carousel-transparent.png',
    '/logos/Carousel Logo/tdc-carousel-transparent.png',
    '/logos/Carousel Logo/citationuk-carousel-transparent.png',
    '/logos/Carousel Logo/realestateu-carousel-transparent.png',
    '/logos/Carousel Logo/briefslaw-carousel-transparent.png',
    '/logos/Carousel Logo/kwluxury-carousel-transparent.png',
    '/logos/Carousel Logo/lme-carousel-transparent.png',
    '/logos/Carousel Logo/uaelawyers-carousel-transparent.png',
    '/logos/Carousel Logo/arcticedge-carousel-transparent.png',
  ];

  return (
    <div 
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
        gap: '80px',
        alignItems: 'center',
      }}
    >
      {[...logos, ...logos].map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt="Partner Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ 
            opacity: 0.8, 
            filter: 'brightness(0) invert(1) brightness(1.2)',
            maxHeight: '80px',
            maxWidth: '200px',
            height: 'auto',
            width: 'auto',
            objectFit: 'contain',
            flexShrink: 0
          }}
        />
      ))}
    </div>
  );
}
