import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import MobileMenu from './components/MobileMenu/MobileMenu.jsx';
import Footer from './components/Footer/Footer.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Contact from './pages/Contact/Contact.jsx';
import styles from './App.module.css';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <MobileMenu isOpen={sidebarOpen} onToggle={toggleSidebar} onClose={closeSidebar} />

      <div className={styles.shell}>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <BackToTop />
    </>
  );
}
