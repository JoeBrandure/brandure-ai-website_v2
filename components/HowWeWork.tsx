'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Identify",
    line1: "We identify high-impact AI opportunities and map the",
    line2: "transformation strategy to bring them to life",
    triangles: 1
  },
  {
    title: "Develop",
    line1: "We design and build bespoke AI systems and",
    line2: "automations proven to move the needle",
    triangles: 2
  },
  {
    title: "Scale",
    line1: "We monitor, optimize and scale adoption",
    line2: "across teams to compound ROI",
    triangles: 3
  }
];

// Triangle component with gradient
function TriangleWithGradient() {
  return (
    <svg className="w-16 h-16 mx-2" viewBox="0 0 64 64" aria-hidden>
      <defs>
        <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,217,255,0.8)" />
          <stop offset="100%" stopColor="rgba(0,153,204,0.4)" />
        </linearGradient>
      </defs>
      <polygon
        points="32,8 56,56 8,56"
        fill="url(#triangleGradient)"
        stroke="#00D9FF"
        strokeWidth="1"
        opacity="0.9"
      />
    </svg>
  );
}

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  const scrollToStep = (stepIndex: number) => {
    const stepElement = document.getElementById(`step-${stepIndex}`);
    if (stepElement) {
      stepElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const steps = gsap.utils.toArray<HTMLElement>('.hww-step');

    steps.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveStep(i),
        onEnterBack: () => setActiveStep(i),
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section id="how-we-work" className="h-[300vh] relative">
      {/* Fixed left navigation */}
      <div className="fixed left-12 top-1/2 -translate-y-1/2 z-10">
        {steps.map((step, i) => (
          <button 
            key={i}
            className={`block text-left mb-4 transition-colors ${
              activeStep === i ? 'text-[#00D9FF]' : 'text-gray-500'
            }`}
            onClick={() => scrollToStep(i)}
            style={{ letterSpacing: '0.12em' }}
          >
            {step.title.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Scrollable content with snap points */}
      <div className="h-full snap-y snap-mandatory overflow-y-scroll">
        {steps.map((step, i) => (
          <div key={i} id={`step-${i}`} className="h-screen snap-center flex items-center justify-center">
            {/* Centered triangle(s) with gradient */}
            <div className="text-center">
              <div className="flex justify-center mb-8">
                {[...Array(step.triangles)].map((_, j) => (
                  <TriangleWithGradient key={j} />
                ))}
              </div>
              <h3 className="text-[56px] text-[#00D9FF] mb-4 animate-text-blue">{step.title}</h3>
              <p className="text-white text-lg animate-text-white">{step.line1}</p>
              <p className="text-white text-lg animate-text-white">{step.line2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
