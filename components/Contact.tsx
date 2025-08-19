import React, { useContext } from 'react';
import AnimatedText from './AnimatedText';
import ContactDrawer from './ContactDrawer';
import { ContactDrawerContext } from '../pages/_app';

export default function Contact() {
  const { isOpen, openDrawer, closeDrawer } = useContext(ContactDrawerContext);

  return (
    <section id="contact" className="section-snap relative min-h-screen flex items-center">
      <div className="content-wrapper pb-24" style={{ border: '3px solid purple', background: 'rgba(128, 0, 128, 0.1)' }}>
        {/* Heading */}
        <h1 className="section-heading animate-text text-center" style={{ marginBottom: '24px', border: '3px solid green', background: 'rgba(0, 255, 0, 0.2)' }}>
          Ready to <AnimatedText text="transform" /> your business?
        </h1>

        {/* Subheading */}
        <h2 className="section-subheading text-center" style={{ border: '3px solid yellow', background: 'rgba(255, 255, 0, 0.2)' }}>
          Let&apos;s discuss how AI can drive your growth
        </h2>

        {/* CTA Button — perfectly centered under subhead */}
        <div className="text-center" style={{ border: '3px solid orange', background: 'rgba(255, 165, 0, 0.2)', marginTop: '20px' }}>
          <button
            onClick={openDrawer}
            className="cta-button"
          >
            Let&apos;s Partner Up
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer — single-grid, three direct children */}
      <div className="footer-wrapper">
        {/* Left: CONTACT */}
        <div className="footer-left">
          <h3 className="footer-title mb-2">CONTACT</h3>
          <p className="footer-text">
            <a href="mailto:info@brandureai.com" className="footer-link">info@brandureai.com</a>
          </p>
          <p className="footer-text">
            <a href="https://wa.me/971585081399" rel="noopener noreferrer" className="footer-link">UAE +971 58 508 1399</a>
          </p>
          <p className="footer-text">
            <a href="https://wa.me/447969446013" rel="noopener noreferrer" className="footer-link">UK +44 7969 446 013</a>
          </p>
        </div>

        {/* Center: Legal (same tab) */}
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

      <ContactDrawer isOpen={isOpen} onClose={closeDrawer} />
    </section>
  );
}
