import React from 'react';
import ServiceCard from './ServiceCard';
import { FiUser, FiHeart, FiUsers, FiZap } from 'react-icons/fi';
import { IoBarbellOutline, IoRestaurantOutline } from 'react-icons/io5';

const servicesData = [
  {
    title: "Personal Training",
    description: "One-on-one sessions with our master coaches to reach your specific goals faster and safer.",
    icon: FiUser
  },
  {
    title: "Strength Training",
    description: "Science-based hypertrophy and power lifting programs using the world's best equipment.",
    icon: IoBarbellOutline
  },
  {
    title: "Cardio Programs",
    description: "High-intensity metabolic conditioning designed to incinerate fat and boost heart health.",
    icon: FiHeart
  },
  {
    title: "Group Classes",
    description: "Join a high-energy community environment with expert-led HIIT, Yoga, and Spin classes.",
    icon: FiUsers
  },
  {
    title: "Nutrition Coaching",
    description: "Personalized meal planning and supplement guidance from our certified dietitians.",
    icon: IoRestaurantOutline
  },
  {
    title: "CrossFit",
    description: "Prepare for anything with our official Cross Fit affiliate programming and dedicated zone.",
    icon: FiZap
  }
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-[linear-gradient(180deg,#1c170f_0%,#040304_100%)] overflow-hidden py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        
        {/* section header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <h3 className="text-[#dca424] font-black tracking-[0.2em] text-[14px] sm:text-[16px] mb-4 leading-none">WHAT WE OFFER</h3>
          <h2 className="text-[2.6rem] sm:text-[3.5rem] lg:text-[4.2rem] font-black text-white leading-[1.05] tracking-tight">
            OUR <span className="text-[#dca424]">SERVICES</span>
          </h2>
        </div>

        {/* services grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
