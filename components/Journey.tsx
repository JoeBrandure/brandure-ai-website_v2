'use client';

import { AnimatedText } from './AnimatedText';

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
        

      </div>
    </section>
  );
}
