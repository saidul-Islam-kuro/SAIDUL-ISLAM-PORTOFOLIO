import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/nav';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import styles from './Sidebar.module.css';

/**
 * Off-canvas navigation that stays hidden until the user toggles it.
 * This preserves the immersive layout and lets the content breathe.
 */
export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
      <NavLink to="/" className={styles.brand} data-cursor-hover onClick={onClose}>
        <span className={styles.brandMark}>SI</span>
        <span className={styles.brandName}>
          Saidul Islam
          <small>EEE &middot; JSTU</small>
        </span>
      </NavLink>

      <nav className={styles.nav} aria-label="Primary">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                data-cursor-hover
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footerBlock}>
        <ThemeToggle />
        <SocialLinks />
      </div>
    </aside>
  );
}
