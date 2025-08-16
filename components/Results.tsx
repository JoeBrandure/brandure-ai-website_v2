import React from 'react';
import AnimatedText from './AnimatedText';
import Counter from './Counter';

export default function Results() {
  return (
    <section id="results" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading" style={{ marginBottom: '60px' }}>
          We don&apos;t sell AI, we sell <AnimatedText text="results" />
        </h2>

        {/* KEEP the rest of your counter layout exactly as it is */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-white">
              <Counter end={95} suffix="%" />
            </div>
            <p className="mt-2 text-gray-300">Faster Implementation</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-white">
              <Counter end={3} suffix="x" />
            </div>
            <p className="mt-2 text-gray-300">ROI Improvement</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-white">
              <Counter end={100} suffix="%" />
            </div>
            <p className="mt-2 text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
