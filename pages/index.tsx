import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import RotatingWords from '../components/RotatingWords';
import Journey from '../components/Journey';
import LogoCarousel from '../components/LogoCarousel';
import ContactDrawer from '../components/ContactDrawer';
import Counter from '../components/Counter';
import LoadingAnimation from '../components/LoadingAnimation';
import Footer from '../components/Footer';
import { AnimatedText } from '../components/AnimatedText';

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
                 <div className="main-container snap-y snap-mandatory overflow-y-scroll h-screen" style={{ paddingTop: '60px' }}>
            
                               {/* Hero Section */}
                   <section id="hero" className="section-snap snap-start">
              <div className="content-wrapper">
                <h1 className="hero-text-large" style={{ marginBottom: '20px' }}>
                  <AnimatedText text="We're not just your AI" className="text-white" />
                </h1>
                <div className="hero-text-large" style={{ marginBottom: '20px' }}>
                  <RotatingWords
                    words={['Consultant', 'Agent', 'Developer']}
                    intervalMs={2200}
                    className="font-semibold"
                    accentClassName="accent-blue accent-animated"
                  />
                </div>
                <h2 className="hero-text-medium text-grey-white">
                  <AnimatedText text="We're your AI Partner." className="text-white" delay={0.5} />
                </h2>
              </div>
            </section>

                               {/* Pitch Section */}
                   <section id="pitch" className="section-snap snap-start">
              <div className="content-wrapper">
                <h2 className="section-heading" style={{ marginBottom: '30px', lineHeight: 1.2 }}>
                  <AnimatedText text="We help " className="text-white" />
                  <AnimatedText text="you" className="accent-blue accent-animated" delay={0.3} />
                  <AnimatedText text=" understand" className="text-white" delay={0.5} />
                  <br />
                  <AnimatedText text="the " className="text-white" delay={0.7} />
                  <AnimatedText text="Power of AI." className="accent-blue accent-animated" delay={0.9} />
                </h2>
                <p className="section-subheading text-grey-white">
                  <AnimatedText text="Your trusted partner in becoming an AI-powered business" className="text-white" delay={1.1} />
                </p>
              </div>
            </section>

                               {/* Journey Section */}
                   <section className="snap-start">
                     <Journey />
                   </section>

            

                               {/* Results Section */}
                   <section id="results" className="section-snap snap-start">
              <div className="content-wrapper">
                <h2 className="section-heading" style={{ marginBottom: '60px' }}>
                  <AnimatedText text="We don't sell AI, we sell " className="text-white" />
                  <AnimatedText text="results" className="accent-blue accent-animated" delay={0.3} />
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
                   <section id="partnership" className="section-snap snap-start">
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
                    <AnimatedText text="The best AI systems are built" className="text-white" />
                    <br />
                    <AnimatedText text="side by side" className="accent-blue accent-animated" delay={0.3} />
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
                   <section className="snap-start">
                     <div className="min-h-screen flex flex-col">
                       <div className="flex-1 flex items-center justify-center">
                         <div className="text-center">
                           <h2 className="section-heading mb-8">
                             <AnimatedText text="Ready to transform your business?" className="text-white" />
                           </h2>
                           <p className="section-subheading text-grey-white mb-8">
                             <AnimatedText text="Let's discuss how AI can drive your growth" className="text-white" delay={0.3} />
                           </p>
                           <button
                             onClick={() => setIsDrawerOpen(true)}
                             style={{ 
                               fontSize: '1.5rem', 
                               padding: '20px 60px', 
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
                             Get Started
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                               <line x1="7" y1="17" x2="17" y2="7" />
                               <polyline points="7 7 17 7 17 17" />
                             </svg>
                           </button>
                         </div>
                       </div>
                       <Footer />
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
