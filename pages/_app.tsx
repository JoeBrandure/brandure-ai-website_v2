import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createContext, useContext, useState } from 'react';
import FloatingGradient from '../components/FloatingGradient';

export const ContactDrawerContext = createContext({
  isOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  
  const contactDrawerValue = {
    isOpen: isContactDrawerOpen,
    openDrawer: () => setIsContactDrawerOpen(true),
    closeDrawer: () => setIsContactDrawerOpen(false),
  };

  return (
    <ContactDrawerContext.Provider value={contactDrawerValue}>
      <FloatingGradient />
      <Component {...pageProps} />
    </ContactDrawerContext.Provider>
  );
}
