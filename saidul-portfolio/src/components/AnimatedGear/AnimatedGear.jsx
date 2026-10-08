import React from 'react';
import styles from './AnimatedGear.module.css';

export default function AnimatedGear({ className = '', reverse = false, teeth = 16 }) {
  const points = Array.from({ length: teeth * 4 }, (_, index) => {
    const toothStep = Math.PI * 2 / teeth;
    const pointInTooth = index % 4;
    const radius = pointInTooth < 2 ? 39 : 48;
    const angle = Math.floor(index / 4) * toothStep + pointInTooth / 4 * toothStep;
    return `${50 + Math.cos(angle) * radius},${50 + Math.sin(angle) * radius}`;
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${styles.gear} ${reverse ? styles.reverse : ''} ${className}`}
      aria-hidden="true"
    >
      <path
        d={`M ${points.join(' L ')} Z M 50 34 A 16 16 0 1 0 50 66 A 16 16 0 1 0 50 34 Z`}
        fillRule="evenodd"
        className={styles.shape}
      />
      <circle cx="50" cy="50" r="25" className={styles.ring} />
      <circle cx="50" cy="50" r="7" className={styles.hub} />
      <path d="M50 25v9 M50 66v9 M25 50h9 M66 50h9" className={styles.spokes} />
    </svg>
  );
}
