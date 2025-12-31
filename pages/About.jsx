
import React, { useState } from "react"
import { Link } from "react-router-dom"
import CountUp from "../components/ui/CountUp"
import { 
  ArrowRight, Award, Users, MapPin, Heart, Clock, 
  Shield, Check, Globe, Leaf, Star, CheckCircle2,
  Navigation, ExternalLink, Map as MapIcon
} from "lucide-react"

const stats = [
  { value: 100, suffix: "%", label: "Satisfaction Rate", icon: Heart },
]

const pickupLocations = [
  {
    name: "Majestic Shanthala Silks",
    address: "Majestic, Bangalore",
    url: "https://maps.app.goo.gl/TqxUn4NfSJUtjsTw8?g_st=ic",
    embedQuery: "Shanthala+Silks+Majestic+Bangalore",
    type: "Pickup"
  },
  {
    name: "People Tree Hospital",
    address: "Goraguntepalya, Bangalore",
    url: "https://maps.app.goo.gl/VxsHZ6zA7CEjrmR87?g_st=ic",
    embedQuery: "People+Tree+Hospitals+Goraguntepalya+Bangalore",
    type: "Pickup"
  },
  {
    name: "Parle-G Toll",
    address: "Tumkur Road, Bangalore",
    url: "https://maps.app.goo.gl/VHEGpjthPDMHY7oy8?g_st=ic",
    embedQuery: "Parle-G+Toll+Bangalore",
    type: "Pickup"
  },
  {
    name: "Infinity Karnataka HQ",
    address: "Contact Location, Bangalore",
    url: "https://maps.app.goo.gl/LRdAao5Di3jherRo6?g_st=ic",
    embedQuery: "13.0487444,77.485125",
    type: "Office"
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion for Heritage",
    description:
      "We are deeply passionate about Karnataka's rich cultural heritage and committed to sharing it with the world.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your safety and comfort are our top priorities. We ensure secure, well-planned journeys.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "We promote responsible travel practices that protect and preserve Karnataka's natural beauty.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Our team of local experts provides authentic insights and personalized experiences.",
  },
]

const achievements = [
  "Karnataka Tourism Award 2023 - Best Tour Operator",
  "Sustainable Tourism Recognition by Ministry of Tourism",
  "TripAdvisor Certificate of Excellence (5 consecutive years)",
  "Featured in National Geographic Traveler India",
]

export default function About() {
  const [activeLoc, setActiveLoc] = useState(pickupLocations[0]);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-64 pb-32 lg:pt-80 lg:pb-48 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/doufbrgld/image/upload/v1766255087/hampi-ancient-temple-ruins-with-sunset-golden-hour_wxmlem.jpg"
            alt="Karnataka Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#d4af37] font-black tracking-[0.4em] text-xs uppercase mb-6 block drop-shadow-lg">About Us</span>
            <h1 className="font-serif text-4xl sm:text-7xl text-white mb-8 leading-tight drop-shadow-2xl">
              Crafting Unforgettable <br/> <span className="italic text-[#d4af37]">Karnataka</span> Experiences
            </h1>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#d4af37] text-white font-black uppercase tracking-widest text-[10px] rounded-lg hover:brightness-110 transition-all shadow-2xl"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      

      {/* Our Story */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[#d66d51] font-black tracking-[0.4em] text-xs uppercase block">Our Story</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 leading-tight">
                A Passion Born from <br/> Love for Karnataka
              </h2>
              <div className="space-y-6 text-zinc-500 text-sm leading-relaxed font-light">
                <p>
                  Yes, In Karnataka there are thousands of places & also unexplored places such as Temples, Cultures, Historical places & Nature. Everyone need to experience our Karnataka to know this place. Our ancestors as given Gems in Karnataka & also it is our duty to protect these ancient assets.
                </p>
                <p>
                  So, we're excited to make you experience of our Karnataka & Let us make to know others too. To know historical places like Badami, Aihole, Belur, Halebeedu, Yana, Chitradurga, & mountain ranges like Western ghats, Chandra Dhrona, Bramhagiri, Kudremuka, Mullayyanagiri these are the places where you can get pure love of nature. This is the way you enjoy Karnataka. Here there we can help you to reach these places by our travel company <strong>INFINITY KARNATAKA</strong>.
                </p>
                <p className="font-serif italic text-[#d66d51] text-lg">
                  Namma Karnataka, Namma Hemme
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-stone-100">
                <img
                  src="https://www.bmcadventures.com/system/images/000/773/322/b0ec349b52e4d21afefa7e184e62195a/banner/Gangadikal_Trek.jpg"
                  alt="Our Journey"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Pickup Map Section */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-black tracking-[0.4em] text-xs uppercase block mb-4">Pickup Locations</span>
            <h2 className="font-serif text-4xl text-zinc-900 mb-4">Our Route & Connectivity</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto font-light text-sm">Find your nearest pickup point for our weekend expeditions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            <div className="lg:col-span-1 space-y-4">
              {pickupLocations.map((loc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveLoc(loc)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                    activeLoc.name === loc.name 
                    ? 'bg-white border-[#d4af37] shadow-xl translate-x-2' 
                    : 'bg-white/50 border-stone-100 hover:border-zinc-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    activeLoc.name === loc.name ? 'bg-[#d4af37] text-white' : 'bg-stone-100 text-zinc-400 group-hover:bg-stone-200'
                  }`}>
                    <MapPin size={18} />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#d4af37] mb-1 block">{loc.type} Point</span>
                    <h4 className="text-xs font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors">{loc.name}</h4>
                    <p className="text-[10px] text-zinc-400 mt-1">{loc.address}</p>
                  </div>
                  <a 
                    href={loc.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-300 hover:text-[#d4af37] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} />
                  </a>
                </button>
              ))}
              <div className="p-6 bg-zinc-900 rounded-2xl text-white mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={16} className="text-[#d4af37]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Typical Reporting</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Majestic Pickup: 7:00 PM <br/>
                  Goraguntepalya: 8:00 PM <br/>
                  Parle-G Toll: 9:00 PM
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 relative min-h-[500px] h-full">
              <iframe
                title="Location Map"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${activeLoc.embedQuery}&zoom=14`}
                className="w-full h-full rounded-3xl border border-stone-200 shadow-2xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              {/* Fallback if no API key provided - using Search embed as fallback */}
              <iframe
                title="Location Map Fallback"
                src={`https://www.google.com/maps?q=${activeLoc.embedQuery}&output=embed`}
                className="absolute inset-0 w-full h-full rounded-3xl border border-stone-200 shadow-2xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#d66d51] font-black tracking-[0.4em] text-xs uppercase block mb-4">What Drives Us</span>
            <h2 className="font-serif text-4xl text-zinc-900">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-10 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-20 h-20 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-stone-100 group-hover:bg-[#d66d51] group-hover:text-white transition-all">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-zinc-900 mb-4 italic">{value.title}</h3>
                <p className="text-zinc-400 text-xs font-medium leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="py-24 bg-zinc-900 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-5xl text-white mb-6 leading-tight">
            Ready to Explore <span className="italic text-[#d4af37]">Karnataka</span> With Us?
          </h2>
          <p className="text-zinc-400 text-lg mb-12 font-light">
            Let our expert team craft the perfect Karnataka itinerary tailored to your interests and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#d4af37] text-white font-black uppercase tracking-widest text-[10px] rounded-lg hover:brightness-110 transition-all shadow-2xl"
            >
              Plan Your Trip
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-white/5 text-white font-black uppercase tracking-widest text-[10px] rounded-lg hover:bg-white/10 transition-all border border-white/10"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
