import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#2a2a2a] hover:bg-[#333333] transition-all duration-300 rounded-[1rem] p-8 lg:p-9 xl:p-10 flex flex-col justify-start items-start group shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(220,164,36,0.3),inset_0_0_30px_rgba(220,164,36,0.15)] cursor-pointer">
      <div className="text-[#dca424] mb-6 transform group-hover:scale-110 transition-transform duration-300">
        <Icon size={42} strokeWidth={1.5} />
      </div>
      <h4 className="text-white text-[1.2rem] lg:text-[1.3rem] font-bold mb-4 tracking-wide">{title}</h4>
      <div className="w-20 lg:w-24 h-[2px] xl:h-[3px] bg-[#dca424] mb-5 rounded-full opacity-80 transition-all duration-300 group-hover:w-28"></div>
      <p className="text-[#a3a3a3] text-[0.95rem] lg:text-[1rem] leading-[1.7] font-medium">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
