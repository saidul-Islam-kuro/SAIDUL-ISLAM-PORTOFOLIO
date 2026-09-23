import React from 'react';
import styles from './SectionHeading.module.css';

/**
 * Consistent section title used across every page: a display-serif
 * heading with an optional short supporting line underneath. Deliberately
 * plain (no tracked-out eyebrow label) — the pages that need a sequence
 * indicator (the About timeline) build their own numbering instead.
 */
export default function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={`${styles.wrap} ${align === 'center' ? styles.center : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
