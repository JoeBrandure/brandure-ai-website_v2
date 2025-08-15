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
        <h1 className="text-7xl md:text-8xl font-light leading-tight">
          Ready to{' '}
          <span className="accent-blue accent-animated font-semibold">
            transform
          </span>{' '}
          your business?
        </h1>
        
        {/* Subheading */}
        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          Let&apos;s discuss how AI can drive your growth
        </p>
        
        {/* CTA Button */}
        <div className="mt-10">
          <button
            type="button"
            onClick={() => document.getElementById('contact-modal')?.classList.remove('hidden')}
            className="inline-flex items-center gap-3 px-12 py-5 text-lg font-medium border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started →
          </button>
        </div>
      </div>
      
      {/* Footer Overlay */}
      <Footer />
    </section>
  );
}
