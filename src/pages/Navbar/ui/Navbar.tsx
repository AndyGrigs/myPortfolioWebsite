// Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavMenu from './MobileNavMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "My work" },
    { to: "/certification", label: "Certification" },
    { to: "/contacts", label: "Contacts" },
  ];


  return (
    <header className="bg-gray-800 text-white sticky top-0">
      <nav className="mx-auto px-4 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">My Website</div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Conditionally render the navigation links */}
          {isMenuOpen && <MobileNavMenu navLinks={navLinks} onClose={() => setIsMenuOpen(false)} />}

          {/* Render the navigation links for larger screens */}
          {!isMenuOpen && (
            <ul className="flex items-center space-x-4 lg:space-x-8 hidden lg:flex">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;