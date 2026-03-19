import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

// reusable contact information block component
const ContactInfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-5 mb-8 group cursor-pointer">
    <div className="flex-shrink-0 w-12 h-12 bg-[#ebd5a0]/40 rounded-full flex items-center justify-center text-[#dca424] transition-transform duration-300 group-hover:scale-110">
      <Icon size={22} className="text-[#dca424]" strokeWidth={2.5} />
    </div>
    <div className="pt-0.5">
      <h5 className="text-[#999999] text-[11px] font-black tracking-[0.2em] uppercase mb-1.5 transition-colors group-hover:text-[#dca424]">{label}</h5>
      <p className="text-[#2d2d2d] font-black text-[15px] leading-snug max-w-[280px] transition-colors duration-300">{value}</p>
    </div>
  </div>
);

// reusable advanced input field component
const InputField = ({ label, name, type = "text", placeholder, options, rows }) => (
  <div className="flex flex-col mb-6 w-full group">
    <label className="text-[#888] text-[11px] font-black tracking-widest uppercase mb-2 ml-1 group-focus-within:text-[#dca424] transition-colors">{label}</label>
    
    {type === "select" ? (
      <div className="relative">
        <select 
          name={name}
          className="w-full bg-[#fdfdfc] border-[1.5px] border-[#eae4d5] text-[#333] text-[14px] font-bold rounded-xl px-5 py-4 outline-none focus:border-[#dca424] focus:ring-2 focus:ring-[#dca424]/20 transition-all appearance-none cursor-pointer"
        >
          {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
        </select>
        {/* custom transparent chevron SVG */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]">
           <svg stroke="currentColor" fill="none" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>
    ) : type === "textarea" ? (
      <textarea 
        name={name}
        rows={rows || 4} 
        placeholder={placeholder} 
        required
        className="w-full bg-[#fdfdfc] border-[1.5px] border-[#eae4d5] text-[#333] text-[14px] font-bold rounded-xl px-5 py-4 outline-none focus:border-[#dca424] focus:ring-2 focus:ring-[#dca424]/20 transition-all resize-none placeholder-[#b0b0b0]"
      ></textarea>
    ) : (
      <input 
        name={name}
        type={type} 
        placeholder={placeholder} 
        required
        className="w-full bg-[#fdfdfc] border-[1.5px] border-[#eae4d5] text-[#333] text-[14px] font-bold rounded-xl px-5 py-4 outline-none focus:border-[#dca424] focus:ring-2 focus:ring-[#dca424]/20 transition-all placeholder-[#b0b0b0]"
      />
    )}
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#f4f2ea] py-24 lg:py-32">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-28">
          
          {/* left column: text & contact information */}
          <div className="w-full lg:w-5/12 flex flex-col pt-2 lg:pt-8">
            <h3 className="text-[#dca424] font-black tracking-[0.2em] text-[15px] sm:text-[16px] mb-4 leading-none uppercase">
              GET IN TOUCH
            </h3>
            <h2 className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-[#1a1a1a] leading-[1.05] tracking-tight mb-8">
              START YOUR <span className="text-[#dca424]">JOURNEY</span>
            </h2>
            <p className="text-[#55514c] text-[16px] xl:text-[17px] font-bold leading-[1.7] mb-12 max-w-[480px]">
              Have questions about our memberships, facilities, or personal training? Drop us a message or visit us in person. We're ready to help you transform.
            </p>

            <div className="flex flex-col gap-1">
              <ContactInfoItem 
                icon={FiMapPin} 
                label="VISIT US" 
                value="111/B/28 Aramangolla, Werellehena, Horana 12400" 
              />
              <ContactInfoItem 
                icon={FiPhone} 
                label="CALL US" 
                value="+94 77 119 7358" 
              />
              <ContactInfoItem 
                icon={FiMail} 
                label="EMAIL US" 
                value="sportscenter@gym.com" 
              />
            </div>
          </div>

          {/* right column: form card container */}
          <div className="w-full lg:w-7/12 flex-shrink-0">
            <div className="bg-[#fffcf7] rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-6 sm:p-10 lg:p-12 w-full border border-[#eee8d9]">
              
              {/* future-proofed form tag for formspree integration */}
              <form onSubmit={(e) => e.preventDefault()} className="w-full">
                
                {/* dynamically grouped side-by-side inputs on tablet/desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <InputField name="firstName" label="FIRST NAME" placeholder="Zaid" />
                  <InputField name="lastName" label="LAST NAME" placeholder="Kamil" />
                </div>
                
                <InputField 
                  name="email"
                  label="EMAIL ADDRESS" 
                  type="email" 
                  placeholder="kamilzaidkamilzaid53@gmail.com" 
                />
                
                <InputField 
                  name="interest"
                  label="INTERESTED IN" 
                  type="select" 
                  options={[
                    "GYM Membership", 
                    "Personal Training", 
                    "Group Classes", 
                    "CrossFit", 
                    "Diet & Nutrition"
                  ]}
                />
                
                <InputField 
                  name="message"
                  label="YOUR MESSAGE" 
                  type="textarea" 
                  placeholder="How can we help you?" 
                  rows={4}
                />
                
                <button 
                  type="submit" 
                  className="w-full mt-4 bg-[#dca424] hover:bg-[#b8891b] text-[#1a1a1a] font-black text-[14px] xl:text-[15px] tracking-widest uppercase py-4 sm:py-5 rounded-[0.8rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(220,164,36,0.4)] focus:outline-none focus:ring-4 focus:ring-[#dca424]/40"
                >
                  SEND MESSAGE
                </button>
              </form>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
