'use client';

import React from 'react';

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

export default function LogoMarquee() {
  console.log('LogoMarquee component rendering with', logos.length, 'logos');
  
  return (
    <div className="logo-marquee-container">
      <div className="logo-marquee-track">
        {/* First set of logos */}
        <div className="logo-marquee-content">
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="logo-marquee-item">
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="logo-marquee-image"
                onError={(e) => {
                  console.error(`Failed to load logo: ${logo}`);
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="logo-marquee-content">
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="logo-marquee-item">
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="logo-marquee-image"
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
