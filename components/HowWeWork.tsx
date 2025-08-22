'use client';

import { useState } from 'react';

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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section id="how-we-work" className="section-snap snap-start" style={{ position: 'relative' }}>
      <div className="content-wrapper" style={{ position: 'relative', zIndex: 11 }}>
        {/* Process Cards Container */}
        <div className="process-cards-container">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="process-card" 
              data-step={index + 1}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Cursor-following glow effect */}
              {hoveredCard === index && (
                <div 
                  className="card-glow"
                  style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                  }}
                />
              )}
              
              <div className="card-header">
                <div className="step-number-card text-[#00D9FF]">{index + 1}</div>
                <h3 className="step-title-card text-white text-3xl font-bold mb-6">{step.title}</h3>
              </div>
              <div className="card-content">
                <p className="step-description-card text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
