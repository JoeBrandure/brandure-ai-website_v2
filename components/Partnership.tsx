import React from 'react';
import AnimatedText from './AnimatedText';
import Marquee from './Marquee';

export default function Partnership() {
  return (
    <section id="partnership" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading animate-text text-center" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
          The best AI systems are built
          <br />
          <AnimatedText text="side-by-side" />
        </h2>

        <p className="section-subheading text-grey-white text-center">
          Accelerate your AI adoption journey.
        </p>
        
        {/* Partner Logos Marquee */}
        <Marquee />
      </div>
    </section>
  );
}
