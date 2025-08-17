import React, { useContext } from 'react';
import AnimatedText from './AnimatedText';
import ContactDrawer from './ContactDrawer';
import { ContactDrawerContext } from '../pages/_app';

export default function Contact() {
  const { isOpen, openDrawer, closeDrawer } = useContext(ContactDrawerContext);

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
        <div className="mt-20 text-center">
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

      {/* Footer — simplified single grid layout */}
      <div className="absolute bottom-0 left-0 right-0 w-full px-6 md:px-12 py-8">
        <div className="grid grid-cols-3 items-center">
          <div className="text-left">
            <p className="text-sm text-gray-400 mb-2">CONTACT</p>
            <a href="mailto:info@brandureai.com" className="text-white hover:text-[#00D9FF] block">
              info@brandureai.com
            </a>
            <a href="https://wa.me/971585081399" rel="noopener noreferrer" className="text-white hover:text-[#00D9FF] block">
              UAE +971 58 508 1399
            </a>
            <a href="https://wa.me/447969446013" rel="noopener noreferrer" className="text-white hover:text-[#00D9FF] block">
              UK +44 7969 446 013
            </a>
          </div>
          
          <div className="text-center">
            <a href="/terms" className="text-gray-400 hover:text-white">Terms &amp; Conditions</a>
            <span className="mx-2 text-gray-600">|</span>
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-400 mb-2">FOLLOW</p>
            <a
              href="https://www.linkedin.com/company/brandure-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00D9FF]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <ContactDrawer isOpen={isOpen} onClose={closeDrawer} />
    </section>
  );
}
