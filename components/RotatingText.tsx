'use client';

import { useState, useEffect } from 'react';

const words = ['Consultant', 'Agent', 'Developer', 'Partner'];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center h-[1.2em]">
      {words.map((word, index) => (
        <span 
          key={word}
          className="absolute text-[#00D9FF] animate-text-blue"
          style={{
            transform: `translateY(${currentIndex === index ? 0 : 20}px)`,
            opacity: currentIndex === index ? 1 : 0,
            transition: 'all 0.5s ease-in-out',
            fontStyle: 'italic',
            fontSize: 'inherit',
            whiteSpace: 'nowrap'
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
