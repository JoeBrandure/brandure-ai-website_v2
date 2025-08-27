'use client';

import { AnimatedText } from './AnimatedText';

export default function Journey() {
  return (
    <section id="journey" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading animate-text text-center">
          We spend our days<br />
          guiding companies<br />
          through our
          {/* Desktop animated version */}
          {' '}<span className="desktop-only"><AnimatedText text="3-step" /></span>
          {/* Mobile fallback (non-animated) */}
          {' '}<span className="mobile-only accent-blue italic">3-step</span>
          {' '}<AnimatedText text="AI-Transformation" />
          <br />
          process
        </h2>
      </div>
    </section>
  );
}
