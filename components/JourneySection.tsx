'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedText } from './AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Identify',
    description: 'We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.',
  },
  {
    number: '02',
    title: 'Develop',
    description: 'We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.',
  },
  {
    number: '03',
    title: 'Scale',
    description: 'We implement scalable AI infrastructure and processes that grow with your business, ensuring sustainable competitive advantage.',
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(Math.floor(progress * 3), 2);
          setActiveStep(stepIndex);
        },
      },
    });

    // Animate triangular shapes
    timeline.to('.triangle-shape', {
      rotation: 360,
      scale: 1.2,
      stagger: 0.1,
      duration: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="how-we-work" ref={sectionRef} className="snap-section bg-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Animated triangular shapes */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {[0, 1, 2].map((i) => (
            <polygon
              key={i}
              className="triangle-shape triangle-morph"
              points="50,20 80,80 20,80"
              fill="none"
              stroke="#00D9FF"
              strokeWidth="0.2"
              opacity={0.3 - i * 0.1}
              transform={`scale(${1 + i * 0.3}) rotate(${i * 120} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            <AnimatedText>We spend our days guiding companies</AnimatedText>
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-light">
            <AnimatedText>through our</AnimatedText>{' '}
            <span className="gradient-text-animated font-bold">3-step AI Transformation Journey</span>
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <div className="relative h-[400px] flex items-center justify-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                  index === activeStep ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 pointer-events-none'
                }`}
              >
                <div className="text-8xl font-bold gradient-text-animated mb-4">
                  {step.number}
                </div>
                <h3 className="text-4xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-xl text-[#C0C0C0] max-w-2xl text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeStep ? 'w-12 bg-[#00D9FF]' : 'w-2 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
