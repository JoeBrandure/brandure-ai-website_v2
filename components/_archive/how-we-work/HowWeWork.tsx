'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JourneyScene } from './JourneyScene';
import { AnimatedText } from '../../AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 'identify',
    title: 'Identify',
    description1: 'We identify high-impact AI opportunities and map the',
    description2: 'transformation strategy to bring them to life'
  },
  {
    id: 'develop',
    title: 'Develop',
    description1: 'We design and build bespoke AI systems and',
    description2: 'automations proven to move the needle'
  },
  {
    id: 'scale',
    title: 'Scale',
    description1: 'We monitor, optimize and scale adoption',
    description2: 'across teams to compound ROI'
  }
];

export const HowWeWork: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.step-section');
    
    sections.forEach((section: unknown, i) => {
      const element = section as Element;
      ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setCurrentStep(i + 1),
        onEnterBack: () => setCurrentStep(i + 1),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const scrollToStep = (index: number) => {
    const element = document.getElementById(`step-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div ref={sectionRef} className="relative">
      {/* Introduction Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <h2 className="text-5xl md:text-7xl mb-8">
            <AnimatedText text="We guide companies through our" className="text-white" />
            <br />
            <AnimatedText text="3-step " className="text-white" delay={0.5} />
            <AnimatedText text="AI Transformation" className="text-[#00D9FF]" delay={0.7} />
            <AnimatedText text=" Journey" className="text-white" delay={1} />
          </h2>
        </div>
        <div className="absolute inset-0 z-0">
          <JourneyScene step={0} />
        </div>
      </div>

      {/* Side Navigation */}
      <div 
        ref={navRef}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      >
        {steps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => scrollToStep(i)}
            className={`
              text-sm font-mono uppercase tracking-wider transition-all duration-300
              ${currentStep === i + 1 ? 'text-[#00D9FF]' : 'text-gray-500 hover:text-gray-300'}
            `}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Step Sections */}
      {steps.map((step, i) => (
        <div
          key={step.id}
          id={`step-${i}`}
          className="step-section min-h-screen flex items-center justify-center relative"
        >
          <div className="text-center z-10 max-w-4xl mx-auto px-8">
            <h3 className="text-6xl md:text-8xl mb-8">
              <AnimatedText 
                text={step.title} 
                className="text-white font-light"
                animationType="scale"
              />
            </h3>
            <p className="text-xl md:text-2xl text-gray-400">
              <AnimatedText text={step.description1} delay={0.3} />
              <br />
              <AnimatedText text={step.description2} delay={0.5} />
            </p>
          </div>
          <div className="absolute inset-0 z-0">
            <JourneyScene step={i + 1} />
          </div>
        </div>
      ))}
    </div>
  );
};
