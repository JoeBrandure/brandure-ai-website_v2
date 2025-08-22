'use client';

import { AnimatedText } from './AnimatedText';
import ParticleTransition from './ParticleTransition';

export default function Journey() {
  return (
    <section id="journey" className="section-snap" style={{ 
      position: 'relative', 
      overflow: 'visible',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: 'calc(18vh)'  // halfway between current and center
    }}>
      <div className="content-wrapper flex flex-col items-center justify-center text-center">
        <div>
          <h2 className="section-heading-medium animate-text" style={{ lineHeight: 1.3, marginBottom: '40px' }}>
            We spend our days guiding companies<br />
            through our 3-step <AnimatedText text="AI-Transformation" /> process
          </h2>
        </div>
        
        {/* Particle transition - positioned at bottom half of Journey */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10">
          <ParticleTransition />
        </div>

      </div>
    </section>
  );
}
