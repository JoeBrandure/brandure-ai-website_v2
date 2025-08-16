import React from 'react';
import AnimatedText from './AnimatedText';
import Counter from './Counter';

export default function Results() {
  return (
    <section id="results" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading animate-text" style={{ marginBottom: '60px' }}>
          We don&apos;t sell AI, we sell <AnimatedText text="results" delay={0.3} />
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap'
          }}
        >
          {/* 1 */}
          <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
            <div className="hero-text-large" style={{ color: 'white' }}>
              <Counter end={48} suffix="+" />
            </div>
            <div className="stat-divider" />
            <p className="body-text">Bespoke AI Solutions Delivered</p>
          </div>

          {/* 2 */}
          <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
            <div className="hero-text-large" style={{ color: 'white' }}>
              <Counter end={220} suffix="+" />
            </div>
            <div className="stat-divider" />
            <p className="body-text">AI Opportunities Identified</p>
          </div>

          {/* 3 */}
          <div style={{ flex: 1, minWidth: '200px', textAlign: 'center' }}>
            <div className="hero-text-large" style={{ color: 'white' }}>
              <Counter end={10000} suffix="+" />
            </div>
            <div className="stat-divider" />
            <p className="body-text">Hours Saved through AI Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
