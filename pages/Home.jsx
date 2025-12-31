
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import CountUp from '../components/ui/CountUp';
import { TREK_DETAILS } from '../constants/trekData';
import { 
  Users, AlertCircle, Clock, X, Check, Church, Castle, Crown, 
  ArrowRight, Play, Calendar, MapPin, Star, Info, ChevronLeft, 
  ChevronRight, Sparkles, MessageCircle, HelpCircle, Phone, 
  Download, Send, Award, Shield, Globe, Lock, FileText, ChevronUp, ChevronDown, 
  GraduationCap, Languages, Search, LandPlot, Mountain, Quote, Landmark, Trophy, Heart, ListChecks, Map,
  CheckCircle2
} from 'lucide-react';

// --- UI Utility Components ---
const AppIcon = ({ name, size = 24, className = "" }) => {
  const icons = {
    Users, AlertCircle, Clock, X, Check, Church, Castle, Crown, 
    ArrowRight, Play, Calendar, MapPin, Star, Info, ChevronLeft, 
    ChevronRight, Sparkles, MessageCircle, HelpCircle, Phone, 
    Download, Send, Award, Shield, Globe, Lock, FileText, ChevronUp, ChevronDown,
    GraduationCap, Languages, Search, LandPlot, Mountain, Quote, Landmark, Trophy, Heart, ListChecks, Map
  };
  const IconComponent = icons[name] || HelpCircle;
  return <IconComponent size={size} className={className} />;
};

const Button = ({ children, variant = "default", fullWidth = false, className = "", iconName = "", iconPosition = "left", onClick, type = "button", disabled = false }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100";
  const variants = {
    default: "bg-[#d4af37] text-white shadow-md hover:bg-[#b8860b]",
    outline: "bg-white border border-stone-200 text-zinc-700 hover:border-zinc-400 hover:bg-stone-50",
    success: "bg-emerald-600 text-white hover:bg-emerald-700"
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}>
      {iconName && iconPosition === 'left' && <AppIcon name={iconName} size={18} />}
      {children}
      {iconName && iconPosition === 'right' && <AppIcon name={iconName} size={18} />}
    </button>
  );
};

