import React from 'react';
import AnimatedText from './AnimatedText';

export default function Partnership() {
  return (
    <section id="partnership" className="section-snap snap-start">
      <div className="content-wrapper">
        <p className="section-heading animate-text text-center mb-4">
          The best AI systems are built
          <br />
          <AnimatedText text="side-by-side" />
        </p>

        <p className="section-subheading text-grey-white text-center">
          Accelerate your AI adoption journey.
        </p>
      </div>
    </section>
  );
}
