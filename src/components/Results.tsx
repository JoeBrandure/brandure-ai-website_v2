'use client'
import { motion } from 'framer-motion'

export default function Results() {
  const stats = [
    { value: '48+', label: 'Bespoke AI Solutions Delivered' },
    { value: '220+', label: 'AI Opportunities Identified' },
    { value: '10,000+', label: 'Hours Saved Through Automation' },
  ];

  return (
    <section id="stats-section" className="box-border w-full h-[100dvh] min-h-[100dvh] snap-always snap-center flex flex-col will-change-transform justify-center items-center text-white tracking-normal">
      <div className="relative w-full px-4 md:px-8 lg:px-12 mx-auto flex flex-col justify-center">
        <p className="text-4xl md:text-5xl text-center whitespace-pre-wrap mb-10 md:mb-14">
          We don&apos;t sell AI. We sell <span className="italic brandure-accent brandure-breathe">Results.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col items-center gap-2 lg:gap-4">
              <p className="lg:text-8xl md:text-7xl text-6xl tracking-widest">{s.value}</p>
              <p className="text-lg text-white/90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
