
import React from 'react';
import Icon from '../../components/AppIcon';
import Select from '../../components/ui/Select';
import CountUp from '../../components/ui/CountUp';

const DestinationFilters = ({ activeFilter, onFilterChange, sortBy, onSortChange, resultCount }) => {
  const filters = [
    { id: 'all', label: 'All Journeys', icon: 'MapPin' },
    { id: 'nature', label: 'Nature Treks', icon: 'Mountain' },
    { id: 'temples', label: 'Heritage Treks', icon: 'Church' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'duration', label: 'Duration' }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div className="flex flex-wrap gap-3">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => onFilterChange(filter?.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              activeFilter === filter?.id
                ? 'bg-[#d4af37] text-white border-[#d4af37] shadow-md'
                : 'bg-white text-zinc-500 border-stone-200 hover:border-[#d4af37]/50'
            }`}
          >
            <Icon name={filter?.icon as any} size={18} />
            <span className="font-medium text-sm">{filter?.label}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-500 whitespace-nowrap font-bold uppercase tracking-widest">
          <CountUp end={resultCount} duration={1000} /> {resultCount === 1 ? 'itinerary' : 'itineraries'}
        </span>
        <div className="w-48">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={onSortChange}
            placeholder="Sort by"
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationFilters;
