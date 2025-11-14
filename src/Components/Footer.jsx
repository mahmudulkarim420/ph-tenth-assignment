import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D] text-white ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-semibold tracking-wide mb-3">
            BooksHaven
          </h2>
          <p className=" leading-relaxed text-lg">
            Your trusted platform to explore, share and manage your books.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li className="hover:text-yellow-500 duration-200 cursor-pointer">
              Home
            </li>
            <li className="hover:text-yellow-500 duration-200 cursor-pointer">
              All Books
            </li>
            <li className="hover:text-yellow-500 duration-200 cursor-pointer">
              Add Book
            </li>
            <li className="hover:text-yellow-500 duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact / Follow Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className=" text-lg">Email: support@bookshaven.com</p>
          <p className=" text-lg mt-1">Phone: +880 123 456789</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="py-4 text-center text-lg ">
        © {new Date().getFullYear()} BooksHaven — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
