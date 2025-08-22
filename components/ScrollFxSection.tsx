'use client';

import { FullScreenScrollFX } from './FullScreenScrollFx';

export default function ScrollFxSection() {
  const sections = [
    {
      id: 'ai-strategy',
      background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 100%)',
      leftLabel: '01',
      title: 'AI Strategy & Planning',
      rightLabel: 'Foundation',
      renderBackground: (_active: boolean, _previous: boolean) => (
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black" />
      ),
    },
    {
      id: 'ai-development',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      leftLabel: '02',
      title: 'AI Development & Build',
      rightLabel: 'Execution',
      renderBackground: (_active: boolean, _previous: boolean) => (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      ),
    },
    {
      id: 'ai-scale',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
      leftLabel: '03',
      title: 'AI Scale & Optimization',
      rightLabel: 'Growth',
      renderBackground: (_active: boolean, _previous: boolean) => (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-black to-gray-900" />
      ),
    },
  ];

  return (
    <section className="w-full h-screen">
      <FullScreenScrollFX
        sections={sections}
        className="w-full h-full"
        colors={{
          text: '#00D9FF',
          overlay: 'rgba(0,0,0,0.3)',
          pageBg: '#000000',
          stageBg: '#0a0a0a',
        }}
        fontFamily="'DM Sans', sans-serif"
        showProgress={true}
        debug={false}
        durations={{ change: 0.8, snap: 1000 }}
        bgTransition="fade"
        parallaxAmount={2}
      />
    </section>
  );
}
