import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { IoBarbellOutline } from 'react-icons/io5';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Services', path: '#services' },
  { name: 'Trainers', path: '#trainers' },
  { name: 'Pricing', path: '#memberships' },
  { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initial pop delay before expansion starts
    const timer = setTimeout(() => setIsReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      initial={{ 
        y: '45vh', 
        x: '-50%', 
        width: 80, 
        height: 80, 
        scale: 0,
        borderRadius: '50%',
        backgroundColor: '#dca424' 
      }}
      animate={isReady ? {
        y: 24,
        x: '-50%',
        width: '95%',
        height: 'auto',
        scale: 1,
        borderRadius: '1.5rem',
        backgroundColor: '#efede8'
      } : {
        scale: 1,
      }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="fixed left-1/2 max-w-7xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-[100] overflow-hidden"
    >
      {/* Starting Dumbbell Icon */}
      <AnimatePresence>
        {!isReady && (
          <motion.div 
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex items-center justify-center text-[#1a1a1a]"
          >
            <IoBarbellOutline size={45} className="animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar Content (Fades in after expansion) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-between px-5 py-2 lg:px-8 w-full"
      >
        
        {/* logo */}
        <div className="flex lg:w-1/4 items-center">
          <a href="#home" className="flex items-center">
            <img src="/logo.jpg" alt="Fitness Center Logo" className="h-14 lg:h-[4rem] xl:h-[4.5rem] w-auto object-contain mix-blend-multiply" />
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
      </motion.div>

      {/* mobile navigation dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden"
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
