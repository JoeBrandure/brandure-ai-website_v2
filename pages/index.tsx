import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import RotatingWords from '../components/RotatingWords';
import Journey from '../components/Journey';
import LogoCarousel from '../components/LogoCarousel';
import Pitch from '../components/Pitch';

import Counter from '../components/Counter';
import LoadingAnimation from '../components/LoadingAnimation';
import Contact from '../components/Contact';
import { AnimatedText } from '../components/AnimatedText';
import Partnership from '../components/Partnership';
import Hero from '../components/Hero';
import Results from '../components/Results';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Home: Component mounted, showContent:', showContent);
    
    // Fallback: if loading animation doesn't complete within 10 seconds, show content anyway
    const fallbackTimer = setTimeout(() => {
      if (!showContent) {
        console.log('Home: Fallback timer triggered, forcing showContent to true');
        setShowContent(true);
      }
    }, 10000);
    
    return () => clearTimeout(fallbackTimer);
  }, [showContent]);

  useEffect(() => {
    console.log('Home: showContent changed to:', showContent);
  }, [showContent]);

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
          </nav>

                           {/* Main scroll container */}
                 <div className="main-container snap-y snap-mandatory overflow-y-scroll h-screen" style={{ paddingTop: '60px' }}>
            
                               {/* Hero Section */}
                   <Hero />

                               {/* Pitch Section */}
                   <Pitch />

                               {/* Journey Section */}
                   <section className="snap-start">
                     <Journey />
                   </section>

            

                               {/* Results Section */}
                   <Results />

                                                              {/* Partnership Section */}
                   <Partnership />

                               {/* Contact Section */}
                   <section className="snap-start">
                     <Contact />
                   </section>

          </div>


        </>
      )}
    </>
  );
}
