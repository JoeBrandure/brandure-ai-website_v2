// components/RotatingWords.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  words: string[];          // pass existing hero words in current order
  intervalMs?: number;      // default 2200
  className?: string;       // inherit hero font sizing/weight
  accentClassName?: string; // class that colors #00D9FF (do not change color)
};

export default function RotatingWords({
  words,
  intervalMs = 2200,
  className = "",
  accentClassName = ""
}: Props) {
  const safe = useMemo(() => (Array.isArray(words) && words.length ? words : ["AI"]), [words]);
  const [i, setI] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setI((p) => (p + 1) % safe.length), intervalMs);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [intervalMs, safe.length]);

  return (
    <div
      className={`relative inline-block align-baseline ${className}`}
      style={{ lineHeight: "1", height: "1em" }}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={safe[i]}
          initial={{ opacity: 0, y: "20%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-20%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={accentClassName}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {safe[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
