import React from 'react';
import AnimatedGear from '../AnimatedGear/AnimatedGear.jsx';
import styles from './SectionHeading.module.css';

/**
 * Consistent section title used across every page: a display-serif
 * heading with an optional short supporting line underneath. Deliberately
 * plain (no tracked-out eyebrow label) — the pages that need a sequence
 * indicator (the About timeline) build their own numbering instead.
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  gears = true,
  gearVariant = 'standard',
}) {
  const gearVariants = {
    standard: [16, 10],
    fine: [20, 12],
    compact: [12, 8],
    heavy: [14, 10],
  };
  const [primaryTeeth, secondaryTeeth] = gearVariants[gearVariant] || gearVariants.standard;

  return (
    <div
      className={`${styles.wrap} ${align === 'center' ? styles.center : ''} ${
        gears ? `${styles.geared} ${styles[`variant${gearVariant}`] || ''}` : ''
      }`}
    >
      {gears && (
        <span className={styles.gearPair} aria-hidden="true">
          <AnimatedGear className={styles.primaryGear} teeth={primaryTeeth} />
          <AnimatedGear className={styles.secondaryGear} reverse teeth={secondaryTeeth} />
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
