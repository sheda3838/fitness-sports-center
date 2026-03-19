import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebookF, FaRegCopyright } from 'react-icons/fa';

const SocialIcons = () => (
  <>
    <a href="#" aria-label="Instagram" className="w-[34px] h-[34px] rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
      <FaInstagram size={20} />
    </a>
    <a href="#" aria-label="Twitter" className="w-[34px] h-[34px] rounded-full bg-[#1da1f2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
      <FaTwitter size={17} />
    </a>
    <a href="#" aria-label="WhatsApp" className="w-[34px] h-[34px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
      <FaWhatsapp size={21} />
    </a>
    <a href="#" aria-label="Facebook" className="w-[34px] h-[34px] rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
      <FaFacebookF size={17} />
    </a>
  </>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#0a0a0a_0%,#1f1a10_100%)] text-white pt-20 lg:pt-28 pb-10 border-t border-[#2d281d]">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        
        {/* main footer grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-8">
          
          {/* left column: brand info */}
          <div className="flex flex-col h-full items-start">
            <div className="bg-white rounded-[1.5rem] w-28 h-28 xl:w-32 xl:h-32 flex items-center justify-center p-3 mb-8 shadow-lg">
              <img src="/logo.jpg" alt="Fitness Center Logo" className="w-full h-full object-contain" />
            </div>
            
            <p className="text-[#a1a1a1] text-[13px] sm:text-[14px] xl:text-[15px] font-bold leading-[1.9] tracking-[0.05em] mb-10 max-w-[320px]">
              Premium fitness facility dedicated to helping you achieve your physical peak. Modern equipment, expert staff, unstoppable community
            </p>
            
            {/* mobile/tablet placement for socials */}
            <div className="flex gap-4 lg:hidden mb-4">
              <SocialIcons />
            </div>
            
            {/* desktop placement for copyright */}
            <div className="hidden lg:flex items-center gap-2 mt-auto text-[#a1a1a1] text-[13px] xl:text-[14px] font-black tracking-widest pt-4">
               <FaRegCopyright className="text-[#dca424]" size={16} /> All Rights Reserved.
            </div>
          </div>

          {/* middle column: quick links */}
          <div className="flex flex-col">
            <h4 className="text-white text-[15px] xl:text-[17px] font-black tracking-widest mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-5 text-[#a1a1a1] text-[14px] xl:text-[15px] font-black tracking-[0.05em]">
              <li><a href="#home" className="hover:text-[#dca424] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#dca424] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[#dca424] transition-colors">Services</a></li>
              <li><a href="#trainers" className="hover:text-[#dca424] transition-colors">Trainers</a></li>
              <li><a href="#memberships" className="hover:text-[#dca424] transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-[#dca424] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* right column: support & socials */}
          <div className="flex flex-col h-full">
            <h4 className="text-white text-[15px] xl:text-[17px] font-black tracking-widest uppercase mb-8">SUPPORT</h4>
            <ul className="flex flex-col gap-5 text-[#a1a1a1] text-[14px] xl:text-[15px] font-black tracking-[0.05em] mb-12 lg:mb-auto">
              <li><a href="#" className="hover:text-[#dca424] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#dca424] transition-colors">terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#dca424] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#dca424] transition-colors">License</a></li>
            </ul>
            
            {/* desktop placement for socials */}
            <div className="hidden lg:flex gap-4 mt-auto pt-4">
              <SocialIcons />
            </div>
          </div>

        </div>

        {/* mobile/tablet placement for copyright */}
        <div className="lg:hidden flex items-center justify-center gap-2 mt-16 pt-8 border-t border-white/5 text-[#a1a1a1] text-[13px] font-black tracking-widest">
          <FaRegCopyright className="text-[#dca424]" size={16} /> All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
