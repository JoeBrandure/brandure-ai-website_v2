import React from 'react';
import { AnimatedText } from './AnimatedText';

export default function Pitch() {
  return (
    <section id="pitch" className="section-snap snap-start">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <h2 className="text-center text-[clamp(36px,5.5vw,72px)] font-light" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
          We help <AnimatedText text="you" /> understand
          <br />
          the <AnimatedText text="Power of AI" />
        </h2>

        <p className="mt-6 text-[clamp(18px,2.2vw,28px)] text-[#C0C0C0] text-center">
          Your trusted partner in becoming an AI-powered business.
        </p>
      </div>
    </section>
  );
}
