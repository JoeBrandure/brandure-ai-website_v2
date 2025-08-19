import React from 'react';
import AnimatedText from './AnimatedText';

export default function Partnership() {
  return (
    <section id="partnership" className="section-snap snap-start" style={{ 
      position: 'relative', 
      overflow: 'visible',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: 'calc(18vh)'  // halfway between current and center
    }}>
      <div className="content-wrapper flex flex-col items-center justify-center text-center">
        <div>
          <h2 className="section-heading animate-text" style={{ lineHeight: 1.3, marginBottom: '40px' }}>
            The best AI systems are built
            <br />
            <AnimatedText text="side-by-side" />
          </h2>
          
          <p className="section-subheading text-grey-white text-center mb-8">
            Accelerate your AI adoption journey.
          </p>
        </div>
      </div>
    </section>
  );
}
