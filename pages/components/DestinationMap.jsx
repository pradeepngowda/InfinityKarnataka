
import React from 'react';
import Icon from '../../components/AppIcon';

const DestinationMap = ({ destinations, onDestinationSelect }) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-stone-100 p-8 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-serif italic text-zinc-900">Interactive Map View</h3>
        <Icon name="Map" size={24} className="text-[#d4af37]" />
      </div>
      
      <div className="relative w-full h-[600px] bg-stone-50 rounded-2xl overflow-hidden border border-stone-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Icon name="MapPin" size={64} className="text-stone-200 mx-auto mb-4" />
            <h4 className="text-lg font-serif italic text-zinc-400 mb-2">Heritage Map View</h4>
            <p className="text-sm text-zinc-400 max-w-md font-medium">
              Explore {destinations?.length} heritage destinations across Karnataka
            </p>
          </div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          {destinations?.slice(0, 6)?.map((dest, index) => (
            <div
              key={dest?.id}
              className="absolute pointer-events-auto cursor-pointer"
              style={{
                left: `${20 + (index * 12)}%`,
                top: `${30 + (index % 3) * 20}%`
              }}
              onClick={() => onDestinationSelect?.(dest)}
            >
              <div className="relative group">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all border-4 border-white">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                  <div className="bg-white border border-stone-100 rounded-xl p-4 shadow-2xl whitespace-nowrap">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-900">{dest?.name}</p>
                    <p className="text-[10px] text-zinc-400 font-bold mt-1 uppercase tracking-[0.1em]">{dest?.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-6 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#d4af37] rounded-full" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Heritage Sites</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Star" size={14} className="text-[#d4af37]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">UNESCO Sites</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationMap;
