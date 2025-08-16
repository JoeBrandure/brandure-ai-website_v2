import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import ContactDrawer from './ContactDrawer';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-contact-drawer', handler);
    return () => window.removeEventListener('open-contact-drawer', handler);
  }, []);

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
        <div className="mt-14 text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="cta-button"
          >
            Let&apos;s Partner Up
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer — scoped to Contact page */}
      <div className="footer-wrapper">
        <div className="footer-grid">
          {/* Left: CONTACT */}
          <div className="footer-left">
            <h3 className="footer-title mb-2">CONTACT</h3>
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

          {/* Center: Legal (must open same tab) */}
          <div className="footer-center">
            <a href="/terms" className="footer-link">Terms &amp; Conditions</a>
            <span className="footer-text">{' | '}</span>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </div>

          {/* Right: FOLLOW */}
          <div className="footer-right">
            <h3 className="footer-title mb-2">FOLLOW</h3>
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

      <ContactDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
