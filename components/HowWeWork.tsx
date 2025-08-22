'use client';

import { useState, useEffect } from 'react';
import { GlowingShadow } from './GlowingShadow';

export default function HowWeWork() {
  const steps = [
    {
      id: 'identify',
      title: 'Identify',
      description: 'We identify high-impact AI opportunities and map the transformation strategy to bring them to life'
    },
    {
      id: 'develop',
      title: 'Develop',
      description: 'We design and build bespoke AI systems and automations proven to move the needle'
    },
    {
      id: 'scale',
      title: 'Scale',
      description: 'We monitor, optimize and scale adoption across teams to compound ROI'
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const scrollToStep = (index: number) => {
    setCurrentStep(index);
    const element = document.getElementById(`step-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add scroll listener to automatically highlight active step
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.steps-scroll-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;

      // Calculate which step is most visible
      let activeStep = 0;
      let minDistance = Infinity;

      steps.forEach((_, index) => {
        const stepElement = document.getElementById(`step-${index}`);
        if (stepElement) {
          const stepRect = stepElement.getBoundingClientRect();
          const stepCenter = stepRect.top + stepRect.height / 2;
          const containerCenter = containerTop + containerHeight / 2;
          const distance = Math.abs(stepCenter - containerCenter);

          if (distance < minDistance) {
            minDistance = distance;
            activeStep = index;
          }
        }
      });

      setCurrentStep(activeStep);
    };

    const container = document.querySelector('.steps-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [steps]);

  return (
    <section id="how-we-work" className="section-snap snap-start" style={{ position: 'relative' }}>
      <div className="how-we-work-container">
        {/* Left Navigation */}
        <div className="step-navigation">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => scrollToStep(index)}
              className={`nav-step ${currentStep === index ? 'active' : ''}`}
            >
              <span className="nav-step-number">{index + 1}</span>
              <span className="nav-step-title">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Content Container */}
        <div className="steps-scroll-container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              id={`step-${index}`}
              className="step-section"
              data-step={index + 1}
            >
              <GlowingShadow>
                <div className="step-content">
                  <div className="step-number-corner">{index + 1}</div>
                  <div className="step-text-content">
                    <h2 className="step-title-large">{step.title}</h2>
                    <p className="step-description-large">{step.description}</p>
                  </div>
                </div>
              </GlowingShadow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
