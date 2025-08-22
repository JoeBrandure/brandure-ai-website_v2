import { ContainerScroll, ContainerSticky, ProcessCard, ProcessCardBody, ProcessCardTitle } from "./blocks/process-timeline";

export default function HowWeWork() {
  const PROCESS_PHASES = [
    {
      id: "identify",
      title: "Identify",
      description:
        "We identify high-impact AI opportunities and map the transformation strategy to bring them to life. Our team analyzes your business processes to find the most impactful areas for AI integration.",
    },
    {
      id: "develop",
      title: "Develop",
      description:
        "We design and build bespoke AI systems and automations proven to move the needle. From concept to deployment, we create custom solutions tailored to your specific needs and goals.",
    },
    {
      id: "scale",
      title: "Scale",
      description:
        "We monitor, optimize and scale adoption across teams to compound ROI. Our ongoing support ensures your AI solutions continue to deliver value as your business grows.",
    },
  ];

  return (
    <section id="how-we-work" className="section-snap snap-start">
      <ContainerScroll
        className="container px-6 py-12 h-[300vh]"
        style={{
          background:
            "radial-gradient(30% 80% at 0% 70%, #00D9FF 0%, #0099CC 22.92%, #006699 42.71%, #0f172a 88.54%)",
        }}
      >
        <div className="mb-8 space-y-4">
          <h2 className="bg-gradient-to-r from-[#00D9FF]/60 via-[#00D9FF]/50 to-[#00D9FF]/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
            Our 3-step transformation
            <br /> process
          </h2>
          <p className="max-w-[52ch] text-sm text-slate-300">
            We blend creative AI solutions with cutting‑edge technology to build stunning, 
            high‑performance systems that elevate your brand and captivate your audience.
          </p>
        </div>

        <ContainerSticky className="top-16 flex flex-nowrap">
          {PROCESS_PHASES.map((phase, index) => (
            <ProcessCard
              key={phase.id}
              itemsLength={PROCESS_PHASES.length}
              index={index}
              className="min-w-[70%] max-w-[70%]"
            >
              <ProcessCardTitle className="border-r border-slate-700">
                <div className="rounded-full size-8 bg-[#00D9FF] text-sm flex justify-center items-center text-black font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </ProcessCardTitle>
              <ProcessCardBody className="flex flex-col gap-10">
                <h3 className="text-3xl font-semibold leading-tight">
                  {phase.title}
                </h3>
                <p className="opacity-80">{phase.description}</p>
              </ProcessCardBody>
            </ProcessCard>
          ))}
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}
