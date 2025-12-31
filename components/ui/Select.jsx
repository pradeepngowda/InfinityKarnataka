
import React from 'react';

const Select = ({ options, value, onChange, placeholder, className = "" }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full bg-white border-2 border-stone-100 rounded-xl px-4 py-2.5 text-sm font-bold text-zinc-700 focus:outline-none focus:border-[#d4af37] transition-all cursor-pointer ${className}`}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
