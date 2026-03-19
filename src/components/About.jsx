import React from 'react';

const stats = [
  { value: "500+", label: "MEMBERS" },
  { value: "20+", label: "TRAINERS" },
  { value: "10+", label: "YEARS EXP" }
];

const About = () => {
  return (
    <section id="about" className="w-full bg-[#f4f2ea] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="lg:hidden text-center mb-10 w-full flex flex-col items-center">
          <h3 className="text-[#dca424] font-black tracking-widest text-[16px] sm:text-[18px] mb-3 leading-none">WHO WE ARE</h3>
          <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-5xl font-black text-[#1a1a1a] leading-[1.15] max-w-sm sm:max-w-xl mx-auto">
            Build Strength. <span className="text-[#dca424]">Transform</span> Your <span className="text-[#dca424]">Body</span>.
          </h2>
        </div>

        {/* main content flex layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24 w-full">
          
          {/* left column: image container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[28rem] sm:max-w-xl lg:max-w-[105%] xl:max-w-[115%] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.15),_0_0_40px_rgba(0,0,0,0.03)] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-2 aspect-[4/3] xl:aspect-[1.35/1]">
              <img 
                src="/about.jpg" 
                alt="Modern gym equipment" 
                className="w-full h-full object-cover scale-[1.02] hover:scale-[1.08] transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
            </div>
          </div>

          {/* right column: text and stats */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-2 lg:mt-0">
            
            {/* desktop header */}
            <div className="hidden lg:block mb-8">
              <h3 className="text-[#dca424] font-black tracking-widest text-[15px] xl:text-[17px] mb-4 leading-none">WHO WE ARE</h3>
              <h2 className="text-[3.2rem] xl:text-[4.2rem] font-black text-[#1a1a1a] leading-[1.05] tracking-tight">
                Build Strength.<br />
                Transform Your Body.
              </h2>
            </div>

            {/* paragraph text */}
            <p className="text-[#55514c] text-[1.05rem] sm:text-lg xl:text-[19px] font-bold leading-[1.7] mb-12 max-w-[500px] lg:max-w-[480px] xl:max-w-[580px]">
              Our gym is designed for those who want to push their limits and achieve real results. With world-class equipment and expert trainers, we help you become your strongest self.
            </p>

            {/* stats cards layout (stacked on mobile, row on desktop) */}
            <div className="flex flex-col lg:flex-row w-full max-w-[320px] sm:max-w-sm lg:max-w-none gap-4 md:gap-5 lg:gap-4 xl:gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-center gap-5 lg:gap-2 bg-[#ebe5d3] border-[1.5px] border-[#d8cdb4]/60 rounded-xl py-5 px-6 xl:py-7 xl:px-8 flex-1 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-[#e4ddc8]"
                >
                  <span className="text-[#dca424] font-black text-[2.5rem] lg:text-[2.6rem] xl:text-[3rem] leading-none tracking-tight">{stat.value}</span>
                  <span className="text-[#847d70] font-black text-[13px] xl:text-[14px] tracking-[0.15em] leading-none pt-1">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
