import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = ({ theme }) => {
  const bgColor =
    theme === 'dark'
      ? 'bg-black text-white'
      : theme === 'light'
      ? 'bg-white text-black'
      : '';

  const textSecondary =
    theme === 'dark' ? 'text-white/80' : theme === 'light' ? 'text-black/80' : 'text-white/80';

  const bottomLineBg =
    theme === 'dark'
      ? 'bg-black/40'
      : theme === 'light'
      ? 'bg-white/40'
      : 'bg-black/40';

  return (
    <footer className={`w-full shadow-md border-t transition-colors duration-300 ${bgColor}`}>
      <div className={` max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10`}>
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-semibold tracking-wide mb-3">BooksHaven</h2>
          <p className={`${textSecondary} leading-relaxed`}>
            Your trusted platform to explore, share and manage your books. Discover new titles every day.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><Link className={`hover:text-yellow-300 duration-200 hover:underline ${bgColor}`}>Home</Link></li>
            <li><Link className={`hover:text-yellow-300 duration-200 hover:underline ${bgColor}`}>Books</Link></li>
            <li><Link className={`hover:text-yellow-300 duration-200 hover:underline ${bgColor}`}>Add Book</Link></li>
            <li><Link className={`hover:text-yellow-300 duration-200 hover:underline ${bgColor}`}>About</Link></li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-6 text-3xl">
            <a href="#" className={`hover:text-yellow-300 duration-200 ${bgColor}`}><FaFacebook /></a>
            <a href="#" className={`hover:text-yellow-300 duration-200 ${bgColor}`}><FaInstagram /></a>
            <a href="#" className={`hover:text-yellow-300 duration-200 ${bgColor}`}><FaGithub /></a>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className={`${bottomLineBg} py-4 text-center text-lg ${bgColor}`}>
        © {new Date().getFullYear()} BooksHaven — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
