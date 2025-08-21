'use client';

import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const spiralVariants = cva(
  "relative flex items-center justify-center",
  {
    variants: {
      size: {
        default: "h-24 w-24",
        sm: "h-16 w-16",
        lg: "h-32 w-32",
        xl: "h-48 w-48",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const SpiralAnimation = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof spiralVariants>
>(({ className, size, ...props }, ref) => {
  console.log('SpiralAnimation rendering with size:', size);
  console.log('Framer Motion available:', typeof motion !== 'undefined');
  
  // Get size styles
  const getSizeStyles = () => {
    switch (size) {
      case 'sm': return { width: '64px', height: '64px' };
      case 'lg': return { width: '128px', height: '128px' };
      case 'xl': return { width: '192px', height: '192px' };
      default: return { width: '96px', height: '96px' };
    }
  };
  
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...getSizeStyles(),
        ...props.style
      }}
      className={className}
      {...props}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.4)',
        }}
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
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.4)',
        }}
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
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.4)',
        }}
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
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.4)',
        }}
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
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.4)',
        }}
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

export { SpiralAnimation, spiralVariants };
