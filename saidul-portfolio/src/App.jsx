import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import Home from './pages/Home/Home.jsx';
import styles from './App.module.css';

const About = lazy(() => import('./pages/About/About.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));

/** Resets scroll position whenever the route changes, so navigating from
 * the bottom of a long page to a new page doesn't leave the visitor
 * stranded halfway down. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <NavBar />

      <div className={styles.shell}>
        <main className={styles.main}>
          <Suspense fallback={<div className={styles.routeLoading} role="status">Loading page…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>

      <BackToTop />
    </>
  );
}
