import React from 'react';
import AnimatedText from './AnimatedText';
import LogoCarousel from './LogoCarousel';

export default function Partnership() {
  return (
    <section id="partnership" className="section-snap snap-start">
      <div className="content-wrapper">
        {/* Logo Carousel positioned above heading with proper spacing */}
        <div className="mb-16">
          <LogoCarousel />
        </div>
        
        <h2 className="section-heading animate-text text-center" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
          The best AI systems are built
          <br />
          <AnimatedText text="side-by-side" />
        </h2>

        <p className="section-subheading text-grey-white text-center mb-8">
          Accelerate your AI adoption journey.
        </p>
      </div>
    </section>
  );
}
