import React from 'react';
import { AnimatedText } from './AnimatedText';
import Counter from './Counter';

export default function Results() {
  return (
    <section id="results" className="section-snap snap-start">
      <div className="content-wrapper">
        <h2 className="section-heading" style={{ marginBottom: '60px' }}>
          <AnimatedText text="We don't sell AI, we sell " className="text-white" />
          <AnimatedText text="results" delay={0.3} />
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: '40px', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div className="hero-text-large" style={{ color: 'white' }}>
              <Counter end={48} />
            </div>
            <div style={{ 
              width: '100%', 
              height: '2px', 
              background: '#00D9FF', 
              margin: '20px 0' 
            }} />
            <p className="body-text">Bespoke AI Solutions Delivered</p>
          </div>
          
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div className="hero-text-large" style={{ color: 'white' }}>
              <Counter end={220} />
            </div>
            <div style={{ 
              width: '100%', 
              height: '2px', 
              background: '#00D9FF', 
              margin: '20px 0' 
            }} />
            <p className="body-text">AI Opportunities Identified</p>
          </div>
          
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div className="hero-text-large" style={{ color: 'white' }}>
              <Counter end={10000} />
            </div>
            <div style={{ 
              width: '100%', 
              height: '2px', 
              background: '#00D9FF', 
              margin: '20px 0' 
            }} />
            <p className="body-text">Hours Saved through AI Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
