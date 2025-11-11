import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Loading from '../Components/Spinner'; // আগের loading component
import Spinner from '../Components/Spinner';
import RouteChangeSpinner from '../Components/RouteChangeSpinner';

const Layouts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />; // Full screen loading
  }

  return (
    <div className="min-h-screen flex flex-col">
      <RouteChangeSpinner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;
