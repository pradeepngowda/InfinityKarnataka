
import React, { useState, useEffect } from 'react';
import Image from '../../components/AppImage';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const FeaturedDestinations = ({ destinations, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (destinations?.length || 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [destinations?.length]);

  const currentDestination = destinations?.[currentIndex];

  if (!currentDestination) return null;

  return (
    <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden sticky top-32 shadow-xl">
      <div className="bg-stone-50 px-6 py-4 border-b border-stone-100">
        <h3 className="text-xs font-black uppercase tracking-widest text-zinc-900">Featured Stories</h3>
      </div>
      
      <div className="p-6">
        <div className="relative h-56 rounded-xl overflow-hidden mb-6">
          <Image
            src={currentDestination?.image}
            alt={currentDestination?.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-2xl font-serif italic text-white leading-tight">
              {currentDestination?.name}
            </h4>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <Icon name="Star" size={16} className="text-[#d4af37] fill-[#d4af37]" />
            <span className="text-zinc-900">UNESCO Heritage</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <Icon name="Clock" size={16} className="text-[#d4af37]" />
            <span>{currentDestination?.duration} Journey</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <Icon name="Calendar" size={16} className="text-[#d4af37]" />
            <span>Best in {currentDestination?.bestTime}</span>
          </div>
        </div>
        
        <Button
          variant="default"
          fullWidth
          className="font-black tracking-widest text-[10px] uppercase"
          onClick={() => onSelect?.(currentDestination)}
        >
          Explore Details
        </Button>
        
        <div className="flex justify-center gap-3 mt-8">
          {destinations?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'bg-[#d4af37] w-8' : 'bg-stone-200 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
