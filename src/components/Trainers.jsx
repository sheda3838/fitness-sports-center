import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import TrainerCard from './TrainerCard';

const trainersData = [
  {
    id: 1,
    name: "MARCUS STONE",
    title: "HEAD COACH",
    image: "/trainers/t1.jpg",
    description: "Marcus has over 10 years of experience in hypertrophy and strength training. He specializes in transforming physiques naturally."
  },
  {
    id: 2,
    name: "ELENA ROSTOVA",
    title: "YOGA SPECIALIST",
    image: "/trainers/t2.jpg",
    description: "Elena brings mindfulness and extreme core flexibility to every session. Master your inner balance."
  },
  {
    id: 3,
    name: "DAVID KING",
    title: "CROSSFIT PRO",
    image: "/trainers/t3.jpg",
    description: "David is built for endurance and raw power. His intense programming will shatter your limits."
  },
  {
    id: 4,
    name: "SOPHIA CHEN",
    title: "CARDIO COACH",
    image: "/trainers/t4.jpg",
    description: "Sophia leads the highest-energy spin and metabolic conditioning classes in the city."
  },
  {
    id: 5,
    name: "JAXSON WRIGHT",
    title: "MOBILITY EXPERT",
    image: "/trainers/t5.jpg",
    description: "Jaxson focuses heavily on joint longevity, injury prevention, and athletic functional movement."
  },
  {
    id: 6,
    name: "MIA TAYLOR",
    title: "STRENGTH COACH",
    image: "/trainers/t6.jpg",
    description: "Mia is a former powerlifting champion dedicated to helping members safely maximize their lifting thresholds."
  }
];

const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = trainersData.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const setIndex = (index) => setCurrentIndex(index);

  return (
    <section id="trainers" className="w-full bg-[#f4f2ea] overflow-hidden py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        
        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center lg:text-left lg:px-12">
          <h3 className="text-[#dca424] font-black tracking-[0.2em] text-[14px] sm:text-[16px] mb-3 leading-none">THE EXPERTS</h3>
          <h2 className="text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] font-black text-[#1a1a1a] leading-[1.1] tracking-tight">
            MEET OUR <span className="text-[#dca424]">TRAINERS</span>
          </h2>
        </div>

        {/* Interactive 3D Carousel Container */}
        <div className="relative w-full flex items-center justify-center">
           
          {/* Desktop Left Nav Button */}
          <button 
            onClick={handlePrev} 
            className="hidden lg:flex absolute left-2 xl:left-8 z-20 w-14 h-14 bg-[#dca424] hover:bg-[#b88b1b] text-black rounded-full items-center justify-center transition-transform hover:scale-105 shadow-lg"
            aria-label="Previous Trainer"
          >
            <IoChevronBack size={26} strokeWidth={2} />
          </button>

          {/* Swipeable Carousel Area targeting mobile users */}
          <motion.div 
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -40) handleNext();
              else if (offset.x > 40) handlePrev();
            }}
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] flex justify-center items-center"
          >
            {trainersData.map((trainer, idx) => {
               // Calculate CSS variant state tracking logic including farLeft and farRight properties!
               let position = 'hidden';
               
               if (idx === currentIndex) position = 'center';
               else if (idx === (currentIndex + 1) % total) position = 'right';
               else if (idx === (currentIndex - 1 + total) % total) position = 'left';
               else if (idx === (currentIndex + 2) % total) position = 'farRight';
               else if (idx === (currentIndex - 2 + total) % total) position = 'farLeft';

               return (
                 <TrainerCard 
                   key={trainer.id} 
                   trainer={trainer} 
                   position={position} 
                   onClick={() => setIndex(idx)} 
                 />
               );
            })}
          </motion.div>

          {/* Desktop Right Nav Button */}
          <button 
            onClick={handleNext} 
            className="hidden lg:flex absolute right-2 xl:right-8 z-20 w-14 h-14 bg-[#dca424] hover:bg-[#b88b1b] text-black rounded-full items-center justify-center transition-transform hover:scale-105 shadow-lg"
            aria-label="Next Trainer"
          >
            <IoChevronForward size={26} strokeWidth={2} />
          </button>

        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12 lg:hidden relative z-20">
          {trainersData.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`w-[10px] h-[10px] sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${i === currentIndex ? 'bg-black' : 'bg-gray-400'}`} 
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
