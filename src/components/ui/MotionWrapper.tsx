"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

type MotionWrapperProps = PropsWithChildren<{
  className?: string;
}>;

export function MotionWrapper({ children, className }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      className={className}
      initial="hidden"
      transition={{ duration: 0.45, ease: "easeOut" }}
      variants={{
        hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
