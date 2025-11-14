import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;
