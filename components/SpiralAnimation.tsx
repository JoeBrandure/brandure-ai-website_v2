'use client';

import { motion } from "framer-motion";
import { forwardRef } from "react";

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'sm': return { width: '64px', height: '64px' };
    case 'lg': return { width: '128px', height: '128px' };
    case 'xl': return { width: '192px', height: '192px' };
    default: return { width: '96px', height: '96px' };
  }
};

const SpiralAnimation = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { size?: string }
>(({ className, size = 'default', ...props }, ref) => {
  const sizeStyles = getSizeStyles(size);
  
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sizeStyles,
        ...props.style
      }}
      className={className}
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-white/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-white/20"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-white/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-white/20"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border border-white/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
});

SpiralAnimation.displayName = "SpiralAnimation";

export { SpiralAnimation };
