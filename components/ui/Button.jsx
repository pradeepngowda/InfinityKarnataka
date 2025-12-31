
import React from 'react';
import AppIcon from '../AppIcon';

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  iconName,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-[#d4af37] text-white hover:bg-[#b8860b] shadow-md",
    outline: "bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white",
    ghost: "bg-transparent text-[#d4af37] hover:bg-[#d4af37]/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-10 py-5 text-base rounded-2xl"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {iconName && iconPosition === 'left' && <AppIcon name={iconName} size={18} className="mr-2" />}
      {children}
      {iconName && iconPosition === 'right' && <AppIcon name={iconName} size={18} className="ml-2" />}
    </button>
  );
};

export default Button;
