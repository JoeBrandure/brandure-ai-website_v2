import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import RotatingText from '../components/RotatingText';
import HowWeWork from '../components/HowWeWork';
import JourneyTriangle from '../components/JourneyTriangle';
import LogoCarousel from '../components/LogoCarousel';
import ContactDrawer from '../components/ContactDrawer';
import Counter from '../components/Counter';
import LoadingAnimation from '../components/LoadingAnimation';
import SectionTriangleTransition from '../components/SectionTriangleTransition';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Brandure AI — Leading AI Agency & AI Automation Agency in UAE & UK</title>
        <meta name="description" content="Brandure.ai is your trusted AI Agency and AI Automation Agency, empowering small businesses with bespoke AI Solutions in the UAE & UK." />
      </Head>

      <Script
        id="relevance-ai-chat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.defer = true;
              script.src = 'https://app.relevanceai.com/embed/chat-bubble.js';
              script.setAttribute('data-relevanceai-share-id', 'd7b62b/6271ce55f7b2-46d5-9d84-562aba385b32/ba0ee5a0-3f17-4f24-bd77-6616e27e04b5');
              script.setAttribute('data-share-styles', 'starting_message_prompts=Hey%21+Is+there+anything+I+can+help+you+with%3F+&hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=true&bubble_style=icon&primary_color=%2300D9FF&bubble_icon=sparkles&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=true');
              document.body.appendChild(script);
            })();
          `
        }}
      />

      {!showContent && (
        <LoadingAnimation onComplete={() => setShowContent(true)} />
      )}

      {showContent && (
        <>
          {/* Fixed Navigation */}
          <nav className="nav-fixed" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '8px 40px',  // CRITICAL: Reduced from 12px to 8px
            height: '60px',  // Fixed height constraint
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Image
              src="/logos/brandure-ai-white.png"
              alt="Brandure AI"
              width={150}
              height={40}
              priority
              style={{ 
                width: '150px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
            <button
              onClick={() => setIsDrawerOpen(true)}
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
          </nav>

          {/* Main scroll container */}
          <div className="main-container" style={{ paddingTop: '60px' }}>
            
            {/* Hero Section */}
            <section id="hero" className="section-snap">
              <div className="content-wrapper">
                <h1 className="hero-text-large" style={{ marginBottom: '20px' }}>
                  We&apos;re not just your AI
                </h1>
                <div className="hero-text-large" style={{ marginBottom: '20px' }}>
                  <RotatingText />
                </div>
                <h2 className="hero-text-medium">
                  We&apos;re your AI Partner.
                </h2>
              </div>
            </section>

            {/* Pitch Section */}
            <section id="pitch" className="section-snap">
              <div className="content-wrapper">
                <h2 className="section-heading" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
                  We help <span className="gradient-animated">you</span> understand<br />
                  the <span className="gradient-animated">Power of AI</span>
                </h2>
                <p className="section-subheading">
                  Your trusted partner in becoming an AI-powered business
                </p>
              </div>
            </section>

            {/* Journey Section */}
            <section id="journey" className="section-snap" style={{ 
              position: 'relative', 
              overflow: 'visible',
              display: 'flex',
              alignItems: 'flex-start',
              paddingTop: 'calc(18vh)'  // halfway between current and center
            }}>
              <div className="content-wrapper">
                <h2 className="section-heading-medium animate-white-accent" style={{ lineHeight: 1.3, marginBottom: '40px' }}>
                  We spend our days guiding companies<br />
                  through our 3-step <span className="gradient-animated">AI-Transformation</span> process
                </h2>
                
                {/* Large transition triangle at bottom */}
                <JourneyTriangle />
              </div>
            </section>

            {/* Triangle Transition Between Sections */}
            <SectionTriangleTransition />

            {/* How We Work Section */}
            <section id="how-we-work">
              <HowWeWork />
            </section>

            {/* Results Section */}
            <section id="results" className="section-snap">
              <div className="content-wrapper">
                <h2 className="section-heading" style={{ marginBottom: '60px' }}>
                  We don&apos;t sell AI, we sell <span className="gradient-animated">results</span>
                </h2>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  gap: '40px', 
                  flexWrap: 'wrap' 
                }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div className="hero-text-large" style={{ color: 'white' }}>
                      <Counter end={48} />
                    </div>
                    <div style={{ 
                      width: '100%', 
                      height: '2px', 
                      background: '#00D9FF', 
                      margin: '20px 0' 
                    }} />
                    <p className="body-text">Bespoke AI Solutions Delivered</p>
                  </div>
                  
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div className="hero-text-large" style={{ color: 'white' }}>
                      <Counter end={220} />
                    </div>
                    <div style={{ 
                      width: '100%', 
                      height: '2px', 
                      background: '#00D9FF', 
                      margin: '20px 0' 
                    }} />
                    <p className="body-text">AI Opportunities Identified</p>
                  </div>
                  
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div className="hero-text-large" style={{ color: 'white' }}>
                      <Counter end={10000} />
                    </div>
                    <div style={{ 
                      width: '100%', 
                      height: '2px', 
                      background: '#00D9FF', 
                      margin: '20px 0' 
                    }} />
                    <p className="body-text">Hours Saved through AI Automation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Partnership Section */}
            <section id="partnership" className="section-snap">
              <div className="content-wrapper" style={{ 
                paddingTop: '70px',  // Account for fixed nav
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
              }}>
                
                {/* Logo Carousel - Positioned at top */}
                <div style={{ 
                  position: 'absolute',
                  top: '80px',  // Just below header
                  width: '100%'
                }}>
                  <LogoCarousel />
                </div>
                
                {/* Center content */}
                <div style={{ marginTop: '60px' }}>
                  <h2 className="section-heading" style={{ margin: '40px 0' }}>
                    The best AI systems are built<br />
                    <span className="gradient-animated">side-by-side</span>
                  </h2>
                  
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    style={{ 
                      fontSize: '1.5rem', 
                      padding: '20px 60px', 
                      marginTop: '40px',
                      color: 'white',
                      background: 'transparent',
                      border: '2px solid white',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Contact/Footer Section */}
            <section id="contact" className="section-snap">
              <div className="content-wrapper">
                {/* Heading centered */}
                <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '120px' }}>
                  Accelerate your <span className="gradient-animated">AI Adoption</span> Journey
                </h2>

                {/* Footer at bottom */}
                <div style={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                  padding: '16px 40px 12px 40px',  // CRITICAL: Reduced from 24px/20px
                  maxHeight: '120px',  // Constrain footer height
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    flexWrap: 'wrap', 
                    gap: '40px' 
                  }}>
                    
                    {/* Left - Contact */}
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{ 
                        fontSize: '14px', 
                        fontWeight: 600, 
                        marginBottom: '20px', 
                        color: '#C0C0C0',
                        textTransform: 'uppercase'
                      }}>
                        Contact
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a 
                          href="mailto:info@brandureai.com" 
                          className="animate-white-accent"
                          style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                        >
                          info@brandureai.com
                        </a>
                        <a 
                          href="https://wa.me/971585081399" 
                          className="animate-white-accent"
                          style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                        >
                          UAE 🇦🇪 +971 585 081 399
                        </a>
                        <a 
                          href="https://wa.me/447969446013" 
                          className="animate-white-accent"
                          style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                        >
                          UK 🇬🇧 +44 7969 446 013
                        </a>
                      </div>
                    </div>

                    {/* Center - Legal */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ display: 'flex', gap: '30px' }}>
                        <a 
                          href="/brandure-terms.pdf" 
                          target="_blank"
                          style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                        >
                          Terms & Conditions
                        </a>
                        <a 
                          href="/brandure-legal.pdf" 
                          target="_blank"
                          style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>

                    {/* Right - Follow */}
                    <div style={{ textAlign: 'right' }}>
                      <h3 style={{ 
                        fontSize: '14px', 
                        fontWeight: 600, 
                        marginBottom: '20px', 
                        color: '#C0C0C0',
                        textTransform: 'uppercase'
                      }}>
                        Follow Us
                      </h3>
                      <a 
                        href="https://linkedin.com/company/brandureai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Copyright */}
                  <div style={{ 
                    textAlign: 'center', 
                    marginTop: '40px', 
                    color: '#C0C0C0', 
                    fontSize: '12px' 
                  }}>
                    © 2025 Brandure AI. All rights reserved.
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Drawer */}
          <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
      )}
    </>
  );
}
