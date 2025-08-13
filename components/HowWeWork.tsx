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

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
        {/* Side Navigation */}
        <div style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                color: index === activeStep ? '#00D9FF' : '#666',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
              }}
            >
              {step.title}
            </div>
          ))}
        </div>

        <div className="content-wrapper">
          <div style={{ position: 'relative', minHeight: '500px' }}>
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
              <defs>
                <linearGradient id="prismGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#0099CC" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* First prism - hollow, always visible when active */}
              <polygon
                points="200,100 150,200 250,200"
                fill="none"
                stroke="url(#prismGradient)"
                strokeWidth="2"
                style={{
                  opacity: activeStep >= 0 ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  transform: `rotate(${activeStep * 120}deg)`,
                  transformOrigin: 'center',
                }}
              />
              
              {/* Second prism - slightly transparent */}
              <polygon
                points="200,120 160,210 240,210"
                fill="url(#prismGradient)"
                fillOpacity="0.2"
                stroke="url(#prismGradient)"
                strokeWidth="1"
                style={{
                  opacity: activeStep >= 1 ? 0.6 : 0,
                  transition: 'opacity 0.5s ease',
                  transform: `rotate(${activeStep * 120 + 60}deg)`,
                  transformOrigin: 'center',
                }}
              />
              
              {/* Third prism - mostly transparent */}
              <polygon
                points="200,140 170,220 230,220"
                fill="url(#prismGradient)"
                fillOpacity="0.1"
                stroke="url(#prismGradient)"
                strokeWidth="0.5"
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
                <h3 style={{ 
                  fontSize: '3rem', 
                  marginBottom: '20px', 
                  color: 'white',
                  fontWeight: 600 
                }}>
                  {step.title}
                </h3>
                <p className="body-text" style={{ 
                  maxWidth: '600px', 
                  margin: '0 auto',
                  fontSize: '1.125rem'
                }}>
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
