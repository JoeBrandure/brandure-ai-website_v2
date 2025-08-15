import React from 'react';
import { AnimatedText } from './AnimatedText';

export default function Partnership(){
  return (
    <section id="partnership" className="section-snap snap-start">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <p className="text-center text-[clamp(36px,5.5vw,72px)] font-light">
          The best AI systems are built <AnimatedText text="side-by-side" />
        </p>

        <p className="mt-6 text-[clamp(18px,2.2vw,28px)] text-[#C0C0C0] text-center">
          Accelerate your AI adoption journey.
        </p>
      </div>
    </section>
  );
}
