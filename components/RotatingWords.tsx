import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';

interface RotatingWordsProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

const RotatingWords: React.FC<RotatingWordsProps> = ({
  words,
  intervalMs = 2200,
  className = '',
}) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % words.length), intervalMs);
    return () => clearInterval(id);
  }, [words, intervalMs]);

  const current = words?.[idx] ?? '';

  return (
    <span className={className}>
      <AnimatedText text={current} />
    </span>
  );
};

export default RotatingWords;
