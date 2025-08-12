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

          <div style={{ position: 'relative', minHeight: '400px' }}>
            {/* Triangular Prisms */}
            <svg
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                zIndex: 0,
              }}
              viewBox="0 0 400 400"
            >
              {/* First prism - always visible when active */}
              <polygon
                className="triangle-prism hollow"
                points="200,100 150,200 250,200"
                style={{
                  opacity: activeStep >= 0 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  transform: `rotate(${activeStep * 120}deg)`,
                  transformOrigin: 'center',
                }}
              />
              
              {/* Second prism - visible for step 2 and 3 */}
              <polygon
                className="triangle-prism semi-transparent"
                points="200,120 160,210 240,210"
                style={{
                  opacity: activeStep >= 1 ? 0.6 : 0,
                  transition: 'opacity 0.5s ease',
                  transform: `rotate(${activeStep * 120 + 60}deg)`,
                  transformOrigin: 'center',
                }}
              />
              
              {/* Third prism - visible for step 3 */}
              <polygon
                className="triangle-prism mostly-transparent"
                points="200,140 170,220 230,220"
                style={{
                  opacity: activeStep >= 2 ? 0.3 : 0,
                  transition: 'opacity 0.5s ease',
                  transform: `rotate(${activeStep * 120 + 120}deg)`,
                  transformOrigin: 'center',
                }}
              />
            </svg>

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
