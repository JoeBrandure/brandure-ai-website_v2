import React from 'react';
import AnimatedText from './AnimatedText';

export default function Contact() {
  return (
    <section id="contact" className="section-snap relative min-h-screen flex items-center">
      <div className="content-wrapper">
        {/* Heading */}
        <h1 className="section-heading text-center" style={{ marginBottom: '24px' }}>
          Ready to <AnimatedText text="transform" /> your business?
        </h1>

        {/* Subheading */}
        <p className="section-subheading text-center">
          Let&apos;s discuss how AI can drive your growth
        </p>

        {/* CTA Button (matches header spec) */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => document.getElementById('contact-modal')?.classList.remove('hidden')}
            className="cta-button"
            style={{
              padding: '10px 24px',
              fontSize: '1rem',
              color: 'white',
              background: 'transparent',
              border: '2px solid white',
              borderRadius: '50px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            Let&apos;s Partner Up
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>

        {/* Footer grid inside Contact (no LinkedIn tile) */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-24 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start footer-text">
            {/* Left: Contact */}
            <div className="text-left">
              <h3 className="font-semibold mb-2">Contact</h3>
              <a href="mailto:info@brandureai.com" className="hover:text-white transition">
                info@brandureai.com
              </a>
            </div>

            {/* Center: Legal */}
            <div className="text-center">
              <div className="flex justify-center gap-4">
                <a href="/terms" className="hover:text-white transition">Terms &amp; Conditions</a>
                <span>|</span>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              </div>
            </div>

            {/* Right: Follow */}
            <div className="text-right">
              <h3 className="font-semibold mb-2">Follow</h3>
              <a
                href="https://www.linkedin.com/company/brandure-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