// --- Detailed Trek Itinerary Modal ---
const TrekDetailsModal = ({ trekName, onClose }) => {
  const data = TREK_DETAILS[trekName];
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-500">
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-stone-100 flex justify-between items-start bg-stone-50">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-[10px] font-black uppercase tracking-widest">Weekend Expedition</span>
              <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">{data.duration}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900">{trekName}</h2>
            <p className="text-zinc-500 italic font-light mt-1">{data.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-zinc-400 hover:text-zinc-900 border border-stone-100">
            <X size={24} />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Itinerary */}
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h3 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-zinc-900 mb-8">
                  <Map size={18} className="text-[#d4af37]" /> The Road Map
                </h3>
                <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-stone-200">
                  {data.itinerary.map((item, i) => (
                    <div key={i} className="relative pl-10 group">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-2 border-[#d4af37] z-10 group-hover:bg-[#d4af37] transition-colors flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] group-hover:bg-white"></div>
                      </div>
                      <h4 className="font-serif text-xl text-zinc-900 mb-3">{item.day}</h4>
                      {item.description && <p className="text-zinc-500 text-sm leading-relaxed mb-4">{item.description}</p>}
                      {item.activities && (
                        <ul className="space-y-3">
                          {item.activities.map((act, j) => (
                            <li key={j} className="flex gap-3 text-sm text-zinc-600 font-light leading-snug">
                              <span className="text-[#d4af37] font-bold mt-1.5">•</span>
                              {act}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-zinc-900 mb-6">
                  <MapPin size={18} className="text-[#d4af37]" /> Pickup Locations (Bangalore)
                </h3>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.pickupPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-zinc-600">
                      <CheckCircle2 size={16} className="text-[#d4af37]" />
                      {point}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#f0f2f5] rounded-3xl p-8 border border-stone-100">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">Trip Ancillary</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mb-3">Inclusions</h5>
                    <ul className="space-y-2">
                      {data.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-600 font-medium">
                          <Check size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-rose-400 mb-3">Exclusions</h5>
                    <ul className="space-y-2">
                      {data.exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-600 font-medium">
                          <X size={12} className="text-rose-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-6">Things to Carry</h4>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                  {data.carryList.map((item, i) => (
                    <li key={i} className="text-[10px] font-bold text-zinc-500 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-zinc-300"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-3xl p-8 text-white">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-6">Guidelines</h4>
                <div className="space-y-4">
                  {data.terms.slice(0, 4).map((term, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <AlertCircle size={14} className="text-zinc-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] font-medium leading-relaxed text-zinc-400">{term}</p>
                    </div>
                  ))}
                  <p className="text-[9px] text-zinc-500 italic mt-4">Full terms provided upon booking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-8 border-t border-stone-100 bg-white flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#d4af37]">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Questions?</p>
              <p className="text-sm font-bold text-zinc-900">+91 96637 13071</p>
            </div>
          </div>
          <button 
            onClick={() => (window.location.href = 'https://wa.me/919663713071')}
            className="w-full md:w-auto px-12 py-5 bg-[#d4af37] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-500/20"
          >
            Book This Trip Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CuratedExperiences = () => {
  const experiences = [
    {
      title: "Temple Trails",
      icon: "Landmark",
      image: "https://i.pinimg.com/736x/c7/05/3b/c7053b00071376326ee33b32f89c880f.jpg",
      description: "Explore ancient Hoysala and Chalukya temples with expert guides revealing architectural secrets and spiritual significance",
      features: ["Exclusive early morning access", "Archaeological expert guidance", "Hidden temple complexes"]
    },
    {
      title: "Royal Fort Expeditions",
      icon: "Castle",
      image: "https://images.unsplash.com/photo-1609100996762-a7c28036d483?auto=format&fit=crop&q=80&w=600",
      description: "Discover medieval forts and battlements where dynasties rose and fell, with stories of valor and strategic brilliance",
      features: ["Private fort explorations", "Historical reenactments", "Sunset photography sessions"]
    },
    {
      title: "Palace Heritage Tours",
      icon: "Crown",
      image: "https://i.pinimg.com/736x/b2/9f/93/b29f9367211269a8f1a774f05af5064d.jpg",
      description: "Experience royal grandeur in magnificent palaces with Indo-Saracenic architecture and tales of maharajas and their courts",
      features: ["Royal chamber access", "Cultural performances", "Heritage cuisine experiences"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">Curated Heritage Experiences</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed text-sm">
            Three expertly designed tour categories revealing Karnataka's authentic cultural treasures through immersive experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-stone-100 flex flex-col group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-zinc-900 shadow-lg ring-4 ring-black/5">
                  <AppIcon name={exp.icon} size={20} />
                </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif text-zinc-900 mb-4">{exp.title}</h3>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed mb-8">{exp.description}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {exp.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-[11px] font-bold text-zinc-600">
                      <Check size={14} className="text-emerald-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center justify-center gap-2 w-full py-4 border border-stone-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-900 hover:bg-zinc-50 transition-colors">
                  Explore Tour <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Trekking Destinations Section ---
const HeritageDestinations = ({ onOpenTrek }) => {
  const [filter, setFilter] = useState('All Treks');
  const filters = [
    { name: 'All Treks', icon: 'MapPin' },
    { name: 'Nature', icon: 'Mountain' },
    { name: 'Heritage', icon: 'Church' }
  ];

    
  const destinations = [
    { 
      name: "Bandaje", 
      location: "Dakshina Kannada", 
      description: (
    <>
    Day 1: Bandaje Main Trek (Rani jhari) complementary. <br />
    Day 2: Kelaguru Tea Estate, Poornachandra Tejaswi Prathishtana.
       </>
  ), 
      year: "2 Days", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsM1cqXCzdA46_C5ALu2c1c3PsMdW6iY99g&s", 
      category: "Nature" 
    },
    { 
      name: "Gangadikal", 
      location: "Kudremukh Range", 
      description: (
    <>
      Day 1: Gangadikal Main Trek.<br />
      Day 2: Samse Tea Estate, Ganesha Temple, Soormane Falls, Kalasa Hanging Bridge, Horanadu Temple.
    </>
  ), 
      year: "2 Days", 
      image: "https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1765285269203_testimage--trail_view_3.1_(1)_11zon.webp&w=1920&q=75", 
      category: "Nature" 
    },
    { 
      name: "Kurinjal", 
      location: "Kudremukh", 
      description: (
    <>Day 1: Kurinjal Trek. <br />
    Day 2: Samse Tea Estate, Ganesha Temple, Soormane Falls , Kalasa Hanging Bridge,Horanadu Temple.
       </>
  ), 
      year: "2 Days", 
      image: "https://kudremukhnationalpark.org/wp-content/uploads/2024/11/kurinjal-trek-scaled.webp", 
      category: "Nature" 
    },
    { 
      name: "Narasimha Parvatha", 
      location: "Agumbe / Sringeri", 
      description: (
    <>
    Day 1: Narasimha Parvatha trek.<br />
    Day 2: Koodlu theertha falls, Varanga Jain temple, Sringeri temple.
     </>
  ),  
      year: "2 Days", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qjGa_LR_BCqNylNaLOcCfLxxqmT7qT6ECw&s", 
      category: "Heritage" 
    },


    { 
      name: "Gokarna", 
      location: "Gokarna", 
      description: (
    <>
    Day 1: OM Beach, Kudle Beach, Belekan Beach & Mirjan Fort.<br />
    Day 2: Honnavara,  Murudeshwara Temple,  JOG FALLS.
     </>
  ),  
      year: "2 Days", 
      image: "https://res.cloudinary.com/doufbrgld/image/upload/v1767109252/om-beach_tsbwlt.jpg", 
      category: "Heritage" 
    },

      { 
      name: "Udupi-Agumbe", 
      location: "Udupi, Karnataka", 
      description: (
    <>
    Day 1: Udupi Sri Krishna Mata, Malpe Beach, St.Marys Island, Sunset at Agumbe.<br />
    Day 2: Koodlu Theertha Falls,  Varanga Jain Temple, Sringeri Sharadhambha Temple.
     </>
  ),  
      year: "2 Days", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoCImEHjcLZw186HU7J8jL_a65dd8ILV_EQ&s", 
      category: "Heritage" 
    }

  ];

  const filtered = filter === 'All Treks' ? destinations : destinations.filter(d => d.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <section className="py-24 bg-[#e9eff2]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">Explore Trekking Destinations</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-light">Experience the Western Ghats with our curated 2-day itineraries combining challenge and culture</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-16 reveal">
          {filters.map((f) => (
            <button
              key={f.name}
              onClick={() => setFilter(f.name)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                filter === f.name ? 'bg-[#d4af37] border-[#d4af37] text-white shadow-lg' : 'bg-white border-stone-200 text-zinc-600 hover:border-stone-400'
              }`}
            >
              <AppIcon name={f.icon} size={18} />
              {f.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((d, i) => (
            <div key={`${d.name}-${i}`} className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm reveal flex flex-col hover:shadow-md transition-all">
              <div className="relative h-56">
                <img src={d.image} className="w-full h-full object-cover" alt={d.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{d.name}</h4>
                  <div className="flex items-center gap-1 text-[9px] uppercase font-bold tracking-widest opacity-80">
                    <MapPin size={10} /> {d.location}
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <p className="text-[11px] text-zinc-500 leading-relaxed mb-6">{d.description}</p>
                <div className="space-y-3">
                  <button 
                    onClick={() => onOpenTrek(d.name)}
                    className="w-full py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-900 hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37] transition-all flex items-center justify-center gap-2"
                  >
                    View Itinerary <ListChecks size={12} />
                  </button>
                  <div className="flex justify-between items-center text-[9px] font-bold text-[#d4af37] uppercase tracking-widest pt-3 border-t border-stone-100">
                    <span>{d.year}</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Trust and Safety Section ---
const TrustAndExpertise = () => {
  const accreditations = [
    { title: "Karnataka Tourism Board", desc: "Official certification for heritage tourism excellence", icon: "Trophy" },
    { title: "Archaeological Survey of India", desc: "Authorized heritage site access partner", icon: "Shield" },
    { title: "UNESCO Recognition", desc: "World Heritage Site tour specialist", icon: "Globe" },
    { title: "Responsible Tourism", desc: "Certified sustainable heritage tourism practices", icon: "Heart" }
  ];

  const safetyItems = [
    { label: "COVID-19 Safety", desc: "Sanitized vehicles, masks, social distancing", icon: "Shield" },
    { label: "Medical Support", desc: "First-aid trained guides, emergency contacts", icon: "Heart" },
    { label: "Secure Travel", desc: "Verified drivers, GPS tracking, 24/7 helpline", icon: "Lock" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">Trust & Expertise You Can Rely On</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-light text-sm">Certified heritage tourism specialists with government endorsements</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 reveal">
          {accreditations.map((acc, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:shadow-lg transition-all">
              <div className="mb-6"><AppIcon name={acc.icon} size={24} className="text-[#d4af37]" /></div>
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-3 leading-tight">{acc.title}</h4>
              <p className="text-[10px] text-zinc-400 font-medium leading-relaxed">{acc.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#f0f2f5] rounded-2xl p-12 reveal">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif italic text-zinc-900">Your Safety is Our Priority</h3>
          </div>
          <div className="flex flex-wrap justify-center items-start gap-6 md:gap-8">
  {safetyItems.map((item, i) => (
    <div key={i} className="flex flex-col items-center text-center">
      <div className="mb-4">
        <AppIcon name={item.icon} size={20} className="text-emerald-700" />
      </div>
      <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-2">{item.label}</h4>
      <p className="text-[10px] text-zinc-500 font-medium leading-relaxed max-w-[180px]">{item.desc}</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

// --- Traveler Stories Section ---
const TravelerStories = () => {
  const [curr, setCurr] = useState(0);
  const stories = [
    { name: "Rajesh Kumar", location: "Bangalore, Karnataka", text: "As a history enthusiast, the Royal Fort Expeditions tour was a dream come true. The sunset photography session at Chitradurga Fort was breathtaking.", date: "October 2024", dest: "Chitradurga Fort", image: "https://images.unsplash.com/photo-1609100996762-a7c28036d483?auto=format&fit=crop&q=80&w=1200", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" },
    { name: "Anita Desai", location: "Delhi, NCR", text: "The Palace Heritage Tour was absolutely magnificent. Mysore Palace at night was like stepping into a fairy tale. Exclusive experience we'll never forget.", date: "December 2024", dest: "Mysore Palace", image: "https://i.pinimg.com/1200x/bb/15/ad/bb15ad4f581768bfceed009b670dbbf2.jpg", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" }
  ];
  const statCounters = [
    { label: "Happy Travelers", value: 500, suffix: "+", icon: "Users" },
    { label: "Average Rating", value: 4.9, suffix: "/5", decimals: 1, icon: "Star" },
    { label: "Heritage Sites", value: 50, suffix: "+", icon: "MapPin" },
    { label: "Satisfaction Rate", value: 100, suffix: "%", icon: "Award" }
  ];
  useEffect(() => {
    const t = setInterval(() => setCurr(p => (p + 1) % stories.length), 10000);
    return () => clearInterval(t);
  }, [stories.length]);
  return (
    <section className="py-24 bg-[#e9eff2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">Traveler Stories</h2>
          <p className="text-zinc-500 font-light max-w-2xl mx-auto text-sm">Real experiences from travelers who discovered Karnataka's heritage</p>
        </div>
        <div className="relative max-w-5xl mx-auto mb-20 reveal">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-stone-100 flex flex-col md:flex-row min-h-[480px]">
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-0 overflow-hidden">
              <img src={stories[curr].image} className="w-full h-full object-cover transition-all duration-1000" alt="Destination" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-5 mb-8">
                <img src={stories[curr].avatar} className="w-16 h-16 rounded-full border-4 border-[#d4af37] object-cover shadow-sm" alt="User" />
                <div>
                  <h4 className="text-xl font-serif font-bold text-zinc-900 leading-tight">{stories[curr].name}</h4>
                  <div className="flex items-center gap-1.5 text-zinc-400 mt-1"><MapPin size={10} /><span className="text-[10px] font-black uppercase tracking-[0.1em]">{stories[curr].location}</span></div>
                </div>
              </div>
              <div className="flex gap-1 mb-8 text-[#d4af37]">{[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}</div>
              <p className="text-base md:text-lg text-zinc-700 font-light leading-relaxed mb-10 italic">"{stories[curr].text}"</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400 pt-8 border-t border-stone-100">
                <div className="flex items-center gap-2"><Calendar size={12} className="text-[#d4af37]" /> {stories[curr].date}</div>
                <div className="flex items-center gap-2"><MapPin size={12} className="text-[#d4af37]" /> {stories[curr].dest}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-3">{stories.map((_, i) => (<div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === curr ? 'w-10 bg-[#d4af37]' : 'w-3 bg-stone-300'}`}/>))}</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {statCounters.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-md transition-all">
              <div className="mb-4"><AppIcon name={stat.icon} size={20} className="text-[#d4af37]" /></div>
              <div className="text-3xl font-serif font-bold text-zinc-900 mb-1"><CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} /></div>
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [selectedTrek, setSelectedTrek] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      
      <HeritageDestinations onOpenTrek={(name) => setSelectedTrek(name)} />
        <CuratedExperiences />
      <TrustAndExpertise />
      <TravelerStories />
      
      {/* Trek Itinerary Modal */}
      {selectedTrek && (
        <TrekDetailsModal 
          trekName={selectedTrek} 
          onClose={() => setSelectedTrek(null)} 
        />
      )}

      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 reveal">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Ready for your <span className="italic text-[#d4af37]">Karnataka</span> quest?</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="px-10 py-5" iconName="Phone" onClick={() => (window.location.href = 'tel:919060797969')}>Call Expert</Button>
            <button onClick={() => navigate('/contact')} className="px-10 py-5 border border-white/20 rounded-lg font-bold hover:bg-white hover:text-zinc-900 transition-all uppercase text-xs tracking-widest">Plan My Journey</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
