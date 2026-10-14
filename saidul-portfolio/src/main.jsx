import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { domAnimation, LazyMotion } from 'framer-motion';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';

// Root render. BrowserRouter enables the multi-page navigation
// (Home / About / Projects / Gallery / Contact) and ThemeProvider makes
// the dark/light mode toggle available to every component in the tree.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LazyMotion features={domAnimation} strict>
          <App />
        </LazyMotion>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
