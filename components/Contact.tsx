import React from 'react';
import { AnimatedText } from './AnimatedText';

export default function Contact() {
  return (
    <section 
      id="contact"
      className="section-snap relative min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-24">
        {/* Heading - matching Journey text size */}
        <h1 className="text-center text-[clamp(36px,5.5vw,72px)] font-light">
          Ready to{' '}
          <AnimatedText text="transform" />{' '}
          your business?
        </h1>
        
        {/* Subheading - matching Hero subtitle size */}
        <p className="mt-6 text-[clamp(18px,2.2vw,28px)] text-[#C0C0C0] text-center">
          Let&apos;s discuss how AI can drive your growth
        </p>
        
        {/* CTA Button */}
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
              transition: 'all 0.3s ease'
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
      </div>
      
      {/* Footer – Desktop */}
      <div className="w-full hidden lg:flex h-fit flex-row justify-between tracking-wider text-sm relative gap-8">
        {/* Left: Contact */}
        <div className="flex flex-col w-1/3 gap-2 footer-contact">
          <p className="whitespace-pre-wrap font-bold text-[#D9D9D9] uppercase">Contact</p>
          <a href="mailto:info@brandureai.com" className="w-fit cursor-pointer decoration-0">
            <p className="whitespace-pre-wrap text-white hover:text-white/80 my-2">info@brandureai.com</p>
          </a>
        </div>

        {/* Center: Legal */}
        <div className="w-1/3 flex flex-row items-end justify-center gap-4">
          <p className="whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:opacity-70">
            <a href="/terms">Terms &amp; Conditions</a>
          </p>
          <p className="whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:opacity-70">
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>

        {/* Right: Follow */}
        <div className="w-1/3 flex flex-col items-end gap-2 footer-follow">
          <p className="whitespace-pre-wrap text-[#D9D9D9] uppercase">Follow</p>
          <a
            href="https://linkedin.com/company/brandure-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit cursor-pointer hover:opacity-80"
          >
            <p className="whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:text-white/70">LinkedIn</p>
          </a>
        </div>
      </div>

      {/* Footer – Mobile */}
      <div className="w-full flex lg:hidden h-fit flex-col justify-between tracking-wider text-sm relative gap-8">
        {/* Left: Contact */}
        <div className="flex flex-col w-full gap-2 footer-contact">
          <p className="whitespace-pre-wrap font-bold text-[#D9D9D9] uppercase">Contact</p>
          <a href="mailto:info@brandureai.com" className="w-fit cursor-pointer decoration-0">
            <p className="whitespace-pre-wrap text-white hover:text-white/80 my-2">info@brandureai.com</p>
          </a>
        </div>

        {/* Right: Follow (stacked) */}
        <div className="w-full flex flex-col items-start gap-2 footer-follow">
          <p className="whitespace-pre-wrap text-[#D9D9D9] uppercase">Follow</p>
          <a
            href="https://linkedin.com/company/brandure-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit cursor-pointer hover:opacity-80"
          >
            <p className="whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:text-white/70">LinkedIn</p>
          </a>
        </div>

        {/* Center: Legal (stacked) */}
        <div className="w-full flex flex-row items-start gap-4">
          <p className="whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:opacity-70">
            <a href="/terms">Terms &amp; Conditions</a>
          </p>
          <p className="whitespace-pre-wrap font-medium text-[#D9D9D9] uppercase hover:opacity-70">
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
}
