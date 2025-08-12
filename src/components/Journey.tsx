// src/components/Journey.tsx
export default function Journey(){
  return (
    <section className="snap-center min-h-screen w-full flex items-center justify-center bg-black text-white">
      <div className="w-11/12 max-w-6xl text-center space-y-4">
        <p className="text-3xl md:text-5xl lg:text-6xl">How We Work</p>
        <ol className="text-lg md:text-xl text-white/80 space-y-2">
          <li><strong>Discover</strong> — Uncover your highest-impact opportunities</li>
          <li><strong>Educate</strong> — Upskill your team & align on best practices</li>
          <li><strong>Develop</strong> — Build bespoke AI solutions, end-to-end</li>
          <li><strong>Scale</strong> — Monitor, optimize & grow through AI</li>
        </ol>
      </div>
    </section>
  );
}
