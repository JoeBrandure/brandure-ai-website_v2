import React from 'react';
import { AnimatedText } from './AnimatedText';
import RotatingWords from './RotatingWords';

export default function Hero() {
  return (
    <section id="hero" className="section-snap snap-start">
      <div className="content-wrapper">
        <h1 className="hero-text-large" style={{ marginBottom: '20px' }}>
          <AnimatedText text="We're not just your AI" className="text-white" />
        </h1>
        <div className="hero-text-large" style={{ marginBottom: '20px' }}>
          <RotatingWords
            words={['Consultant', 'Agent', 'Developer']}
            intervalMs={2200}
            className="font-semibold"
            accentClassName="accent-blue accent-animated"
          />
        </div>
        <h2 className="hero-text-medium text-grey-white">
          <AnimatedText text="We're your AI Partner." className="text-white" delay={0.5} />
        </h2>
      </div>
    </section>
  );
}
