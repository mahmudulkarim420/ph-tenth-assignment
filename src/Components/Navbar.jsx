import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GiBookmark } from 'react-icons/gi';
import { AuthContext } from '../Providers/AuthProvider';
import RouteChangeSpinner from './RouteChangeSpinner';
import { FaSun, FaMoon, FaAdjust } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const [themeOpenDesktop, setThemeOpenDesktop] = useState(false);
  const [themeOpenMobile, setThemeOpenMobile] = useState(false);
  const { user, logOut, loading: authLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [routeLoading, setRouteLoading] = useState(false);

  const themeRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setThemeOpenDesktop(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.style.background = '#000000';
      body.style.color = '#ffffff';
    } else if (theme === 'light') {
      body.style.background = '#ffffff';
      body.style.color = '#000000';
    } else {
      body.style.background =
        'linear-gradient(to right, #1A2A6C, #B21F1F, #FDBB2D)';
      body.style.color = '#ffffff';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (authLoading) return null;

  const handleLogout = async () => {
    setRouteLoading(true);
    try {
      await logOut();
      navigate('/login');
    } catch (err) {
      console.log(err.message);
    } finally {
      setRouteLoading(false);
    }
  };

  const navLinkClass = (path) =>
    `hover:text-yellow-300 duration-200 hover:underline ${
      location.pathname === path
        ? 'text-yellow-400 font-semibold underline'
        : ''
    }`;

  return (
    <>
      {routeLoading && <RouteChangeSpinner />}

      <nav
        className={`w-full shadow-md border-b transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-black text-white'
            : theme === 'light'
            ? 'bg-white text-black'
            : 'bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] text-white'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl">
              <GiBookmark />
            </div>
            <h1 className="text-2xl font-semibold tracking-wide">BooksHaven</h1>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
            <li>
              <Link to="/" className={navLinkClass('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-books" className={navLinkClass('/all-books')}>
                All Books
              </Link>
            </li>
            <li>
              <Link to="/add-book" className={navLinkClass('/add-book')}>
                Add Book
              </Link>
            </li>
            <li>
              <Link to="/my-books" className={navLinkClass('/my-books')}>
                My Books
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4 relative">
            <div ref={themeRef} className="relative">
              <button
                onClick={() => setThemeOpenDesktop(!themeOpenDesktop)}
                className="p-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors duration-200"
                title="Theme"
              >
                <MdLightMode size={20} />
              </button>

              {themeOpenDesktop && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => setTheme('default')}
                    className={`w-full flex items-center gap-2 px-3 py-2 hover:bg-yellow-400 hover:text-white rounded-t-lg ${
                      theme === 'default' ? 'bg-yellow-400 text-white' : ''
                    }`}
                  >
                    <FaAdjust /> Default
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`w-full flex items-center gap-2 px-3 py-2 bg-black text-white ${
                      theme === 'dark' ? 'bg-gray-800 text-white' : ''
                    }`}
                  >
                    <FaMoon /> Dark
                  </button>
                  <button
                    onClick={() => setTheme('light')}
                    className={`w-full flex items-center gap-2 px-3 py-2 bg-white text-black rounded-b-lg ${
                      theme === 'light' ? 'bg-yellow-300 text-black' : ''
                    }`}
                  >
                    <FaSun /> Light
                  </button>
                </div>
              )}
            </div>

            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/profile">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/40'}
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                  />
                </Link>
                <span className="font-medium">
                  {user.displayName || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>

          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black/50 backdrop-blur-sm p-4 shadow-md shadow-black/40 transition-colors duration-300">
            <ul className="flex flex-col gap-4 text-lg">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={navLinkClass('/')}
              >
                Home
              </Link>
              <Link
                to="/all-books"
                onClick={() => setOpen(false)}
                className={navLinkClass('/all-books')}
              >
                All Books
              </Link>
              <Link
                to="/add-book"
                onClick={() => setOpen(false)}
                className={navLinkClass('/add-book')}
              >
                Add Book
              </Link>
              <Link
                to="/my-books"
                onClick={() => setOpen(false)}
                className={navLinkClass('/my-books')}
              >
                My Books
              </Link>
            </ul>

            <div className="flex flex-col gap-3 mt-4">
              <div className="relative">
                <button
                  onClick={() => setThemeOpenMobile(!themeOpenMobile)}
                  className="flex items-center justify-center gap-2 w-25 p-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors duration-200"
                  title="Theme"
                >
                  <MdLightMode size={20} /> Theme
                </button>
                {themeOpenMobile && (
                  <div className="absolute mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => setTheme('default')}
                      className={`w-full flex items-center gap-2 px-3 py-2 hover:bg-yellow-400 hover:text-white rounded-t-lg ${
                        theme === 'default' ? 'bg-yellow-400 text-white' : ''
                      }`}
                    >
                      <FaAdjust /> Default
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`w-full flex items-center gap-2 px-3 py-2 bg-black text-white ${
                        theme === 'dark' ? 'bg-gray-800 text-white' : ''
                      }`}
                    >
                      <FaMoon /> Dark
                    </button>
                    <button
                      onClick={() => setTheme('light')}
                      className={`w-full flex items-center gap-2 px-3 py-2 bg-white text-black rounded-b-lg ${
                        theme === 'light' ? 'bg-yellow-300 text-black' : ''
                      }`}
                    >
                      <FaSun /> Light
                    </button>
                  </div>
                )}
              </div>

              {user ? (
                <div className="flex flex-col gap-2 items-start mt-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Link to="/profile" onClick={() => setOpen(false)}>
                      <img
                        src={user.photoURL || 'https://via.placeholder.com/40'}
                        alt="profile"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    </Link>
                    <span className="font-medium">
                      {user.displayName || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 mt-2">
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
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
