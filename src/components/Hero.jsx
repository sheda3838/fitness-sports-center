import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-[linear-gradient(90deg,#040304_0%,#292113_53%,#040304_100%)] overflow-hidden flex items-center">
      
      {/* Hero Image Container (Explicitly pinned to bottom-right for perfect scaling) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Yellow Half-Circle Ring Graphic (Behind the hero) */}
        <div 
          className="absolute right-[-10%] sm:right-[2%] md:right-[5%] lg:right-[5%] xl:right-[10%] bottom-[10%] lg:bottom-auto md:top-[10%] lg:top-[15%] w-[100vw] sm:w-[500px] md:w-[600px] lg:w-[600px] xl:w-[680px] aspect-square rounded-full border-[40px] sm:border-[70px] md:border-[80px] lg:border-[90px] xl:border-[100px] border-[#dca424] opacity-40 md:opacity-75 lg:opacity-100 -z-10"
          style={{ clipPath: 'inset(0 28% 0 0)' }}
        ></div>

        <img 
          src="/hero.png" 
          alt="Muscular fitness model" 
          className="absolute bottom-0 right-0 w-170 h-[65%] sm:h-[80%] md:h-[90%] lg:h-[95%] xl:h-[105%] max-w-none object-contain object-right-bottom opacity-40 md:opacity-75 lg:opacity-100"
        />
        {/* Mobile/Tablet subtle dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/40 md:bg-black/20 lg:hidden pointer-events-none"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8 w-full relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-0">
        <div className="w-full md:max-w-[85%] lg:w-[65%] xl:w-[55%] text-left">
          
          {/* Main Headline */}
          <h1 className="text-[3.8rem] xs:text-7xl sm:text-[5.5rem] md:text-[6.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-black leading-[1.0] tracking-tight mb-6 lg:mb-8 text-shadow-sm">
            <span className="text-[#dca424]">NO</span> <span className="text-white">PAIN</span><br />
            <span className="text-white">NO</span> <span className="text-[#dca424]">GAIN</span>
          </h1>

          {/* Yellow Divider Line */}
          <div className="w-20 h-1.5 bg-[#dca424] mb-8 mt-4 rounded-full"></div>

          {/* Subheadline text */}
          <p className="text-gray-300 text-lg sm:text-xl lg:text-[22px] font-medium mb-10 leading-relaxed max-w-lg">
            Push your <span className="text-[#dca424]">limits</span>. Build your <span className="text-[#dca424]">strength</span>.<br />
            Join the <span className="text-[#dca424]">ultimate</span> fitness experience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row flex-wrap gap-4 sm:gap-6">
            <a 
              href="#join" 
              className="bg-[#dca424] hover:bg-[#c2901e] text-neutral-900 font-extrabold text-sm sm:text-[15px] py-4 px-8 sm:px-10 rounded-xl shadow-[0_4px_15px_rgba(220,164,36,0.3)] transition-all duration-300 transform hover:-translate-y-1 inline-block text-center tracking-wide"
            >
              JOIN NOW
            </a>
            <a 
              href="#memberships" 
              className="bg-transparent hover:bg-white/10 text-white font-bold text-sm sm:text-[15px] py-4 px-8 sm:px-10 rounded-xl border-2 border-white/90 hover:border-white transition-all duration-300 transform hover:-translate-y-1 inline-block text-center tracking-wide"
            >
              MEMBERSHIPS
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
