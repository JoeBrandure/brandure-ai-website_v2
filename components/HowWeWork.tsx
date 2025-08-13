'use client';

import { useState } from 'react';

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: 'identify',
      title: 'Identify',
      line1: 'We identify high-impact AI opportunities and map the',
      line2: 'transformation strategy to bring them to life',
      triangles: 1
    },
    {
      id: 'develop',
      title: 'Develop',
      line1: 'We design and build bespoke AI systems and',
      line2: 'automations proven to move the needle',
      triangles: 2
    },
    {
      id: 'scale',
      title: 'Scale',
      line1: 'We monitor, optimize and scale adoption',
      line2: 'across teams to compound ROI',
      triangles: 3
    }
  ];

  return (
    <div className="relative h-[300vh]">
      {/* Fixed Left Navigation */}
      <div className="fixed left-12 top-1/2 -translate-y-1/2 z-20">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => {
              document.getElementById(`step-${index}`)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`block text-left mb-6 transition-colors duration-300 ${
              activeStep === index ? 'text-[#00D9FF]' : 'text-gray-500'
            }`}
            style={{ fontFamily: 'DM-Mono-Light, monospace' }}
          >
            {step.title.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="h-full">
        {steps.map((step, index) => (
          <div
            key={step.id}
            id={`step-${index}`}
            className="h-screen snap-center flex items-center justify-center"
          >
            <div className="text-center">
              {/* Triangles */}
              <div className="flex justify-center mb-12 gap-2">
                {[...Array(step.triangles)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-[120px] h-[120px]"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <linearGradient id={`gradient-${index}-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#0099CC" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="50,10 10,90 90,90"
                      fill={`url(#gradient-${index}-${i})`}
                      stroke="#00D9FF"
                      strokeWidth="2"
                    />
                  </svg>
                ))}
              </div>
              
              {/* Title */}
              <h3 className="text-[56px] text-[#00D9FF] mb-6 animate-text-blue">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-white text-xl animate-text">{step.line1}</p>
              <p className="text-white text-xl animate-text">{step.line2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
