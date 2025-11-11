import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GiBookmark } from 'react-icons/gi';
import { AuthContext } from '../Providers/AuthProvider';
import RouteChangeSpinner from './RouteChangeSpinner';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut, loading: authLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [routeLoading, setRouteLoading] = useState(false);

  // Firebase user load না হওয়া পর্যন্ত Navbar দেখাবে না
  if (authLoading) return null;

  // Logout হ্যান্ডলার
  const handleLogout = async () => {
    setRouteLoading(true); // spinner show during logout
    try {
      await logOut();
      navigate('/login');
    } catch (err) {
      console.log(err.message);
    } finally {
      setRouteLoading(false);
    }
  };

  // Active route style
  const navLinkClass = (path) =>
    `hover:text-yellow-300 duration-200 hover:underline ${
      location.pathname === path
        ? 'text-yellow-400 font-semibold underline'
        : ''
    }`;

  // Spinner on route change

  return (
    <>
      {/* Spinner overlay */}
      {routeLoading && <RouteChangeSpinner />}

      <nav className="w-full bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] text-white shadow-3xl border-b border-black/60">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-3xl">
              <GiBookmark />
            </div>
            <h1 className="text-2xl font-semibold tracking-wide">BooksHaven</h1>
          </Link>

          {/* Desktop Menu */}
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

          {/* Desktop Auth/Profile */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-black/50 backdrop-blur-sm p-4 shadow-md shadow-black/40">
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
              {user ? (
                <div className="flex flex-col gap-2 items-start bg-black/20 px-3 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.photoURL || 'https://via.placeholder.com/40'}
                      alt="profile"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
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
                <>
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
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
