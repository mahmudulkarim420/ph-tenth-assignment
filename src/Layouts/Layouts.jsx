import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layouts = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');
  const location = useLocation();

  // Spinner Loading Effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Theme Control
  useEffect(() => {
    const body = document.body;

    if (theme === 'dark') {
      body.style.background = '#000000';
      body.style.color = '#ffffff';
    } else if (theme === 'light') {
      body.style.background = '#ffffff';
      body.style.color = '#000000';
    } else {
      body.style.background = 'linear-gradient(120deg, #1A2A6C, #B21F1F, #FDBB2D)';
      body.style.backgroundSize = '400% 400%';
      body.style.animation = 'gradientMove 15s ease infinite';
      body.style.color = '#ffffff';
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  if (loading) return <Spinner />;

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 overflow-hidden
      ${theme === 'dark' ? 'text-white' : theme === 'light' ? 'text-black' : 'text-white'}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Page Transition Animation */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer theme={theme} />
    </div>
  );
};

export default Layouts;
