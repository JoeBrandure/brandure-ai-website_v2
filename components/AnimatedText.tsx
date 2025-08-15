import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  animationType?: 'fade-up' | 'fade-in' | 'scale';
  noItalic?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  animationType = 'fade-up',
  noItalic = false
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.set(chars, {
      opacity: 0,
      y: animationType === 'fade-up' ? 20 : 0,
      scale: animationType === 'scale' ? 0.8 : 1,
    });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: stagger,
      delay: delay,
      ease: "power2.out"
    });
  }, [text, delay, stagger, animationType]);

  const baseClasses = 'accent-blue accent-animated';
  const italicClass = noItalic ? '' : 'italic';
  const finalClasses = `${baseClasses} ${italicClass} ${className}`.trim();

  return (
    <span ref={containerRef} className={finalClasses} style={{ animationDelay: `${delay ?? 0}s` }}>
      {text.split('').map((char, i) => (
        <span key={i} className="char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
