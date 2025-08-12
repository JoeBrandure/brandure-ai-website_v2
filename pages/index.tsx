import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import RotatingText from '../components/RotatingText';
import JourneySection from '../components/JourneySection';
import LogoCarousel from '../components/LogoCarousel';
import ContactDrawer from '../components/ContactDrawer';

// Dynamic import for WebGL to avoid SSR issues
const WebGLBackground = dynamic(() => import('../components/WebGLBackground'), {
  ssr: false,
});

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure page starts at top
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Brandure AI — Leading AI Agency & AI Automation Agency in UAE & UK</title>
        <meta name="description" content="Brandure.ai is your trusted AI Agency and AI Automation Agency, empowering small businesses with bespoke AI Solutions in the UAE & UK." />
      </Head>

      {mounted && <WebGLBackground />}

      {/* Fixed Navigation */}
      <nav className="nav-fixed">
        <Image
          src="/logos/brandure-ai-white-2.png"
          alt="Brandure AI"
          width={150}
          height={40}
          priority
        />
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="cta-button"
          style={{ padding: '10px 24px', fontSize: '1rem' }}
        >
          Let&apos;s Partner Up
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>
      </nav>

      {/* Main scroll container */}
      <div className="main-container">
        
        {/* Hero Section */}
        <section id="hero" className="section-snap">
          <div className="content-wrapper">
            <h1 className="hero-text-large">
              We&apos;re not just your AI
            </h1>
            <div style={{ margin: '20px 0' }}>
              <RotatingText />
            </div>
            <h2 className="hero-text-medium">
              We&apos;re your AI Partner
            </h2>
          </div>
        </section>

        {/* Pitch Section */}
        <section id="pitch" className="section-snap">
          <div className="content-wrapper">
            <h2 className="section-heading">
              From Insight to Execution to Scaling
            </h2>
            <h2 className="section-heading" style={{ margin: '20px 0' }}>
              We help <span className="gradient-animated">you</span> understand the{' '}
              <span className="gradient-animated">Power of AI</span>
            </h2>
            <p className="hero-text-medium">
              Your trusted partner in becoming an AI-powered business
            </p>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="section-snap">
          <JourneySection />
        </section>

        {/* Results Section */}
        <section id="results" className="section-snap">
          <div className="content-wrapper">
            <h2 className="section-heading" style={{ marginBottom: '60px' }}>
              We don&apos;t sell AI, we sell <span className="gradient-animated">results</span>
            </h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div className="hero-text-large" style={{ color: 'white' }}>
                  48+
                </div>
                <div className="results-underline" />
                <p className="body-text">Bespoke AI Solutions Delivered</p>
              </div>
              
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div className="hero-text-large" style={{ color: 'white' }}>
                  220+
                </div>
                <div className="results-underline" />
                <p className="body-text">AI Opportunities Identified</p>
              </div>
              
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div className="hero-text-large" style={{ color: 'white' }}>
                  10,000+
                </div>
                <div className="results-underline" />
                <p className="body-text">Hours Saved through AI Automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section id="partnership" className="section-snap">
          <div className="content-wrapper">
            <LogoCarousel />
            
            <h2 className="section-heading" style={{ margin: '40px 0' }}>
              The best AI systems are built <span className="gradient-animated">side-by-side</span>
            </h2>
            
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="cta-button"
              style={{ fontSize: '1.5rem', padding: '20px 60px', marginTop: '40px' }}
            >
              Let&apos;s Partner Up
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </section>

        {/* Contact/Footer Section */}
        <section id="contact" className="section-snap">
          <div className="content-wrapper">
            {/* Top section with heading and logo */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '80px' }}>
              <h2 className="section-heading" style={{ textAlign: 'left', flex: 1 }}>
                Accelerate your <span className="gradient-animated">AI Adoption</span> Journey
              </h2>
              <Image
                src="/logos/brandure-ai-white-2.png"
                alt="Brandure AI"
                width={150}
                height={40}
              />
            </div>

            {/* Footer section */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '40px', marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
                
                {/* Left side - Contact */}
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '20px', color: '#C0C0C0' }}>CONTACT</h3>
                  <p style={{ color: 'white', marginBottom: '10px' }}>info@brandureai.com</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a href="https://wa.me/971585081399" style={{ color: 'white', textDecoration: 'none' }}>
                      UAE 🇦🇪 +971 585 081 399
                    </a>
                    <a href="https://wa.me/447969446013" style={{ color: 'white', textDecoration: 'none' }}>
                      UK 🇬🇧 +44 7969 446 013
                    </a>
                  </div>
                </div>

                {/* Center - Legal */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', gap: '30px' }}>
                    <a href="/terms-and-conditions" style={{ color: 'white', textDecoration: 'none' }}>
                      Terms & Conditions
                    </a>
                    <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>
                      Privacy Policy
                    </a>
                  </div>
                </div>

                {/* Right side - Follow */}
                <div style={{ textAlign: 'right' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '20px', color: '#C0C0C0' }}>FOLLOW US</h3>
                  <a 
                    href="https://linkedin.com/company/brandureai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px', color: '#C0C0C0', fontSize: '14px' }}>
                © 2025 Brandure AI. All rights reserved.
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Relevance AI Chat Widget - Keep exactly as is */}
      <script
        defer
        data-relevanceai-share-id="d7b62b/6271ce55f7b2-46d5-9d84-562aba385b32/ba0ee5a0-3f17-4f24-bd77-6616e27e04b5"
        src="https://app.relevanceai.com/embed/chat-bubble.js"
        data-share-styles="starting_message_prompts=Hey%21+Is+there+anything+I+can+help+you+with%3F+&hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=true&bubble_style=icon&primary_color=%2300D9FF&bubble_icon=sparkles&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=true"
      />
    </>
  );
}
