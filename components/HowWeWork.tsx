'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: 'Identify',
    description: 'We identify high-impact AI opportunities and map the transformation strategy to bring them to life.',
  },
  {
    title: 'Develop',
    description: 'We design and build bespoke AI systems and automations proven to move the needle',
  },
  {
    title: 'Scale',
    description: 'We monitor, optimize and scale adoption across teams to compound ROI',
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Create scroll-triggered animation
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=200%',  // Scroll through 3 steps
        pin: true,
        scrub: 1,
        snap: {
          snapTo: [0, 0.5, 1],  // Snap to each step
          duration: 0.5,
          ease: "power2.inOut"
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
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-we-work" style={{ height: '100vh', position: 'relative' }}>
      <div style={{ 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
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
              // Click functionality removed due to ScrollTrigger type issues
            >
              {step.title}
            </div>
          ))}
        </div>

        <div style={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: '800px',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Animated Triangular Prisms */}
          <svg
            style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              zIndex: 0,
            }}
            viewBox="0 0 300 300"
          >
            <defs>
              <linearGradient id="prismGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0099CC" stopOpacity="1" />
                <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* First prism - always visible, hollow */}
            <polygon
              points="150,50 100,150 200,150"
              fill="none"
              stroke="url(#prismGradient)"
              strokeWidth="2"
              style={{
                opacity: activeStep >= 0 ? 1 : 0,
                transition: 'all 0.5s ease',
                transform: `rotate(${activeStep * 30}deg)`,
                transformOrigin: 'center',
              }}
            />
            
            {/* Second prism - visible for Develop and Scale */}
            {activeStep >= 1 && (
              <polygon
                points="150,70 110,160 190,160"
                fill="url(#prismGradient)"
                fillOpacity="0.2"
                stroke="url(#prismGradient)"
                strokeWidth="1.5"
                style={{
                  opacity: 0.6,
                  animation: 'fadeIn 0.5s ease',
                  transform: `rotate(${activeStep * 30 + 120}deg)`,
                  transformOrigin: 'center',
                }}
              />
            )}
            
            {/* Third prism - visible only for Scale */}
            {activeStep >= 2 && (
              <polygon
                points="150,90 120,170 180,170"
                fill="url(#prismGradient)"
                fillOpacity="0.1"
                stroke="url(#prismGradient)"
                strokeWidth="1"
                style={{
                  opacity: 0.3,
                  animation: 'fadeIn 0.5s ease',
                  transform: `rotate(${activeStep * 30 + 240}deg)`,
                  transformOrigin: 'center',
                }}
              />
            )}
          </svg>

          {/* Step Content */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '0 40px',
          }}>
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: index === activeStep ? 1 : 0,
                  pointerEvents: index === activeStep ? 'auto' : 'none',
                  transition: 'opacity 0.5s ease',
                  width: '100%',
                }}
              >
                <h3 style={{ 
                  fontSize: '52px',  // Increased from 48px
                  marginBottom: '24px', 
                  color: 'white',
                  fontWeight: 600,
                  letterSpacing: '-0.02em'
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  maxWidth: '600px', 
                  margin: '0 auto',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  color: '#C0C0C0'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
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
