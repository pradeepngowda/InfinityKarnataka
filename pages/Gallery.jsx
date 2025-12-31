
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Maximize2, Camera, Image as ImageIcon, Church, Crown, Castle, Mountain, Sunrise, Users } from 'lucide-react';
import Icon from '../components/AppIcon';

const Gallery = () => {
  const [filter, setFilter] = useState('All Photos');
  
  const categories = [
    { label: 'All Photos', icon: 'Image' },
    { label: 'Temples', icon: 'Church' },
    { label: 'Palaces', icon: 'Crown' },
    { label: 'Forts', icon: 'Castle' },
    { label: 'Caves', icon: 'Mountain' },
    { label: 'Landscapes', icon: 'Sunrise' },
    { label: 'Culture', icon: 'Users' },
  ];

  const filteredImages = filter === 'All Photos' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400 mb-2 block">Visual Journey</span>
          <h1 className="text-5xl font-serif italic text-zinc-900 mb-12">Explore in Frames</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setFilter(cat.label)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 border ${
                  filter === cat.label 
                  ? 'bg-[#d4af37] text-zinc-900 border-[#d4af37] shadow-lg' 
                  : 'bg-white text-zinc-500 border-stone-100 hover:border-zinc-300 hover:bg-stone-50'
                }`}
              >
                <Icon 
                  name={cat.icon} 
                  size={18} 
                  className={filter === cat.label ? 'text-zinc-900' : 'text-zinc-400'} 
                />
                <span className="text-sm font-serif font-medium">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="relative group overflow-hidden rounded-[2rem] bg-white border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 break-inside-avoid"
            >
              <img 
                src={`${img.url}?auto=format&fit=crop&w=800&q=80`} 
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="flex items-center space-x-2 text-zinc-300 text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Camera className="w-3 h-3" />
                  <span>{img.category}</span>
                </div>
                <h3 className="text-white font-serif text-xl italic">{img.title}</h3>
                <button className="mt-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 hover:scale-110 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-32 text-center text-zinc-400 font-medium">
            No images found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
