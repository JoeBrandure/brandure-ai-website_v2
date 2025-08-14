import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-snap relative min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="max-w-3xl">
          {/* Heading — use the clamp scale consistent with the site */}
          <h1 className="text-[clamp(36px,5.5vw,72px)] font-light leading-tight">
            Ready to <span className="accent-blue accent-animated font-semibold">transform</span> your business?
          </h1>

          {/* Supporting copy — clamp scale for body text */}
          <p className="mt-3 text-[clamp(16px,1.6vw,20px)] text-[#C0C0C0]">
            Let&apos;s discuss how AI can drive your growth
          </p>

          {/* CTA button — exact canonical outline style used elsewhere */}
          <div className="mt-8">
            <button
              onClick={() => document.getElementById('contact-modal')?.classList.remove('hidden')}
              className="inline-flex items-center gap-2 px-9 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition"
              aria-label="Get started"
            >
              Get Started ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
