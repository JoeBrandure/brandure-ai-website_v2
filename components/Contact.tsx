import React from 'react';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-snap relative min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-light leading-tight">
          Ready to{' '}
          <span className="accent-blue accent-animated font-semibold">
            transform
          </span>{' '}
          your business?
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          Let&apos;s discuss how AI can drive your growth
        </p>

        {/* CTA – pill style, deterministic, no click handler */}
        <div className="mt-8">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white rounded-full hover:bg-white/10 transition"
          >
            Get Started →
          </button>
        </div>
      </div>

      {/* Footer OVERLAYED inside Contact (last child) */}
      <Footer />
    </section>
  );
}
