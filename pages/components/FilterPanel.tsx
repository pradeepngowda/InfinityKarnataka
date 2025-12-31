
import React from 'react';
import Icon from '../../components/AppIcon';

const FilterPanel = ({
  selectedCategory,
  selectedRegion,
  selectedExperience,
  onCategoryChange,
  onRegionChange,
  onExperienceChange
}) => {
  const categories = [
    { id: 'all', label: 'All Sites', icon: 'MapPin' },
    { id: 'temples', label: 'Temples', icon: 'Church' },
    { id: 'palaces', label: 'Palaces', icon: 'Crown' },
    { id: 'forts', label: 'Forts', icon: 'Castle' },
    { id: 'caves', label: 'Caves', icon: 'Mountain' }
  ];

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'north', label: 'North Karnataka' },
    { id: 'south', label: 'South Karnataka' },
    { id: 'central', label: 'Central Karnataka' }
  ];

  const experiences = [
    { id: 'all', label: 'All Experiences' },
    { id: 'archaeological', label: 'Archaeological' },
    { id: 'architectural', label: 'Architectural' },
    { id: 'spiritual', label: 'Spiritual' },
    { id: 'royal', label: 'Royal Heritage' },
    { id: 'adventure', label: 'Adventure' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange?.(category?.id)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 ${
              selectedCategory === category?.id
                ? 'bg-[#d4af37] border-[#d4af37] text-white font-black uppercase tracking-widest text-[10px] shadow-lg'
                : 'bg-white border-stone-100 text-zinc-500 font-bold uppercase tracking-widest text-[10px] hover:border-zinc-300 shadow-sm'
            }`}
          >
            <Icon name={category?.icon as any} size={14} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <select
          value={selectedRegion}
          onChange={(e) => onRegionChange?.(e?.target?.value)}
          className="px-6 py-3 rounded-full border border-stone-100 bg-white text-zinc-900 font-bold text-[10px] uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10 transition-all cursor-pointer shadow-sm appearance-none min-w-[180px]"
        >
          {regions?.map((region) => (
            <option key={region?.id} value={region?.id}>
              {region?.label}
            </option>
          ))}
        </select>

        <select
          value={selectedExperience}
          onChange={(e) => onExperienceChange?.(e?.target?.value)}
          className="px-6 py-3 rounded-full border border-stone-100 bg-white text-zinc-900 font-bold text-[10px] uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10 transition-all cursor-pointer shadow-sm appearance-none min-w-[180px]"
        >
          {experiences?.map((experience) => (
            <option key={experience?.id} value={experience?.id}>
              {experience?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
