import React from 'react';
import { AnimatedText } from '../components/AnimatedText';

export default function Pitch() {
  return (
    <section id="pitch" className="section-snap snap-start">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <h2 className="section-heading" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
          <AnimatedText text="We help " className="text-white" />
          <AnimatedText text="you" className="accent-blue accent-animated" delay={0.3} />
          <AnimatedText text=" understand" className="text-white" delay={0.5} />
          <br />
          <AnimatedText text="the " className="text-white" delay={0.7} />
          <AnimatedText text="Power of AI." className="accent-blue accent-animated" delay={0.9} />
        </h2>
        <p className="section-subheading text-grey-white">
          <AnimatedText text="Your trusted partner in becoming an AI-powered business" className="text-white" delay={1.1} />
        </p>
      </div>
    </section>
  );
}
