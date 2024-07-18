// MobileNavMenu.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavLink {
  to: string;
  label: string;
}

interface MobileNavMenuProps {
  navLinks: NavLink[];
  onClose: () => void;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ navLinks, onClose }) => {
  let history = useNavigate();

  return (
    <ul className="absolute top-0 left-0 w-full bg-gray-800 text-white z-50 space-y-4 p-4">
      {navLinks.map((link, index) => (
        <li key={index}>
          <div
            onClick={() => {
              history(link.to); // Navigate programmatically
              onClose(); // Close the menu
            }}
            className="cursor-pointer hover:text-gray-300 transition-colors duration-300 block"
          >
            {link.label}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavMenu;