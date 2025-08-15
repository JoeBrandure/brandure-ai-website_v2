'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Identify',
    description: 'We identify high-impact AI opportunities and map the transformation strategy to bring them to life.',
    prisms: 1,
  },
  {
    title: 'Develop',
    description: 'We design and build bespoke AI systems and automations proven to move the needle',
    prisms: 2,
  },
  {
    title: 'Scale',
    description: 'We monitor, optimize and scale adoption across teams to compound ROI',
    prisms: 3,
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Prevent normal scroll snap for this section
    section.style.scrollSnapAlign = 'none';

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (steps.length - 1),
          duration: 0.5,
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
          setActiveStep(stepIndex);
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ height: '300vh' }}>
      <div className="section-snap" style={{ position: 'sticky', top: 0 }}>
        <div className="content-wrapper">
          <h2 className="section-heading" style={{ marginBottom: '60px' }}>
            We spend our days guiding companies<br />
            through our 3-step <span className="gradient-animated">AI-Transformation</span> process
          </h2>

          <div style={{ position: 'relative', minHeight: '400px' }} className="flex flex-col items-center justify-center text-center">

            {/* Step Content */}
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: index === activeStep ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: index === activeStep ? 'auto' : 'none',
                  zIndex: 1,
                }}
              >
                <h3 style={{ fontSize: '3rem', marginBottom: '20px', color: 'white' }}>
                  {step.title}
                </h3>
                <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
