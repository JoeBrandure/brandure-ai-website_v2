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
  
  return (
    <div
      ref={ref}
      className={cn(spiralVariants({ size }), className)}
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white/40"
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
        className="absolute inset-0 rounded-full border-2 border-white/40"
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
        className="absolute inset-0 rounded-full border-2 border-white/40"
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
        className="absolute inset-0 rounded-full border-2 border-white/40"
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
        className="absolute inset-0 rounded-full border-2 border-white/40"
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
