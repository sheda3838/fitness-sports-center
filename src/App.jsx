import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className='bg-[#131211] font-sans antialiased text-white selection:bg-[#dca424] selection:text-black'>
      {/* Floating Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Extra sections just to allow scrolling */}
      <section id="about" className="h-[80vh] bg-[#1a1917] border-t border-white/5 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">About Us Section</h2>
      </section>
      
      <section id="services" className="h-[80vh] bg-[#131211] border-t border-white/5 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Services Section</h2>
      </section>
    </div>
  );
}

export default App;