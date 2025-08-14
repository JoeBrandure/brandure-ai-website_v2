'use client';

import { useState, useEffect } from 'react';

function useScrollSpy(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids, offset]);
  return active;
}

const HowWeWork = () => {
  const stepIds = ["identify", "develop", "scale"];
  const activeId = useScrollSpy(stepIds, 160);
  
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
    <section id="how-we-work" className="relative">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-8 md:gap-14">
        {/* Left mini-nav */}
        <aside className="hidden md:block sticky top-28 self-start">
          <nav aria-label="Process steps" className="space-y-3 text-sm tracking-wide">
            {stepIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block uppercase transition-opacity ${
                  activeId === id ? "opacity-100 accent-blue accent-animated" : "opacity-50 hover:opacity-80"
                }`}
              >
                {id.toUpperCase()}
              </a>
            ))}
          </nav>
        </aside>

        {/* Right: keep existing step content exactly as is */}
        <div className="min-w-0">
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
                  <h3 className="text-[56px] mb-6 accent-blue accent-animated">
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
      </div>
    </section>
  );
};

export default HowWeWork;
