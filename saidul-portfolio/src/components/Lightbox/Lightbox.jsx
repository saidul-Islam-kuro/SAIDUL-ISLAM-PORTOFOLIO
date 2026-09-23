import React, { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import styles from './Lightbox.module.css';

/**
 * Image lightbox gallery viewer.
 * `images` — the full list (for prev/next), `index` — currently open item,
 * `onClose` / `onNavigate(nextIndex)` — controlled from the parent Gallery
 * page so the open/closed state lives in one place.
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const isOpen = index !== null;
  useLockBodyScroll(isOpen);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  // Keyboard support: Escape closes, arrow keys move between images.
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen) return null;
  const current = images[index];

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        role="dialog"
        aria-modal="true"
        aria-label={current.caption}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close gallery">
          &times;
        </button>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
        >
          &#8249;
        </button>

        <motion.figure
          key={current.id}
          className={styles.figure}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={current.src} alt={current.caption} className={styles.image} />
          <figcaption className={styles.caption}>
            <span className={styles.tag}>{current.tag}</span>
            {current.caption}
          </figcaption>
        </motion.figure>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
