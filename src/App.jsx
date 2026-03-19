import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

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
    </div>
  );
}

export default App;