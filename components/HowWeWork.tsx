import { useEffect, useRef } from 'react';

export default function HowWeWork() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

  return (
    <section id="how-we-work" className="section-snap snap-start">
      <div className="content-wrapper">
        {/* Process Timeline Container */}
        <div className="process-timeline-container">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="process-step" 
              data-step={index + 1}
            >
              <div className="step-number text-[#00D9FF]">{index + 1}</div>
              <h3 className="step-title text-white text-2xl font-bold mb-4">{step.title}</h3>
              <p className="step-description text-gray-300">
                {step.description1}<br />
                {step.description2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
