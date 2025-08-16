import React from 'react';
import AnimatedText from './AnimatedText';

export default function Pitch() {
  return (
    <section id="pitch" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading text-center" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
          We help <AnimatedText text="you" /> understand
          <br />
          the <AnimatedText text="Power of AI" />
        </h2>

        <p className="section-subheading text-center">
          Your trusted partner in becoming an AI-powered business.
        </p>
      </div>
    </section>
  );
}
