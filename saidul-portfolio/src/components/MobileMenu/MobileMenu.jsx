import React from 'react';
import styles from './MobileMenu.module.css';

/**
 * Floating top-right toggle that reveals the original sidebar panel.
 * The sidebar stays off-screen until the user opens it, then it slides away again
 * when a section is selected.
 */
export default function MobileMenu({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <span className={styles.closeIcon}>×</span>
      ) : (
        <>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </>
      )}
    </button>
  );
}
