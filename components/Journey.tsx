'use client';

import { AnimatedText } from './AnimatedText';

export default function Journey() {
  return (
    <section id="journey" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading animate-text text-center">
          We spend our days guiding<br className="desktop-only" />{' '}
          companies through <span className="nowrap-our-3step">our 3-step</span><br className="desktop-only" />
          <AnimatedText text="AI-Transformation" /><br className="desktop-only" />
          process
        </h2>
      </div>
    </section>
  );
}
