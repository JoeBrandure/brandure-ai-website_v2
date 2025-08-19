import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Hero from '../components/Hero';
import Pitch from '../components/Pitch';
import Journey from '../components/Journey';
import Results from '../components/Results';
import Partnership from '../components/Partnership';
import Contact from '../components/Contact';
import LoadingAnimation from '../components/LoadingAnimation';
import FloatingGradient from '../components/FloatingGradient';
import ChatWidget from '../components/ChatWidget';
import LogoCarousel from '../components/LogoCarousel';
import { ContactDrawerContext } from './_app';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const { openDrawer } = useContext(ContactDrawerContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fallbackTimer = setTimeout(() => {
      if (!showContent) {
        console.log('Home: Fallback timer triggered, setting showContent to true');
        setShowContent(true);
      }
    }, 5000);
    
    return () => clearTimeout(fallbackTimer);
  }, [showContent]);

  return (
    <>
      {/* Background Elements */}
      <FloatingGradient />

      {!showContent && (
        <LoadingAnimation onComplete={() => {
          console.log('Home: LoadingAnimation onComplete called, setting showContent to true');
          setShowContent(true);
        }} />
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
              onClick={openDrawer}
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
          <div className="main-container snap-y snap-mandatory overflow-y-scroll h-screen" style={{ paddingTop: '60px' }}>
            <Hero />
            <Pitch />
            <section className="snap-start">
              <Journey />
            </section>
            <Results />
            <section className="snap-start">
              <div className="py-16">
                <LogoCarousel />
              </div>
            </section>
            <Partnership />
            <section className="snap-start">
              <Contact />
            </section>
          </div>
        </>
      )}

      {/* Chat Widget - Always visible */}
      <ChatWidget />
    </>
  );
}
