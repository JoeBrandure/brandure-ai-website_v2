import { useEffect, useState } from 'react';

export default function Navigation(){
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',onScroll);
    return()=>window.removeEventListener('scroll',onScroll);
  },[]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?'bg-black/70 backdrop-blur-md py-3':'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Keep our Brandure logo (do not change path/name) */}
        <img
          src="/logos/brandure AI white 2.png"
          alt="Brandure.ai"
          className="h-10 md:h-12 lg:h-14 w-auto"
        />
        <button
          onClick={(e) => {
            // keep default anchor behaviour if present; just also open the drawer
            window.dispatchEvent(new CustomEvent('open-contact-drawer'));
          }}
          className="inline-flex items-center gap-1 px-5 py-2 border border-white rounded-full text-white bg-transparent hover:bg-white hover:text-black transition"
        >
          Get In Touch →
        </button>
      </div>
    </nav>
  );
}
