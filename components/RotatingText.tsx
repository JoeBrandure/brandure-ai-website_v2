import React, { useState, useEffect } from 'react';

const RotatingText: React.FC = () => {
  const words = ['Consultant', 'Agent', 'Developer', 'Partner'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block h-[1.2em] w-[280px]">
      {words.map((word, index) => (
        <span
          key={word}
          className={`absolute left-0 top-0 animate-text-blue transition-all duration-500 ${
            currentIndex === index 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            color: '#00D9FF',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default RotatingText;
