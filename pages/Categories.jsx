
import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowRight, Star, ChevronRight, Compass, MapPin, Sparkles } from "lucide-react"

const categoriesData = [
  {
    id: "wildlife",
    name: "Wildlife & Nature",
    description: "Diverse ecosystems in the Western Ghats featuring pristine trails, misty peaks, and rich biodiversity.",
    image: "https://i.pinimg.com/736x/c7/05/3b/c7053b00071376326ee33b32f89c880f.jpg",
    count: 4,
    color: "from-black/70 via-black/30 to-transparent",
    places: [
      {
        name: "Bandaje",
        image: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/17382423906991-716815907.png",
        rating: 4.9,
        description: "Bandaje main trek featuring Rani Jhari viewpoint and Kalaguru tea estates.",
      },
      {
        name: "Gangadikal",
        image: "https://www.adventurush.com/wp-content/uploads/2023/10/gangadikal-trek-07.jpg",
        rating: 4.8,
        description: "Scenic shola forest trek including Samse estate and Soormane falls.",
      },
      {
        name: "Kurinjal",
        image: "https://bynekaadu.com/wp-content/uploads/2024/09/Overview-of-Kurinjal-Peak-Trek.jpg",
        rating: 4.8,
        description: "Misty peak trek in Kudremukh with diverse flora and fauna trails.",
      },
      {
        name: "Narasimha Parvatha",
        image: "https://res.cloudinary.com/doufbrgld/image/upload/v1767109253/varanga-jain_fm1izk.jpg",
        rating: 4.9,
        description: "Highest peak in Agumbe offering rainforest trails and temple heritage.",
      },
    ],
  }
]

const heroImages = [
  "https://i.pinimg.com/736x/c7/05/3b/c7053b00071376326ee33b32f89c880f.jpg",
  "https://res.cloudinary.com/doufbrgld/image/upload/v1767109253/gangadikal_vrguo6.jpg"
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const { hash } = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setActiveCategory(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }
  }, [hash]);

  const scrollToCategory = (id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-64 pb-48 px-4 overflow-hidden">
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentHeroImage === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] scale-110 ease-out"
              style={{ backgroundImage: `url("${src}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
          </div>
        ))}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="text-[#d4af37] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block drop-shadow-lg">Explore Nature</span>
            <h1 className="font-serif text-5xl sm:text-7xl text-white mb-8 leading-tight drop-shadow-2xl">
              Wild & <span className="italic text-[#d4af37]">Green</span>
            </h1>
            <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Discover the emerald heart of Karnataka. Our curated nature experiences take you deep into the biodiversity of the Western Ghats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            {categoriesData.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`group relative aspect-[4/3] max-w-lg w-full rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl border-2 ${
                  activeCategory === category.id ? "border-[#d66d51]" : "border-transparent"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">{category.count} Expeditons</span>
                  <h3 className="font-serif text-3xl mb-3">{category.name}</h3>
                  <p className="text-white/80 text-[11px] font-medium leading-relaxed line-clamp-2 mb-6">{category.description}</p>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Explore Expeditions
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {categoriesData.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="py-32 px-4 scroll-mt-24 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-stone-100 pb-12">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-emerald-600 font-black tracking-[0.3em] text-[10px] uppercase">
                    {category.count} Nature Treks
                  </span>
                </div>
                <h2 className="font-serif text-4xl text-zinc-900 mb-6 italic">{category.name}</h2>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{category.description}</p>
              </div>
              
              <Link
                to="/destinations"
                className="inline-flex items-center justify-center gap-3 px-5 py-3 md:px-10 md:py-5 bg-zinc-900 text-white font-black uppercase tracking-widest text-[8px] md:text-[10px] rounded-lg hover:bg-emerald-600 transition-all shadow-xl group w-fit"
              >
                <span>View All Treks</span>
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.places.map((place, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden m-2 rounded-2xl">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span className="font-black text-zinc-900 text-[10px]">{place.rating}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl text-zinc-900 group-hover:text-emerald-600 transition-colors mb-3 line-clamp-1">
                      {place.name}
                    </h3>
                    <p className="text-zinc-400 text-[11px] font-medium leading-relaxed mb-6 line-clamp-2">{place.description}</p>
                    <Link
                      to="/destinations"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 hover:text-emerald-600 transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 bg-zinc-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-6xl text-white mb-8 leading-tight">
            Ready to Discover <br/> <span className="italic text-[#d4af37]">Karnataka's Wilderness?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 font-light max-w-2xl mx-auto">
            Let our nature experts help you plan the perfect weekend expedition across these majestic peaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#d4af37] text-white font-black uppercase tracking-widest text-[10px] rounded-lg hover:brightness-110 transition-all shadow-2xl"
            >
              Plan Your Trek
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
