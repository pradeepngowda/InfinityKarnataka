
import React from 'react';
import Image from '../../components/AppImage';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const DestinationCard = ({ destination, onClick }) => {
  return (
    <div
      className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group border border-stone-100 flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden rounded-none">
        <Image
          src={destination?.image || destination?.imageUrl}
          alt={destination?.imageAlt || destination?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <div className="bg-white px-4 py-1.5 rounded-none text-[11px] font-bold text-zinc-900 shadow-md capitalize tracking-tight">
            {destination?.category}
          </div>
        </div>

        <div className="absolute bottom-5 left-6 right-6">
          <h3 className="text-3xl font-serif font-bold text-white mb-1">
            {destination?.name}
          </h3>
          <div className="flex items-center gap-1.5 text-white/90">
            <Icon name="MapPin" size={14} />
            <span className="text-sm font-medium">{destination?.location}</span>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <p className="text-zinc-500 text-[14px] leading-relaxed mb-6 font-normal">
          {destination?.description}
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-zinc-600">
            <Icon name="Clock" size={20} className="text-[#d4af37]" />
            <span className="text-sm font-medium">{destination?.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600">
            <Icon name="Calendar" size={20} className="text-[#d4af37]" />
            <span className="text-sm font-medium">{destination?.bestTime || destination?.timeline}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-600">
            <Icon name="TrendingUp" size={20} className="text-[#d4af37]" />
            <span className="text-sm font-medium">{destination?.difficulty || 'Moderate'}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Button
            variant="outline"
            size="md"
            fullWidth
            iconName="ArrowRight"
            iconPosition="right"
            className="rounded-none border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition-all duration-300 font-bold"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
