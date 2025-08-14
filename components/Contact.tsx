import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-snap relative min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="max-w-3xl">
          {/* Heading: reuse the exact accent class list used on the accent-blue word in Journey ("AI-Transformation") */}
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Ready to <span className="accent-blue accent-animated font-semibold">transform</span> your business?
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Let&apos;s discuss how AI can drive your growth
          </p>

          {/* CTA button: copy the exact <button> markup + className + onClick from components/FooterCTA.tsx, but change the label to "Get Started" */}
          <div>
            <button
              onClick={() => document.getElementById('contact-modal')?.classList.remove('hidden')}
              className="inline-flex items-center gap-2 px-9 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
