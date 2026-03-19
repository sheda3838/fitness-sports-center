import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Ultra-fast split reveal variants specifically for the Hero headline
  const line1Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } }
  };

  const line2Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, delay: 0.25, ease: "easeOut" } }
  };

  // Modern, fast staggered supporting content
  const contentStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // seamlessly catches the moment line 2 spawns
        staggerChildren: 0.15
      }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative w-full min-h-screen bg-[linear-gradient(90deg,#040304_0%,#292113_53%,#040304_100%)] overflow-hidden flex items-center">
      
      {/* hero image container */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Animated yellow half-circle accent graphic */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 0.5, 1] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-[-10%] sm:right-[5%] md:right-[5%] lg:right-[8%] xl:right-[15%] bottom-[10%] lg:bottom-auto md:top-[12%] lg:top-[14%] w-[90vw] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[550px] aspect-square rounded-full border-[35px] sm:border-[55px] md:border-[65px] lg:border-[75px] xl:border-[85px] border-[#dca424] opacity-40 md:opacity-75 lg:opacity-100 -z-10"
          style={{ clipPath: 'inset(0 28% 0 0)' }}
        />

        <motion.img 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 0.4, 0.75, 1], y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/hero.png" 
          alt="Muscular fitness model" 
          className="absolute bottom-0 right-0 w-auto h-[55%] sm:h-[70%] md:h-[75%] lg:h-[80%] xl:h-[85%] max-w-none object-contain object-right-bottom opacity-40 md:opacity-75 lg:opacity-100"
        />
        
        {/* mobile/tablet subtle dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/40 md:bg-black/20 lg:hidden pointer-events-none"></div>
      </div>

      {/* main content container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 w-full relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-0">
        <div className="w-full md:max-w-[85%] lg:w-[65%] xl:w-[55%] text-left">
          
          {/* Animated main headline (Impact Split Reveal) */}
          <div className="flex flex-col text-[2.8rem] xs:text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.8rem] font-black leading-[1.05] tracking-tight mb-5 lg:mb-6 text-shadow-sm">
            <motion.div 
               variants={line1Variants} 
               initial="hidden" 
               animate="visible"
               viewport={{ once: true }}
            >
              <span className="text-[#dca424]">NO</span> <span className="text-white">PAIN</span>
            </motion.div>
            <motion.div 
               variants={line2Variants} 
               initial="hidden" 
               animate="visible"
               viewport={{ once: true }}
            >
              <span className="text-white">NO</span> <span className="text-[#dca424]">GAIN</span>
            </motion.div>
          </div>

          {/* Staggered Supporting Nodes */}
          <motion.div
            variants={contentStaggerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {/* yellow divider line */}
            <motion.div variants={fadeUpVariants} className="w-20 lg:w-24 h-1.5 bg-[#dca424] mb-8 mt-4 rounded-full" />

            {/* subheadline text */}
            <motion.p variants={fadeUpVariants} className="text-gray-300 text-lg sm:text-xl lg:text-[22px] font-medium mb-10 leading-relaxed max-w-lg">
              Push your <span className="text-[#dca424]">limits</span>. Build your <span className="text-[#dca424]">strength</span>.<br />
              Join the <span className="text-[#dca424]">ultimate</span> fitness experience.
            </motion.p>

            {/* action buttons wrapped with strict, fast Framer hover states */}
            <motion.div variants={fadeUpVariants} className="flex flex-row flex-wrap gap-4 sm:gap-6">
              <motion.a 
                href="#join" 
                whileHover={{ scale: 1.04, boxShadow: "0px 10px 20px rgba(220,164,36,0.3)" }}
                transition={{ duration: 0.2 }}
                className="bg-[#dca424] text-neutral-900 font-extrabold text-sm sm:text-[15px] py-4 px-8 sm:px-10 rounded-xl shadow-[0_4px_15px_rgba(220,164,36,0.15)] inline-block text-center tracking-wide"
              >
                JOIN NOW
              </motion.a>
              <motion.a 
                href="#memberships" 
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.05)", boxShadow: "0px 10px 20px rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,1)" }}
                transition={{ duration: 0.2 }}
                className="bg-transparent text-white font-bold text-sm sm:text-[15px] py-4 px-8 sm:px-10 rounded-xl border-[1.5px] border-white/70 inline-block text-center tracking-wide"
              >
                MEMBERSHIPS
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
