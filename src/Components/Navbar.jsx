import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiBookmark } from 'react-icons/gi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-3xl">
            <GiBookmark />
          </div>

          <h1 className="text-2xl font-semibold tracking-wide">BooksHaven</h1>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 duration-200 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className="hover:text-yellow-300 duration-200 hover:underline"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="hover:text-yellow-300 duration-200 hover:underline"
            >
              Add Book
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 duration-200 hover:underline"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black duration-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-black bg-opacity-30 hover:bg-black hover:bg-opacity-60 duration-200"
          >
            Register
          </Link>
        </div>

        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1A1A1A]/50 backdrop-blur-sm p-4">
          <ul className="flex flex-col gap-4 text-lg">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/books" onClick={() => setOpen(false)}>
              Books
            </Link>
            <Link to="/add-book" onClick={() => setOpen(false)}>
              Add Book
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black duration-200"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-black bg-opacity-40 text-white hover:bg-black hover:bg-opacity-60 duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
