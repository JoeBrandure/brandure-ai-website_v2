'use client';
import { useEffect, useMemo, useState } from 'react';

const WORDS = ['Provider', 'Specialist', 'Development', 'Consulting'];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const m = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (m) return;
    const id = setInterval(() => setI(x => (x + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);
  const word = useMemo(() => WORDS[i], [i]);

  /* morningside hero sizes:
     title lines: text-5xl md:text-7xl lg:text-8xl
     tight tracking & leading across lines
  */
  const main = 'text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.92]';

  return (
    <section id="hero" className="box-border w-full snap-always snap-center h-[100dvh] min-h-[100dvh] flex flex-col items-center justify-center text-white">
      {/* nav is fixed; this section is purely the centered stack */}
      <div className="w-10/12 md:w-11/12 lg:w-9/12 mx-auto text-center flex flex-col items-center gap-3">
        <p className={`${main}`}>We&apos;re not just your AI</p>

        <div className={`${main} h-16 md:h-20 lg:h-32 flex items-center justify-center`}>
          <span className="brandure-accent italic brandure-breathe">{word}</span>
        </div>

        <p className={`${main}`}>Company</p>

        {/* Slightly larger supporting line than before */}
        <p className="mt-2 text-2xl md:text-3xl lg:text-3xl tracking-normal">We&apos;re your AI Partner</p>
      </div>
    </section>
  );
}
