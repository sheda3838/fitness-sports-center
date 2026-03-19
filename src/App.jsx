import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='min-h-screen bg-black font-sans'>
      {/* Floating Navbar */}
      <Navbar />
      
      {/* Mock Hero Section setup to show floating effect on dark background */}
      <section id="home" className="h-screen bg-black flex flex-col items-center justify-center text-white relative">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">FITNESS <span className="text-[#dca424]">SPORTS CENTER</span></h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl text-center px-4">
          Transform your body and mind with our professional trainers and state-of-the-art facilities.
        </p>
      </section>

      {/* Extra sections just to allow scrolling */}
      <section id="about" className="h-[80vh] bg-neutral-900 border-t border-neutral-800 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">About Us Section</h2>
      </section>
      
      <section id="services" className="h-[80vh] bg-black border-t border-neutral-800 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Services Section</h2>
      </section>
    </div>
  );
}

export default App;