import React, { useState, useEffect } from 'react';
import { FiMapPin, FiPhone, FiMail, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

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
const InputField = ({ label, name, type = "text", placeholder, options, rows, value, onChange }) => (
  <div className="flex flex-col mb-6 w-full group">
    <label className="text-[#888] text-[11px] font-black tracking-widest uppercase mb-2 ml-1 group-focus-within:text-[#dca424] transition-colors">{label}</label>
    
    {type === "select" ? (
      <div className="relative">
        <select 
          name={name}
          value={value}
          onChange={onChange}
          required
          className={`w-full bg-[#fdfdfc] border-[1.5px] border-[#eae4d5] text-[14px] font-bold rounded-xl px-5 py-4 outline-none focus:border-[#dca424] focus:ring-2 focus:ring-[#dca424]/20 transition-all appearance-none cursor-pointer ${!value ? 'text-[#b0b0b0]' : 'text-[#333]'}`}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
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
        value={value}
        onChange={onChange}
        rows={rows || 4} 
        placeholder={placeholder} 
        required
        className="w-full bg-[#fdfdfc] border-[1.5px] border-[#eae4d5] text-[#333] text-[14px] font-bold rounded-xl px-5 py-4 outline-none focus:border-[#dca424] focus:ring-2 focus:ring-[#dca424]/20 transition-all resize-none placeholder-[#b0b0b0]"
      ></textarea>
    ) : (
      <input 
        name={name}
        type={type} 
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        required
        className="w-full bg-[#fdfdfc] border-[1.5px] border-[#eae4d5] text-[#333] text-[14px] font-bold rounded-xl px-5 py-4 outline-none focus:border-[#dca424] focus:ring-2 focus:ring-[#dca424]/20 transition-all placeholder-[#b0b0b0]"
      />
    )}
  </div>
);

const Contact = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-sync the dropdown when user clicks a pricing card
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, interest: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // ** FORMSPREE INTEGRATION ENDPOINT **
      const FORMSPREE_URL = "https://formspree.io/f/maqpveey";
      
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', interest: selectedPlan || '', message: '' });
      } else {
        // If the endpoint isn't wired yet or errors out
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 6000);
  };

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
          <div className="w-full lg:w-7/12 flex-shrink-0 relative">
            
            {/* Success Overlay state triggered upon successful fetch */}
            {submitStatus === 'success' && (
               <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#fffcf7] rounded-[1.5rem] sm:rounded-[2rem] border border-[#dca424] shadow-xl p-8 text-center animate-pulse">
                  <FiCheckCircle className="text-[#dca424] text-7xl mb-6" />
                  <h3 className="text-[#1a1a1a] text-2xl font-black mb-3">Message Received!</h3>
                  <p className="text-[#55514c] font-bold">Thank you for reaching out.<br/>Our team will get back to you shortly.</p>
               </div>
            )}

            <div className="bg-[#fffcf7] rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-6 sm:p-10 lg:p-12 w-full border border-[#eee8d9]">
              
              <form onSubmit={handleSubmit} className="w-full">
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-600">
                    <FiAlertCircle className="flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-sm font-bold">Oops! There was a problem submitting your form. Did you remember to add your Formspree endpoint?</p>
                  </div>
                )}

                {/* dynamically grouped side-by-side inputs on tablet/desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <InputField name="firstName" label="FIRST NAME" placeholder="Zaid" value={formData.firstName} onChange={handleChange} />
                  <InputField name="lastName" label="LAST NAME" placeholder="Kamil" value={formData.lastName} onChange={handleChange} />
                </div>
                
                <InputField 
                  name="email"
                  label="EMAIL ADDRESS" 
                  type="email" 
                  placeholder="kamilzaidkamilzaid53@gmail.com" 
                  value={formData.email} 
                  onChange={handleChange}
                />
                
                <InputField 
                  name="interest"
                  label="INTERESTED IN" 
                  type="select" 
                  placeholder="GYM Membership"
                  value={formData.interest} 
                  onChange={handleChange}
                  options={[
                    "BASIC Plan",
                    "PRO Plan",
                    "ELITE Plan"
                  ]}
                />
                
                <InputField 
                  name="message"
                  label="YOUR MESSAGE" 
                  type="textarea" 
                  placeholder="How can we help you?" 
                  rows={4}
                  value={formData.message} 
                  onChange={handleChange}
                />
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full mt-4 bg-[#dca424] text-[#1a1a1a] font-black text-[14px] xl:text-[15px] tracking-widest uppercase py-4 sm:py-5 rounded-[0.8rem] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#dca424]/40 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b8891b] hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(220,164,36,0.4)]'
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
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
