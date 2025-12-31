
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
    "https://res.cloudinary.com/doufbrgld/image/upload/v1767109252/devaramane2_r5fkyt.jpg", // Gokarna
  "https://res.cloudinary.com/doufbrgld/image/upload/v1766256177/hampi-stone-chariot-temple-ruins-karnataka-india_rwcjxb.jpg", // Hampi
  "https://res.cloudinary.com/doufbrgld/image/upload/v1766255717/Mysore_Is_More_Magical_Than_You_Think_Explore_the_Best_a0s5ad.jpg", // Mysore Palace
  "https://i.pinimg.com/736x/3a/26/a9/3a26a99ea24f7a261a178ad20b26c86b.jpg", // Coorg
  "https://res.cloudinary.com/doufbrgld/image/upload/v1767109252/mirjan-fort_yxcnw6.jpg", // Badami
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider Loop */}
      {heroImages.map((img, idx) => (
        <div 
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url("${img}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
        </div>
      ))}

      {/* Skip/Navigation Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 lg:px-8 pointer-events-none">
        <button 
          onClick={handlePrev}
          className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32">
        <div className="mb-6 inline-flex items-center space-x-2 glass-card px-5 py-2 rounded-full border border-stone-200 animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.1)]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-800">Unveiling the Timeless State</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif mb-6 leading-[0.9] tracking-tighter animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <span className="block text-white drop-shadow-2xl">INFINITY</span>
          <span className="italic text-zinc-900 drop-shadow-lg">Karnataka</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 drop-shadow-md">
          Where historical grandeur meets the emerald heart of India. Experience the lush serenity of our heritage.
        </p>

        <div className="mt-16 flex flex-col items-center animate-bounce opacity-80">
           <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-zinc-800">Discover More</span>
           <div className="w-px h-16 bg-gradient-to-b from-zinc-800 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
