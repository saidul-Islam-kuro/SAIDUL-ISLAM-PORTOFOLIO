import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/nav';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import styles from './NavBar.module.css';

export default function NavBar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navClassName = [
    styles.header,
    !isScrolled && !isOpen ? styles.topState : '',
    isScrolled || isOpen ? styles.elevated : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={navClassName}>
      <div className={styles.bar}>
        <NavLink to="/" className={styles.brand} aria-label="Saidul Islam — Home">
          <svg className={styles.brandMark} viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <linearGradient id="brand-mark-gradient" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--accent)" />
                <stop offset="1" stopColor="var(--accent-strong)" />
              </linearGradient>
            </defs>
            <path
              d="M20 2.5 36.5 12v16L20 37.5 3.5 28V12L20 2.5Z"
              fill="url(#brand-mark-gradient)"
            />
            <text
              className={styles.brandMarkInitials}
              x="20"
              y="26"
              textAnchor="middle"
            >
              SI
            </text>
          </svg>
          <span className={styles.brandName}>Saidul Islam</span>
        </NavLink>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={isOpen ? styles.closeIcon : styles.menuIcon} aria-hidden="true">
            {isOpen ? '×' : '☰'}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ''}`}
          aria-label="Primary"
        >
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className={styles.mobileTheme}>
              <ThemeToggle />
              <span>Appearance</span>
            </li>
          </ul>
        </nav>

        <div className={styles.desktopTheme}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
