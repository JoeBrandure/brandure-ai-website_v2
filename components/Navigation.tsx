import { useEffect, useState } from 'react';
import ContactDrawer from './ContactDrawer';

export default function Navigation(){
  const [scrolled,setScrolled]=useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',onScroll);
    
    // Show logo after a delay to allow loading transition to complete
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1500); // Slightly longer than the 1.2s transition
    
    return()=>{
      window.removeEventListener('scroll',onScroll);
      clearTimeout(timer);
    };
  },[]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?'bg-black/70 backdrop-blur-md py-3':'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Keep our Brandure logo (do not change path/name) */}
        <img
          src="/Logos/brandure-logo-new-white.svg"
          alt="Brandure.ai"
          className={`h-10 md:h-12 lg:h-14 w-auto transition-all duration-500 ${
            showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="inline-flex items-center gap-1 px-5 py-2 border border-white rounded-full text-white bg-transparent hover:bg-white hover:text-black transition"
          style={{ textDecoration: 'none' }}
        >
          Get In Touch →
        </button>
      </div>
      {/* Drawer lives outside button and only opens when state is true */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </nav>
  );
}
