
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const closeTimeoutRef = useRef(null);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Page context logic
  const isTransparent = !isScrolled;
  const isDarkHeroPage = ["/", "/about", "/categories"].includes(location.pathname);
  const useWhiteText = isTransparent && isDarkHeroPage;

  // Visual classes
  const textColorClass = useWhiteText ? "text-white" : "text-zinc-800";
  const hoverColorClass = useWhiteText ? "hover:text-[#d4af37]" : "hover:text-[#b8860b]";
  const logoTextClass = "bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#b8860b]";
  const buttonClass = useWhiteText 
    ? "bg-white text-zinc-900 hover:bg-stone-50" 
    : "bg-[#d4af37] text-white hover:bg-[#b8860b]";

  const handleMouseEnter = (label) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent 
          ? "bg-transparent py-4 md:py-6" 
          : "bg-white/95 backdrop-blur-md shadow-xl py-3 border-b border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/doufbrgld/image/upload/v1766240155/infinity-karnataka-logo_ntzd4h.png" 
                alt="Infinity Karnataka" 
                className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
              {useWhiteText && (
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif font-black tracking-tight transition-colors duration-300 ${logoTextClass}`}>
                INFINITY
              </span>
              <span className={`text-[9px] font-bold tracking-[0.3em] uppercase opacity-70 ${textColorClass}`}>
                Karnataka
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-200 py-4 ${textColorClass} ${hoverColorClass} ${
                    location.pathname === item.href && !isTransparent ? "text-[#d4af37]" : ""
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 w-64 transform transition-all duration-300 origin-top animate-in fade-in zoom-in-95">
                    <div className="h-4 w-full bg-transparent"></div>
                    <div className="bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden relative z-50">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-stone-100"></div>
                      <div className="py-3">
                        {item.children.map((child) => (
                          <Link 
                            key={child.label}
                            to={child.href} 
                            className="block px-8 py-4 text-zinc-600 hover:bg-stone-50 hover:text-[#d4af37] transition-all relative z-10 border-b border-stone-50 last:border-0"
                          >
                             <span className="text-[10px] font-black uppercase tracking-[0.15em] block">{child.label}</span>
                             <span className="text-[9px] text-zinc-400 font-medium block mt-1">Explore {child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/contact">
                <button className={`font-black uppercase tracking-[0.2em] text-[10px] px-8 py-3 rounded-lg transition-all duration-300 shadow-xl hover:-translate-y-0.5 ${buttonClass}`}>
                    Begin Journey
                </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-3 rounded-xl transition-colors ${useWhiteText ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-stone-50 text-zinc-800'}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-8 border-t border-stone-100 bg-white absolute top-full left-4 right-4 shadow-3xl p-8 rounded-2xl z-50 animate-in slide-in-from-top-4 duration-500 overflow-y-auto max-h-[80vh]">
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-4">
                  <Link
                    to={item.href}
                    className="text-2xl font-serif italic text-zinc-900 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-4 border-l-2 border-stone-100">
                      {item.children.map((child) => (
                        <Link 
                          key={child.label} 
                          to={child.href} 
                          className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-[#d4af37]"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-stone-50">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#d4af37] text-white py-5 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg">
                    Plan Your Trip
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
