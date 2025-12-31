
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../components/AppImage';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const DestinationModal = ({ destination, onClose }) => {
  const navigate = useNavigate();

  const handleAction = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
        <div className="relative h-64 md:h-72">
          <Image
            src={destination?.image}
            alt={destination?.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
          >
            <Icon name="X" size={20} className="text-zinc-900" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-3xl font-serif font-bold text-white mb-1">
              {destination?.name}
            </h2>
            <div className="flex items-center gap-2 text-white/90">
              <Icon name="MapPin" size={14} />
              <span className="text-base">{destination?.location}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-base text-zinc-500 leading-relaxed font-light">
              {destination?.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-stone-50 border border-stone-100">
              <Icon name="Clock" size={18} className="text-[#d4af37] mb-1" />
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Duration</p>
              <p className="text-xs font-bold text-zinc-900">{destination?.duration}</p>
            </div>
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-stone-50 border border-stone-100">
              <Icon name="Calendar" size={18} className="text-[#d4af37] mb-1" />
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Best Time</p>
              <p className="text-xs font-bold text-zinc-900">{destination?.bestTime}</p>
            </div>
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-stone-50 border border-stone-100">
              <Icon name="TrendingUp" size={18} className="text-[#d4af37] mb-1" />
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Difficulty</p>
              <p className="text-xs font-bold text-zinc-900">{destination?.difficulty}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
              <h3 className="text-sm font-serif font-bold text-zinc-900 mb-2 flex items-center gap-2">
                <Icon name="Tag" size={16} className="text-[#d4af37]" />
                Price
              </h3>
              <p className="text-lg font-bold text-zinc-900">{destination?.price || "Contact for Price"}</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Inclusive of all standard amenities</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
              <h3 className="text-sm font-serif font-bold text-zinc-900 mb-2 flex items-center gap-2">
                <Icon name="Star" size={16} className="text-[#d4af37]" />
                Highlights
              </h3>
              <div className="flex flex-wrap gap-2">
                {destination?.highlights?.slice(0, 10).map((h, i) => (
                  <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-white border border-stone-200 px-2 py-1 rounded-md text-zinc-600">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="md"
              fullWidth
              iconName="Calendar"
              onClick={handleAction}
            >
              Book This Trek
            </Button>
            <Button
              variant="outline"
              size="md"
              fullWidth
              iconName="MessageCircle"
              onClick={handleAction}
            >
              Ask Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
