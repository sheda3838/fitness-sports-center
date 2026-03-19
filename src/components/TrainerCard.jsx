import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const TrainerCard = ({ trainer, position, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isCenter = position === 'center';

  // Force non-center cards back to front-facing smoothly
  useEffect(() => {
    if (!isCenter) setIsFlipped(false);
  }, [isCenter]);

  const handleInteraction = () => {
    if (!isCenter) {
      onClick(); // Bring clicked side card to the center
    } else {
      // Toggle flip on click exclusively for mobile (where hover is absent)
      if (window.innerWidth < 1024) {
        setIsFlipped(!isFlipped);
      }
    }
  };

  const handleMouseEnter = () => {
    if (isCenter && window.innerWidth >= 1024) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (isCenter && window.innerWidth >= 1024) setIsFlipped(false);
  };

  let alignClass = 'items-center text-center px-4';
  if (position === 'left' || position === 'farLeft') {
    alignClass = 'items-start text-left pl-6 lg:pl-10 pr-2';
  } else if (position === 'right' || position === 'farRight') {
    alignClass = 'items-end text-right pr-6 lg:pr-10 pl-2';
  }

  return (
    <motion.div
      variants={{
         center: { x: '0%', scale: 1, zIndex: 10, opacity: 1 },
         left: { x: '-60%', scale: 0.85, zIndex: 5, opacity: 1 },
         right: { x: '60%', scale: 0.85, zIndex: 5, opacity: 1 },
         farLeft: { x: '-115%', scale: 0.7, zIndex: 2, opacity: 1 },
         farRight: { x: '115%', scale: 0.7, zIndex: 2, opacity: 1 },
         hidden: { x: '0%', scale: 0.4, zIndex: 0, opacity: 0 }
      }}
      initial={false}
      animate={position}
      transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute w-[240px] sm:w-[280px] lg:w-[350px] aspect-[4/5] [perspective:1500px] ${
        isCenter ? 'cursor-default' : 'cursor-pointer'
      } ${position === 'hidden' && 'pointer-events-none'}`}
    >
      <motion.div 
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 25 }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* Front Face */}
        <div 
           className={`absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-500 group ${
             !isCenter ? 'grayscale hover:grayscale-0' : 'grayscale-0'
           }`}
        >
           <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
           {/* Overlay text block */}
           <div 
             className={`absolute inset-x-0 bottom-0 pt-32 pb-8 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 flex flex-col justify-end ${alignClass} ${
               isCenter ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
             }`}
           >
              <h4 className="text-white text-lg sm:text-[1.3rem] lg:text-2xl font-black uppercase tracking-wide">{trainer.name}</h4>
              <p className="text-[#dca424] font-bold tracking-widest text-[10px] sm:text-xs lg:text-sm mt-1">{trainer.title}</p>
           </div>
        </div>

        {/* Back Face (Details) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden bg-[#1f1d1a] p-6 lg:p-8 flex flex-col justify-center items-center text-center shadow-2xl border-2 border-[#dca424]/40">
           <h4 className="text-white text-xl lg:text-2xl font-black mb-2 uppercase">{trainer.name}</h4>
           <p className="text-[#dca424] font-bold tracking-widest text-xs lg:text-sm mb-6">{trainer.title}</p>
           <p className="text-gray-300 text-sm lg:text-[15px] leading-relaxed mb-8">{trainer.description}</p>
           
           <div className="flex gap-5">
             <FaInstagram className="text-[#dca424] text-[22px] cursor-pointer hover:text-white transition-colors" />
             <FaTwitter className="text-[#dca424] text-[22px] cursor-pointer hover:text-white transition-colors" />
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrainerCard;
