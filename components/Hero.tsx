import React from 'react';
import RotatingWords from './RotatingWords';

export default function Hero() {
  return (
    <section id="hero" className="section-snap snap-start">
      <div className="content-wrapper">
        <h1 className="hero-text-large animate-text text-center" style={{ marginBottom: '20px' }}>
          We&apos;re not just your AI
        </h1>

        <div className="hero-text-large animate-text text-center" style={{ marginBottom: '20px' }}>
          <RotatingWords
            words={['Consultant', 'Agent', 'Developer']}
            className="font-semibold"
          />
        </div>

        <h2 className="hero-text-medium animate-text text-center">
          We&apos;re your AI Partner.
        </h2>
      </div>
    </section>
  );
}
