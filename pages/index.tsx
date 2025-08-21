import React, { useEffect, useState } from 'react';
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
import Navigation from '../components/Navigation';
import ContactDrawer from '../components/ContactDrawer';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Removed fallback timer - user must manually click to enter
  }, [showContent]);

  const handleOpenDrawer = () => {
    console.log('Home: Opening drawer, current state:', isDrawerOpen);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    console.log('Home: Closing drawer, current state:', isDrawerOpen);
    setIsDrawerOpen(false);
  };

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
          <Navigation onOpenDrawer={handleOpenDrawer} />

          {/* Main scroll container */}
          <div className="main-container snap-y snap-mandatory overflow-y-scroll h-screen" style={{ paddingTop: '60px' }}>
            <Hero />
            <Pitch />
            <section className="snap-start">
              <Journey />
            </section>
            <Results />
            <Partnership />
            <section className="snap-start">
              <Contact onOpenDrawer={handleOpenDrawer} />
            </section>
          </div>
        </>
      )}

      {/* Chat Widget - Always visible */}
      <ChatWidget />

      {/* Contact Drawer - Always rendered at root level for overlay functionality */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
    </>
  );
}
