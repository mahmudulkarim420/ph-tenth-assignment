import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from './Spinner';

const RouteChangeSpinner = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;
  return <Spinner />;
};

export default RouteChangeSpinner;
