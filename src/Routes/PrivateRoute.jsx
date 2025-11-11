// PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // Optional: loading spinner
    return <div className="text-center mt-10 text-white">Loading...</div>;
  }

  if (!user) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // If logged in, show the requested page
  return children;
};

export default PrivateRoute;

