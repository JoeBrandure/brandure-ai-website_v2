'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CounterAnimation({ end, suffix = '+', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const countRef = useRef(0);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const currentCount = Math.floor(end * easeOutCubic(progress));
        
        setCount(currentCount);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animate();

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="counter-animate">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
