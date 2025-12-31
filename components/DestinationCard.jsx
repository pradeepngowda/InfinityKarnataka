
import React from 'react';
import { MapPin, Star, ArrowUpRight } from 'lucide-react';
import CountUp from './ui/CountUp';

const DestinationCard = ({ destination }) => {
  return (
    <div className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 hover:border-zinc-300 transition-all duration-700 flex flex-col h-full shadow-md hover:shadow-xl">
      {/* Dynamic Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-[2rem]">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-4 left-4 flex flex-col">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-zinc-900 border border-stone-100 w-fit mb-2">
            {destination.category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-2 flex flex-col flex-grow relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
            <MapPin className="w-3 h-3 mr-1 text-zinc-500" />
            <span>{destination.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black text-zinc-900">
              <CountUp end={destination.rating} decimals={1} />
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-serif text-zinc-900 mb-2 italic group-hover:text-zinc-800 transition-colors">
          {destination.name}
        </h3>
        
        <p className="text-zinc-500 text-sm mb-8 line-clamp-2 leading-relaxed font-light">
          {destination.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-900 transition-all">
            <span>Explore Space</span>
            <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
