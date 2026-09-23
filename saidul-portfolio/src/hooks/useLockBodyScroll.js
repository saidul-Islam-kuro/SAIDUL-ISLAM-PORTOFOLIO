import { useEffect } from 'react';

/**
 * Locks page scroll while `locked` is true — used by the Lightbox and the
 * mobile navigation drawer so the background doesn't scroll behind them.
 */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    document.body.classList.add('scroll-locked');
    return () => document.body.classList.remove('scroll-locked');
  }, [locked]);
}
