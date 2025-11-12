import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (theme === 'dark') {
      body.style.background = '#000000';
      body.style.color = '#ffffff';
    } else if (theme === 'light') {
      body.style.background = '#ffffff';
      body.style.color = '#000000'; // সব text black হবে
    } else {
      body.style.background = 'linear-gradient(to right, #1A2A6C, #B21F1F, #FDBB2D)';
      body.style.color = '#ffffff'; // default mode সব text white
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  if (loading) return <Spinner />;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300
      ${theme === 'dark' ? 'text-white' : theme === 'light' ? 'text-black' : 'text-white'}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layouts;
