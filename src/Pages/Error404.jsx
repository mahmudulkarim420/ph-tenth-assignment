import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 relative">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>

      <Link
        to="/"
        className="mt-5 relative inline-block text-sm font-medium text-[#FF6A3D]"
      >
        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          Go Home
        </span>
      </Link>
    </div>
  );
};

export default Error404;
