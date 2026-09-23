import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import styles from './ParallaxLayer.module.css';

/**
 * Wraps a decorative element (a soft blob, a shape, a photo) and moves it
 * vertically at a fraction of scroll speed, creating depth. `speed` is a
 * multiplier: 0.2 drifts slowly (feels "far away"), 0.6 moves faster
 * (feels "close"). Disabled entirely under prefers-reduced-motion.
 */
export default function ParallaxLayer({ children, speed = 0.3, className = '' }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = prefersReducedMotion ? [0, 0] : [-120 * speed, 120 * speed];
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`}>
      <motion.div style={{ y }} className={styles.inner}>
        {children}
      </motion.div>
    </div>
  );
}
