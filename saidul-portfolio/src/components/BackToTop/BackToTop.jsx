import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useScrolled from '../../hooks/useScrolled';
import styles from './BackToTop.module.css';

/**
 * Floating "back to top" button. Fades/scales in once the visitor has
 * scrolled a meaningful distance, and smooth-scrolls back to the hero
 * on click.
 */
export default function BackToTop() {
  const visible = useScrolled(480);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className={styles.button}
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V6" />
            <path d="M6 11l6-6 6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
