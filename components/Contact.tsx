import React from 'react';

export default function Contact() {
  return (
    <section 
      id="contact"
      className="section-snap relative min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading - matching Journey text size */}
        <h1 className="text-8xl md:text-9xl font-light leading-tight">
          Ready to{' '}
          <span className="accent-blue accent-animated font-semibold">
            transform
          </span>{' '}
          your business?
        </h1>
        
        {/* Subheading - matching Hero subtitle size */}
        <p className="mt-8 text-2xl md:text-3xl text-gray-300">
          Let&apos;s discuss how AI can drive your growth
        </p>
        
        {/* CTA Button */}
        <div className="mt-12">
          <button
            type="button"
            onClick={() => document.getElementById('contact-modal')?.classList.remove('hidden')}
            className="inline-flex items-center gap-3 px-12 py-5 text-lg font-medium border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started →
          </button>
        </div>
      </div>
      
      {/* Footer Overlay - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Left: Contact */}
            <div className="text-left">
              <h3 className="font-semibold mb-2">Contact</h3>
              <div className="flex flex-col md:flex-row md:gap-4 text-sm text-gray-300">
                <span>+971 52 451 9579</span>
                <span className="hidden md:inline">|</span>
                <span>+971 52 967 8310</span>
              </div>
            </div>
            
            {/* Center: Legal */}
            <div className="text-center">
              <div className="flex justify-center gap-4 text-sm text-gray-300">
                <a href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </a>
                <span>|</span>
                <a href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </div>
            </div>
            
            {/* Right: Follow Us */}
            <div className="text-right">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <a 
                href="https://linkedin.com/company/brandure-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
