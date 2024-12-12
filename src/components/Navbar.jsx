import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from "../assets/images/logo-white.png"
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
            <motion.h1
  className="text-3xl bg-clip-text font-thin font-sans"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Vineeth Nair
</motion.h1>

            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>

          {/* Links */}
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6">
              {links.map((link, index) => (
                <li key={index} className="mt-2 md:mt-0">
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition duration-300"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
