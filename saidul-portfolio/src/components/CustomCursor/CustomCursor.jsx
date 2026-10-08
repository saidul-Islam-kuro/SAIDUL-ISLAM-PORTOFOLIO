import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

/**
 * Custom cursor: a small dot that tracks the pointer exactly, plus a
 * larger ring that trails it with easing. Both are moved via direct
 * ref.style.transform writes inside a requestAnimationFrame loop —
 * never via React state — so tracking never triggers a re-render or
 * forces layout, keeping the main thread free.
 *
 * Automatically disables itself on touch/coarse-pointer devices, where a
 * custom cursor has no meaning.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const raf = useRef(null);

  // Current pointer position (target) and the ring's eased position.
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return undefined;

    document.body.classList.add('custom-cursor-active');

    const tick = () => {
      raf.current = null;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      ring.current.x += (pos.current.x - ring.current.x) * 0.24;
      ring.current.y += (pos.current.y - ring.current.y) * 0.24;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      if (Math.abs(pos.current.x - ring.current.x) > 0.5 || Math.abs(pos.current.y - ring.current.y) > 0.5) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    const handleMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!raf.current) raf.current = requestAnimationFrame(tick);
    };

    const handleDown = () => ringRef.current?.classList.add(styles.ringActive);
    const handleUp = () => ringRef.current?.classList.remove(styles.ringActive);

    // Event delegation: any interactive element gets a "hover" state on
    // the cursor without attaching a listener to every single link/button.
    const handleOver = (e) => {
      if (e.target instanceof Element && e.target.closest('a, button, [data-cursor-hover]')) {
        ringRef.current?.classList.add(styles.ringHover);
      }
    };
    const handleOut = (e) => {
      if (
        e.target instanceof Element &&
        e.target.closest('a, button, [data-cursor-hover]') &&
        !(e.relatedTarget instanceof Element && e.relatedTarget.closest('a, button, [data-cursor-hover]'))
      ) {
        ringRef.current?.classList.remove(styles.ringHover);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Rendered unconditionally; CSS + the pointer-fine check above decide
  // whether it's ever visible, avoiding a hydration/first-paint mismatch.
  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
