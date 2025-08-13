'use client';

import { useState, useEffect } from 'react';

const words = ['Consulting', 'Development', 'Specialist', 'Provider'];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      height: '1.2em', 
      position: 'relative',
      display: 'inline-block',
      fontSize: 'inherit' // Inherit parent font size
    }}>
      {words.map((word, index) => (
        <span
          key={word}
          className="gradient-animated"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease',
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
