'use client';

export default function HowWeWork() {
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
    <section id="how-we-work" className="section-snap snap-start" style={{ position: 'relative' }}>
      <div className="content-wrapper" style={{ position: 'relative', zIndex: 11 }}>
        {/* Process Cards Container */}
        <div className="process-cards-container">
          {steps.map((step, index) => (
            <div key={step.id} className="process-card" data-step={index + 1}>
              <div className="card-header">
                <div className="step-number-card text-[#00D9FF]">{index + 1}</div>
                <h3 className="step-title-card text-white text-2xl font-bold mb-4">{step.title}</h3>
              </div>
              <div className="card-content">
                <p className="step-description-card text-gray-300">
                  {step.description1}<br />
                  {step.description2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
