import React from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const plans = [
  {
    name: "BASIC",
    target: "Perfect for Beginners",
    price: "49",
    features: [
      { text: "Gym Access", included: true },
      { text: "Group Classes", included: true },
      { text: "Progress Tracking", included: true },
      { text: "Priority Support", included: false },
      { text: "Personalized Workout Plan", included: false }
    ]
  },
  {
    name: "PRO",
    target: "FOR DEDICATED ATHLETES",
    price: "99",
    isPopular: true,
    features: [
      { text: "All Basic Features", included: true },
      { text: "Group Classes", included: true },
      { text: "Progress Tracking", included: true },
      { text: "Personal Trainer Sessions", included: true },
      { text: "Priority Support", included: false }
    ]
  },
  {
    name: "ELITE",
    target: "THE ULTIMATE EXPERIENCE",
    price: "199",
    features: [
      { text: "All Pro features", included: true },
      { text: "Group Classes", included: true },
      { text: "Progress Tracking", included: true },
      { text: "Personal Trainer Sessions", included: true },
      { text: "Diet & Nutrition Plan", included: true }
    ]
  }
];

const Pricing = ({ onSelectPlan }) => {
  const { fadeUpVariants, cardVariants, staggerContainer, viewportConfig } = useTheme();

  return (
    <section id="memberships" className="w-full bg-[linear-gradient(180deg,#1c170f_0%,#131211_100%)] overflow-hidden py-24 lg:py-32">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
      >
        
        {/* header */}
        <motion.div variants={fadeUpVariants} className="mb-16 lg:mb-24 text-center">
          <h3 className="text-[#dca424] font-black tracking-widest text-[14px] sm:text-[16px] mb-4 leading-none uppercase">
            PRICING PLANS
          </h3>
          <h2 className="text-[2.6rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-white leading-[1.05] tracking-wide mb-6">
            CHOOSE YOUR <span className="text-[#dca424]">MEMBERSHIP</span>
          </h2>
          <p className="text-[#a8a8a8] text-[15px] sm:text-[17px] max-w-2xl mx-auto font-bold tracking-wide">
            No hidden fees, no complicated contracts. Just straightforward pricing for premium fitness
          </p>
        </motion.div>

        {/* pricing cards */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 lg:gap-6 xl:gap-8 w-full relative z-10">
          
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className={`relative w-full max-w-sm lg:flex-1 flex flex-col rounded-[1.5rem] bg-[#222222] transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-2 group ${
                plan.isPopular 
                  ? 'p-8 lg:p-10 xl:p-12 border-[2px] border-[#dca424] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.6),_inset_0_0_50px_rgba(220,164,36,0.15)] z-20 hover:lg:scale-[1.08] lg:scale-[1.06]' 
                  : 'p-8 xl:p-10 border border-white/10 z-10 hover:border-[#dca424]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4),_inset_0_0_30px_rgba(220,164,36,0.15)]'
              }`}
            >
              {/* popular badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#dca424] text-black text-[11px] sm:text-xs font-black px-5 py-2 rounded-full tracking-widest uppercase shadow-md">
                  Most Popular
                </div>
              )}

              {/* card header */}
              <div className="mb-8 text-left border-b border-gray-700/50 pb-8">
                <h4 className="text-white text-lg xl:text-xl font-black tracking-widest uppercase mb-2 shadow-sm">{plan.name}</h4>
                <p className="text-[#a3a3a3] text-[10px] xl:text-[11px] font-bold tracking-[0.15em] uppercase mb-6">{plan.target}</p>
                <div className="flex items-end gap-1.5">
                  <span className="text-[#dca424] text-5xl xl:text-6xl font-black leading-none drop-shadow-md">${plan.price}</span>
                  <span className="text-white text-[13px] font-bold mb-1.5 tracking-wider">/month</span>
                </div>
              </div>

              {/* features list */}
              <div className="flex flex-col gap-5 flex-grow mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0">
                      {feature.included ? (
                        <FiCheckCircle className="text-[#dca424] text-lg lg:text-xl" strokeWidth={2.5} />
                      ) : (
                        <FiXCircle className="text-[#666666] text-lg lg:text-xl" strokeWidth={2} />
                      )}
                    </div>
                    <span className={`text-[12px] xl:text-[13px] font-bold tracking-wide ${feature.included ? 'text-gray-200' : 'text-[#666666]'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* action button */}
              <button 
                onClick={() => onSelectPlan && onSelectPlan(plan.name + ' Plan')}
                className={`mt-auto w-full py-4 rounded-full font-black text-xs xl:text-sm tracking-widest uppercase transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-[#dca424] text-black hover:bg-[#b88c1b] hover:shadow-[0_0_20px_rgba(220,164,36,0.4)] hover:-translate-y-1' 
                    : 'bg-transparent border-[1.5px] border-gray-500 text-gray-300 hover:text-white hover:border-white hover:bg-white/5 hover:-translate-y-1'
                }`}
              >
                {plan.isPopular ? 'JOIN NOW' : 'SELECT PLAN'}
              </button>
            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Pricing;

export default Pricing;
