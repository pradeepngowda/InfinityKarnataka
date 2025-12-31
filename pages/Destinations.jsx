
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LandingPageLayout from '../components/ui/LandingPageLayout';
import DestinationCard from './components/DestinationCard';
import DestinationFilters from './components/DestinationFilters';
import DestinationModal from './components/DestinationModal';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';

const DestinationsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [sortBy, setSortBy] = useState('popular');

  const destinations = [
    {
      id: 1,
      name: "Bandaje",
      category: "nature",
      image: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/17382423906991-716815907.png",
      imageAlt: "Bandaje Arbi Falls and Rani Jhari trek",
      location: "Belthangady, Dakshina Kannada",
      description: "Day 1: Bandaje main trek (Rani jhari) complementary. Day 2: Kalaguru tea estate. A perfect blend of challenging heights and serene estates.",
      significance: "Features the stunning Bandaje Arbi falls and the breathtaking Rani Jhari viewpoint.",
      price: "₹4,199",
      timeline: "Available Year-round",
      highlights: ["Bandaje Main Trek", "Rani Jhari Viewpoint", "Kalaguru Tea Estate"],
      bestTime: "September to March",
      duration: "2 Days",
      difficulty: "Challenging",
      exclusiveAccess: "Includes complementary Rani Jhari guide and estate entry."
    },
    {
      id: 2,
      name: "Gangadikal",
      category: "nature",
      image: "https://www.adventurush.com/wp-content/uploads/2023/10/gangadikal-trek-07.jpg",
      imageAlt: "Gangadikal trek Kudremukh",
      location: "Kudremukh Range, Samse",
      description: "Day 1: Gangadikal main trek. Day 2: Samse estate, Ganesha temple, Soormane falls, and Kalasa hanging bridge.",
      significance: "One of the most scenic shola forest treks in the Kudremukh National Park range.",
      price: "₹4,199",
      timeline: "Restricted in Peak Monsoon",
      highlights: ["Gangadikal Peak", "Samse Estate", "Soormane Falls", "Kalasa Hanging Bridge"],
      bestTime: "October to February",
      duration: "2 Days",
      difficulty: "Moderate",
      exclusiveAccess: "Guided forest trail and Samse estate heritage walk."
    },
    {
      id: 3,
      name: "Kurinjal",
      category: "nature",
      image: "https://bynekaadu.com/wp-content/uploads/2024/09/Overview-of-Kurinjal-Peak-Trek.jpg",
      imageAlt: "Kurinjal trek Kudremukh",
      location: "Kudremukh, Karnataka",
      description: "Day 1: Kurinjal trek. Day 2: Samse estate, Ganesha temple, Soormane falls, and Kalasa hanging bridge.",
      significance: "Famous for its misty peaks and diverse flora and fauna of the Western Ghats.",
      price: "₹4,299",
      timeline: "Available in Post-Monsoon",
      highlights: ["Kurinjal Trek", "Ganesha Temple", "Soormane Falls", "Kalasa Hanging Bridge"],
      bestTime: "September to January",
      duration: "2 Days",
      difficulty: "Moderate",
      exclusiveAccess: "Forest department approved guides and local Samse experiences."
    },
    {
      id: 4,
      name: "Narasimha Parvatha",
      category: "temples",
      image: "https://kudremukhnationalpark.org/wp-content/uploads/2024/11/narasimha-parvatha-trek-1-scaled-e1732274149593.webp",
      imageAlt: "Narasimha Parvatha Agumbe",
      location: "Agumbe / Sringeri",
      description: "Day 1: Narasimha Parvatha trek. Day 2: Koodlu theertha falls, Varanga Jain temple, and Sringeri temple.",
      significance: "The highest peak in Agumbe, offering a journey through dense rainforest and ancient spirituality.",
      price: "₹4,399",
      timeline: "Best after Monsoons",
      highlights: ["Narasimha Parvatha Peak", "Koodlu Theertha Falls", "Varanga Jain Temple", "Sringeri Temple"],
      bestTime: "October to March",
      duration: "2 Days",
      difficulty: "Challenging",
      exclusiveAccess: "Rainforest expert guidance and temple heritage tours."
    }
  ];

  useEffect(() => {
    const params = new URLSearchParams(location?.search);
    const category = params?.get('category');
    if (category) {
      setActiveFilter(category);
    }
  }, [location]);

  const filteredDestinations = activeFilter === 'all' ?
    destinations :
    destinations?.filter((dest) => dest?.category === activeFilter);

  const sortedDestinations = [...filteredDestinations]?.sort((a, b) => {
    if (sortBy === 'name') return a?.name?.localeCompare(b?.name);
    if (sortBy === 'duration') return a?.duration?.localeCompare(b?.duration);
    return 0;
  });

  return (
    <LandingPageLayout>
      <div className="min-h-screen bg-white">
        <section className="bg-[#e9eff2] pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-zinc-900 mb-6 italic">
              Karnataka <span className="text-[#d4af37]">Treks</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed">
              Experience the Western Ghats with our curated 2-day itineraries.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-stone-100 sticky top-20 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <DestinationFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              resultCount={sortedDestinations?.length} />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {sortedDestinations?.length > 0 ?
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
                {sortedDestinations?.map((destination) =>
                  <DestinationCard
                    key={destination?.id}
                    destination={destination}
                    onClick={() => setSelectedDestination(destination)} />
                )}
              </div> :
              <div className="text-center py-24 bg-stone-50 rounded-3xl border border-dashed border-stone-200">
                <Icon name="MapPin" size={64} className="text-zinc-300 mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-semibold text-zinc-900 mb-2 italic">
                  No destinations found
                </h3>
                <p className="text-zinc-500 mb-8 font-light">
                  Try adjusting your filters to see more results.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setActiveFilter('all')}
                  iconName="RotateCcw">
                  Reset Filters
                </Button>
              </div>
            }
          </div>
        </section>

        <section className="py-24 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Ready for the <span className="italic text-[#d4af37]">Trek</span>?
            </h2>
            <p className="text-lg text-zinc-400 mb-12 font-light">
              Secure your spot for the next weekend expedition.
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              onClick={() => navigate('/contact')}>
              Inquire Now
            </Button>
          </div>
        </section>
      </div>

      {selectedDestination &&
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)} />
      }
    </LandingPageLayout>);
};

export default DestinationsPage;
