import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Services', path: '#services' },
  { name: 'Trainers', path: '#trainers' },
  { name: 'Pricing', path: '#pricing' },
  { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-6 left-1/2 w-[95%] max-w-7xl -translate-x-1/2 bg-[#efede8] shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-50 transition-all duration-300 ${isOpen ? 'rounded-2xl' : 'rounded-2xl'}`}>
      <div className="flex items-center justify-between px-5 py-2 lg:px-8">
        
        {/* logo */}
        <div className="flex lg:w-1/4 items-center">
          <a href="#home" className="flex items-center">
            <img src="/logo.jpg" alt="Fitness Center Logo" className="h-14 lg:h-[4.5rem] w-auto object-contain mix-blend-multiply" />
          </a>
        </div>

        {/* desktop navigation */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-[#202020] font-bold text-[15px] hover:text-[#dca424] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* action button (desktop) */}
        <div className="hidden lg:flex lg:w-1/4 justify-end items-center pr-1">
          <a
            href="#join"
            className="bg-[#dca424] hover:bg-[#c2901e] text-neutral-900 font-bold text-[15px] py-2.5 px-7 rounded-lg shadow-[0_4px_10px_rgba(220,164,36,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Join Now
          </a>
        </div>

        {/* mobile menu button - shown only on small screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#202020] hover:text-[#dca424] focus:outline-none transition-colors duration-200 bg-transparent p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
      </div>

      {/* mobile navigation dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
               key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-[#202020] font-bold text-lg hover:text-[#dca424] transition-colors duration-200 border-b border-neutral-300/50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setIsOpen(false)}
            className="bg-[#dca424] text-center w-full mt-2 hover:bg-[#c2901e] text-neutral-900 font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200 block"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
