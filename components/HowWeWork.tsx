'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    key: 'identify',
    title: 'Identify',
    blurb: 'We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.',
  },
  {
    key: 'develop',
    title: 'Develop',
    blurb: 'We leverage our experience and network to develop bespoke AI systems that are proven to move the needle inside your business.',
  },
  {
    key: 'scale',
    title: 'Scale',
    blurb: 'We scale and optimize your AI systems, enabling sustainable growth and continuous improvement.',
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const steps = gsap.utils.toArray<HTMLElement>('.hww-step');

    steps.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="section-snap"
      style={{ 
        minHeight: '300vh', // Full snap scroll height
        position: 'relative'
      }}
    >
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8" style={{ height: '100%' }}>
        {/* Left mini nav - Fixed left rail */}
        <aside className="col-span-12 md:col-span-3">
          <div className="md:sticky md:top-28 space-y-4 text-sm tracking-widest">
            {STEPS.map((s, i) => (
              <button
                key={s.key}
                onClick={() =>
                  document.getElementById(`hww-${s.key}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
                className={`block text-left transition-colors duration-300 ${
                  active === i ? 'text-[#00D9FF]' : 'text-gray-400 hover:text-gray-300'
                }`}
                style={{ letterSpacing: '0.12em' }}
              >
                {s.title.toUpperCase()}
              </button>
            ))}
          </div>
        </aside>

        {/* Center content with enhanced triangle */}
        <div className="col-span-12 md:col-span-6">
          {STEPS.map((s) => (
            <div 
              id={`hww-${s.key}`} 
              key={s.key} 
              className="hww-step min-h-screen flex items-center justify-center"
              style={{ scrollSnapAlign: 'center' }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-8">
                  <svg
                    width={520}
                    height={520}
                    viewBox="0 0 560 560"
                    style={{ 
                      filter: 'drop-shadow(0 0 30px rgba(0,217,255,0.25)) drop-shadow(0 0 8px rgba(0,153,204,0.25))'
                    }}
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="brandureTriangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0,217,255,0.32)" />
                        <stop offset="100%" stopColor="rgba(0,153,204,0.08)" />
                      </linearGradient>
                    </defs>
                    <polygon 
                      points="280,40 520,520 40,520" 
                      fill="url(#brandureTriangleGradient)" 
                      stroke="#00D9FF" 
                      strokeWidth="3" 
                      opacity="0.9" 
                    />
                    <polygon 
                      points="280,100 460,500 100,500" 
                      fill="none" 
                      stroke="#00A8CC" 
                      strokeWidth="2" 
                      opacity="0.7" 
                    />
                  </svg>
                </div>

                <div className="text-gray-400 text-xs tracking-widest mb-2">{s.title.toUpperCase()}</div>
                <h3 className="text-white text-[56px] leading-tight font-semibold mb-4 brandure-animate-white">
                  {s.title}
                </h3>

                {/* Two-line centered blurb */}
                <p className="text-gray-300 text-[20px] leading-relaxed max-w-[48ch] mx-auto text-center">
                  {s.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right spacer */}
        <div className="col-span-12 md:col-span-3" />
      </div>
    </section>
  );
}
