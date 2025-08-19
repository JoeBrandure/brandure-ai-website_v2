import React from 'react';
import AnimatedText from './AnimatedText';

export default function Partnership() {
  return (
    <section id="partnership" className="section-snap snap-start">
      <div className="content-wrapper flex flex-col items-center justify-center text-center">
        <div>
          <h2 className="section-heading-medium animate-text" style={{ lineHeight: 1.3, marginBottom: '40px' }}>
            We spend our days guiding companies<br />
            through our 3-step <AnimatedText text="AI-Transformation" /> process
          </h2>
        </div>
      </div>
    </section>
  );
}
