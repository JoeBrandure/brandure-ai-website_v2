import React from 'react';
import { AnimatedText } from '../components/AnimatedText';

export default function Partnership(){
  return (
    <section className="section-snap bg-[linear-gradient(180deg,#0a0a0a,#000)]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-center">
        <p className="text-center text-[clamp(36px,5.5vw,72px)] font-light">
          The best AI systems are built <AnimatedText text="side-by-side" className="accent-blue accent-animated" delay={0.3} />
        </p>
        <p className="mt-6 text-[clamp(18px,2.2vw,28px)] text-[#C0C0C0]">
          Accelerate your AI adoption journey.
        </p>
      </div>
    </section>
  );
}
