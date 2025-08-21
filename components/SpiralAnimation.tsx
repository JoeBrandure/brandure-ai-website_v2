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
      {/* Test static div to verify positioning */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid red',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
        }}
      />
      
      {/* Large outer circle - slow rotation */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-20px',
          left: '-20px',
          right: '-20px',
          bottom: '-20px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Medium circle - medium rotation */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          right: '-10px',
          bottom: '-10px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.6)',
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Small circle - fast rotation */}
      <motion.div
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
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
      
      {/* Inner circle - very fast rotation */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '10px',
          bottom: '10px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
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
      
      {/* Center circle - fastest rotation */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.2)',
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
