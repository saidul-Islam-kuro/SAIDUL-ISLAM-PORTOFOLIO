import { useEffect, useState } from 'react';

/**
 * Returns true once the page has been scrolled past `threshold` pixels.
 * Used to reveal the "back to top" button and to give the sidebar/topbar
 * a subtle elevated state once content starts moving under it.
 * The scroll listener is passive and reads/writes are batched with
 * requestAnimationFrame to avoid layout thrashing.
 */
export default function useScrolled(threshold = 320) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
