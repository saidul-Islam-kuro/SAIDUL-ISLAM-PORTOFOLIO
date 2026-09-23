import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered fade-in wrapper. Uses Framer Motion's `whileInView`
 * so each section animates once as it enters the viewport, without a
 * manual IntersectionObserver. `useReducedMotion` disables the motion
 * (but keeps the reveal) for visitors who've asked the OS for less of it.
 *
 * `as` lets callers render a semantic tag (section/article/li) instead of
 * a generic div; `delay` staggers groups of siblings.
 */
export default function FadeInSection({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  className,
  once = true,
  amount = 0.2,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
