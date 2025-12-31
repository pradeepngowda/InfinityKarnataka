
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const phoneNumber = '9060797969';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                src="https://res.cloudinary.com/doufbrgld/image/upload/v1766240155/infinity-karnataka-logo_ntzd4h.png" 
                alt="Infinity Karnataka" 
                className="h-20 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#b8860b]">
                  INFINITY
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
                  Karnataka
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Explore the rich heritage, vibrant culture, and breathtaking natural beauty of Karnataka. From the golden beaches of Gokarna to the royal palaces of Mysuru.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/infinity_karnataka?igsh=cmltZzVxb2Q3eHN5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                <Instagram className="w-5 h-5 text-zinc-300" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                <MessageCircle className="w-5 h-5 text-zinc-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                <Facebook className="w-5 h-5 text-zinc-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10">
                <Youtube className="w-5 h-5 text-zinc-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 italic text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Infinity Karnataka</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Popular Destinations</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Browse Categories</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Travel Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Plan Your Trip</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-6 italic text-[#d4af37]">Top Spots</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/destinations?category=temples" className="hover:text-white transition-colors">Hampi Ruins</Link></li>
              <li><Link to="/destinations?category=palaces" className="hover:text-white transition-colors">Mysore Palace</Link></li>
              <li><Link to="/categories#hills" className="hover:text-white transition-colors">Coorg Hills</Link></li>
              <li><Link to="/destinations?category=beaches" className="hover:text-white transition-colors">Gokarna Beaches</Link></li>
              <li><Link to="/categories#wildlife" className="hover:text-white transition-colors">Kabini Wildlife</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 italic text-[#d4af37]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-zinc-400 mb-6">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-zinc-500 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-zinc-500 shrink-0" />
                <span>+91 {phoneNumber}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-zinc-500 shrink-0" />
                <span>infinitykarnataka@gmail.com</span>
              </li>
            </ul>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Join Newsletter" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3 text-sm focus:outline-none focus:border-white/30"
              />
              <button className="absolute right-2 top-2 bg-white text-zinc-900 px-4 py-1.5 rounded-lg text-xs font-bold uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 space-y-4 md:space-y-0">
          <p>© 2024 Infinity Karnataka. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
