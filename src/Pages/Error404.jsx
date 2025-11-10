import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-8xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="mb-6 text-center max-w-md">
        Oops! Looks like the page you are looking for doesn’t exist. Maybe it
        was moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white shadow-md hover:shadow-xl transition-all duration-300"
      >
        Go Back Home
      </Link>

      {/* Optional illustration */}
      <img
        src="https://i.ibb.co/6WtR6Wz/404-illustration.png"
        alt="404 illustration"
        className="mt-10 w-80 max-w-full"
      />
    </div>
  );
};

export default Error404;
