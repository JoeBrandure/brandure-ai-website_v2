import React from 'react';

export default function Pitch() {
  return (
    <section id="pitch" className="section-snap snap-start">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <h2 className="section-heading" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
          We help <span className="accent-blue accent-animated">you</span> understand
          <br />
          the <span className="accent-blue accent-animated">Power of AI.</span>
        </h2>
        <p className="section-subheading text-grey-white">
          Your trusted partner in becoming an AI-powered business
        </p>
      </div>
    </section>
  );
}
