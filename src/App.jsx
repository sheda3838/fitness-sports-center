import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-[#131211] font-sans antialiased text-white selection:bg-[#dca424] selection:text-black'>
      {/* Floating Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <About />
      
      {/* Services Section */}
      <Services />

      {/* Trainers Section */}
      <Trainers />

      {/* Pricing / Membership Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;