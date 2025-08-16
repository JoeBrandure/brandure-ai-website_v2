import React from 'react';
import AnimatedText from './AnimatedText';

export default function Contact() {
  return (
    <section id="contact" className="section-snap relative min-h-screen flex items-center">
      <div className="content-wrapper pb-24">
        {/* Heading */}
        <h1 className="section-heading animate-text text-center" style={{ marginBottom: '24px' }}>
          Ready to <AnimatedText text="transform" /> your business?
        </h1>

        {/* Subheading */}
        <p className="section-subheading text-center">
          Let&apos;s discuss how AI can drive your growth
        </p>

        {/* CTA Button — perfectly centered under subhead */}
        <div className="mt-6 text-center">
          <button
            onClick={() => document.getElementById('contact-modal')?.classList.remove('hidden')}
            className="cta-button"
          >
            Let&apos;s Partner Up
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="17" y1="7" x2="17" y2="17" />
              <polyline points="7 17 17 17 17 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer — scoped to Contact page (bottom placement already correct) */}
      <div className="footer-wrapper">
        <div className="footer-grid">
          {/* Left: CONTACT */}
          <div className="footer-left">
            <h3 className="footer-title">CONTACT</h3>
            <p className="footer-text">
              <a href="mailto:info@brandureai.com" className="footer-link">info@brandureai.com</a>
            </p>
            <p className="footer-text">
              <a
                href="https://wa.me/971585081399"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                UAE +971 58 508 1399
              </a>
            </p>
            <p className="footer-text">
              <a
                href="https://wa.me/447969446013"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                UK +44 7969 446 013
              </a>
            </p>
          </div>

          {/* Center: Legal (exactly centered on page) */}
          <div className="footer-center">
            <p className="footer-legal">
              <a href="/terms" className="footer-link">Terms &amp; Conditions</a>
              {' '}|{' '}
              <a href="/privacy" className="footer-link">Privacy Policy</a>
            </p>
          </div>

          {/* Right: FOLLOW */}
          <div className="footer-right">
            <h3 className="footer-title">FOLLOW</h3>
            <p className="footer-text">
              <a
                href="https://www.linkedin.com/company/brandure-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
