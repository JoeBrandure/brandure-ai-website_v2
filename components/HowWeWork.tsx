'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Identify',
    description: 'We identify high-impact AI opportunities and map the\ntransformation strategy to bring them to life.',
  },
  {
    title: 'Develop',
    description: 'We design and build bespoke AI systems and\nautomations proven to move the needle',
  },
  {
    title: 'Scale',
    description: 'We monitor, optimize and scale adoption\nacross teams to compound ROI',
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: true,  // CRITICAL: Ensure proper spacing
      scrub: 1,
      snap: {
        snapTo: [0, 0.33, 0.66, 1],
        duration: { min: 0.2, max: 0.6 },
        ease: "power1.inOut"
      },
      onUpdate: (self) => {
        const progress = self.progress;
        if (progress < 0.33) {
          setActiveStep(0);
        } else if (progress < 0.66) {
          setActiveStep(1);
        } else {
          setActiveStep(2);
        }
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="how-we-work" 
      className="section-snap"
      style={{ 
        height: '300vh',  // CRITICAL: Total scroll height
        position: 'relative' 
      }}
    >
      <div style={{ 
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Side Navigation */}
        <div style={{
          position: 'absolute',
          left: '3rem',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 10,
        }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                color: index === activeStep ? '#00D9FF' : '#666',
                fontSize: '0.875rem',
                fontWeight: index === activeStep ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {step.title}
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div style={{ 
          position: 'relative',
          textAlign: 'center',
          width: '100%',
          maxWidth: '800px',
        }}>
          {/* Triangular Prisms - Centered above text */}
          <div style={{
            position: 'absolute',
            top: '-200px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '400px',
            height: '300px',
          }}>
            <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="prismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#0099CC" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* First prism - always visible */}
              <polygon
                points="200,50 150,150 250,150"
                fill="none"
                stroke="url(#prismGrad)"
                strokeWidth="2"
                style={{
                  opacity: activeStep >= 0 ? 1 : 0,
                  transition: 'all 0.5s ease',
                }}
              />
              
              {/* Second prism */}
              {activeStep >= 1 && (
                <polygon
                  points="200,70 160,160 240,160"
                  fill="url(#prismGrad)"
                  fillOpacity="0.2"
                  stroke="url(#prismGrad)"
                  strokeWidth="1.5"
                  style={{
                    opacity: 0.6,
                    animation: 'fadeIn 0.5s ease',
                  }}
                />
              )}
              
              {/* Third prism */}
              {activeStep >= 2 && (
                <polygon
                  points="200,90 170,170 230,170"
                  fill="url(#prismGrad)"
                  fillOpacity="0.1"
                  stroke="url(#prismGrad)"
                  strokeWidth="1"
                  style={{
                    opacity: 0.3,
                    animation: 'fadeIn 0.5s ease',
                  }}
                />
              )}
            </svg>
          </div>

          {/* Step Content - Centered below prisms */}
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                position: index === 0 ? 'relative' : 'absolute',
                top: index === 0 ? '0' : '50%',
                left: index === 0 ? 'auto' : '50%',
                transform: index === 0 ? 'none' : 'translate(-50%, -50%)',
                opacity: index === activeStep ? 1 : 0,
                pointerEvents: index === activeStep ? 'auto' : 'none',
                transition: 'opacity 0.5s ease',
                width: '100%',
              }}
            >
              <h3 style={{ 
                fontSize: '56px',  // As requested
                marginBottom: '24px', 
                color: 'white',
                fontWeight: 600,
                letterSpacing: '-0.02em'
              }}>
                {step.title}
              </h3>
              <p style={{ 
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#C0C0C0',
                whiteSpace: 'pre-line',  // Preserve line breaks
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
