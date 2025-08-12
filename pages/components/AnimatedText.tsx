'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

export function AnimatedText({ children, className = '', delay = 0, gradient = false }: AnimatedTextProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const words = children.split(' ');
  
  return (
    <span ref={ref} className={`word-reveal ${inView ? 'animated' : ''} ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={gradient ? 'gradient-text-animated' : ''}
          style={{ transitionDelay: `${delay + index * 0.05}s` }}
        >
          {word}{' '}
        </span>
      ))}
    </span>
  );
}

export function RotatingTextAnimation({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="relative h-[1.2em] overflow-hidden">
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <span className="gradient-text-animated text-inherit italic">
          {texts[currentIndex]}
        </span>
      </div>
    </div>
  );
}
