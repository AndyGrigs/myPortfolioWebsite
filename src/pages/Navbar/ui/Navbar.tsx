// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="max-w-6xl mx-auto px-4 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">My Website</div>
          <ul className="flex items-center space-x-4 lg:space-x-8">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                My work
              </Link>
            </li>
            <li>
              <Link
                to="/certification"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Certification
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
