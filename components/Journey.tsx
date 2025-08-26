'use client';

import { AnimatedText } from './AnimatedText';

export default function Journey() {
  return (
    <section id="journey" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading animate-text text-center" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
          We spend our days<br />
          guiding companies through<br />
          our <AnimatedText text="3-step AI-Transformation" /> process
        </h2>
      </div>
    </section>
  );
}
