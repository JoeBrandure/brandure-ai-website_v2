'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'pitch', label: 'Vision' },
  { id: 'journey', label: 'Journey' },
  { id: 'how-we-work', label: 'Process' },
  { id: 'results', label: 'Results' },
  { id: 'partnership', label: 'Partner' },
  { id: 'contact', label: 'Contact' },
];

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="side-nav hidden lg:flex">
      {sections.map((section) => (
        <button
          key={section.id}
          className={activeSection === section.id ? 'active' : ''}
          onClick={() => scrollToSection(section.id)}
          aria-label={`Navigate to ${section.label}`}
        >
          <span className="section-label">{section.label}</span>
        </button>
      ))}
    </nav>
  );
}
