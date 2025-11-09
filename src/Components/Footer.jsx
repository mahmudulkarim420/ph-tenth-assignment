import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] text-white ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-semibold tracking-wide mb-3">
            BooksHaven
          </h2>
          <p className="text-white/80 leading-relaxed">
            Your trusted platform to explore, share and manage your books.
            Discover new titles every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <Link className="hover:text-yellow-300 duration-200 hover:underline">Home</Link>
            </li>
            <li>
              <Link className="hover:text-yellow-300 duration-200 hover:underline">Books</Link>
            </li>
            <li>
              <Link className="hover:text-yellow-300 duration-200 hover:underline">Add Book</Link>
            </li>
            <li>
              <Link className="hover:text-yellow-300 duration-200 hover:underline">About</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-6 text-3xl">
            <a href="#" className="hover:text-yellow-300 duration-200">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-300 duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300 duration-200">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full bg-black/40 py-4 text-center text-white/90 text-lg">
        © {new Date().getFullYear()} BooksHaven — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
