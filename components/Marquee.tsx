'use client';

import React from 'react';
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

export default function Marquee() {
  console.log('Marquee component rendering with', logos.length, 'logos');
  
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {/* First set of logos */}
        <div className="marquee-content">
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="marquee-item">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={80}
                height={80}
                className="h-auto max-h-16 md:max-h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  filter: 'brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(1.5)',
                  mixBlendMode: 'multiply'
                }}
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo}`);
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="marquee-content">
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="marquee-item">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                width={80}
                height={80}
                className="h-auto max-h-16 md:max-h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  filter: 'brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(1.5)',
                  mixBlendMode: 'multiply'
                }}
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
