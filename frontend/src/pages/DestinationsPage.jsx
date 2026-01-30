import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Mountain, 
  TreePine, 
  Plane, 
  Palmtree,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  MapPin
} from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const filters = [
  { id: 'all', name: 'All', icon: MapPin },
  { id: 'mountains', name: 'Mountains', icon: Mountain },
  { id: 'nature', name: 'Nature', icon: TreePine },
  { id: 'international', name: 'International', icon: Plane },
  { id: 'south', name: 'South India', icon: Palmtree },
];

const destinations = [
  {
    id: 'sikkim',
    name: 'Sikkim',
    keywords: ['Snow', 'Monasteries', 'Lakes'],
    image: 'https://images.unsplash.com/photo-1554039363-bb1ab89fc855?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'mountains',
    bestTime: 'March - June, October - December',
    duration: '5-7 Days',
    idealFor: 'Families, Couples, Solo Travelers',
    description: 'Experience the mystical beauty of Sikkim with its snow-capped peaks, ancient monasteries, and pristine lakes. From Gangtok to Nathula Pass, every corner offers breathtaking views.',
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    keywords: ['Waterfalls', 'Caves', 'Living Roots'],
    image: 'https://images.unsplash.com/photo-1600298882525-0aa306a5e4d5?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'nature',
    bestTime: 'October - April',
    duration: '4-6 Days',
    idealFor: 'Adventure Seekers, Nature Lovers',
    description: 'Discover the abode of clouds with its living root bridges, stunning waterfalls, and unexplored caves. Meghalaya offers a unique blend of natural wonders and tribal culture.',
  },
  {
    id: 'tawang',
    name: 'Tawang',
    keywords: ['Monastery', 'Mountains', 'Culture'],
    image: 'https://images.unsplash.com/photo-1582534026419-53a6e82a6c9b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'mountains',
    bestTime: 'March - October',
    duration: '6-8 Days',
    idealFor: 'Culture Enthusiasts, Photographers',
    description: 'Home to the largest monastery in India, Tawang is a spiritual haven nestled in the eastern Himalayas. The journey through Sela Pass is as mesmerizing as the destination.',
  },
  {
    id: 'north-bengal',
    name: 'North Bengal',
    keywords: ['Tea Gardens', 'Darjeeling', 'Heritage'],
    image: 'https://images.unsplash.com/photo-1634815752932-94f01ad2f67d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'mountains',
    bestTime: 'March - June, September - November',
    duration: '4-6 Days',
    idealFor: 'Families, Couples',
    description: 'From the toy train of Darjeeling to the tea gardens of Kurseong, North Bengal offers a perfect blend of colonial charm and natural beauty.',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    keywords: ['Mountains', 'Adventure', 'Temples'],
    image: 'https://images.unsplash.com/photo-1629976791862-5749e12b2f40?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'mountains',
    bestTime: 'March - June, September - November',
    duration: '5-10 Days',
    idealFor: 'All Travelers',
    description: 'From Shimla to Spiti, Himachal offers diverse experiences. Whether you seek adventure in Manali or peace in Dharamshala, this state has it all.',
  },
  {
    id: 'nepal',
    name: 'Nepal',
    keywords: ['Everest', 'Temples', 'Adventure'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'international',
    bestTime: 'October - December, March - May',
    duration: '5-8 Days',
    idealFor: 'Adventure Seekers, Pilgrims',
    description: 'The land of Everest and ancient temples. From Kathmandu\'s heritage to Pokhara\'s serenity, Nepal offers spiritual and adventure experiences.',
  },
  {
    id: 'bhutan',
    name: 'Bhutan',
    keywords: ['Happiness', 'Tigers Nest', 'Dzongs'],
    image: 'https://images.unsplash.com/photo-1637552588842-6eb9ddef76e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'international',
    bestTime: 'March - May, September - November',
    duration: '5-7 Days',
    idealFor: 'Couples, Culture Enthusiasts',
    description: 'The last Shangri-La awaits. Experience Gross National Happiness, hike to Tiger\'s Nest, and immerse yourself in Bhutan\'s preserved culture.',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    keywords: ['Backwaters', 'Ayurveda', 'Beaches'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'south',
    bestTime: 'September - March',
    duration: '5-8 Days',
    idealFor: 'Families, Couples, Wellness Seekers',
    description: 'God\'s Own Country offers serene backwaters, rejuvenating Ayurveda, lush hill stations, and pristine beaches. Perfect for relaxation and rejuvenation.',
  },
  {
    id: 'tamilnadu',
    name: 'Tamil Nadu',
    keywords: ['Temples', 'Culture', 'Heritage'],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    category: 'south',
    bestTime: 'November - February',
    duration: '5-8 Days',
    idealFor: 'Culture Enthusiasts, Pilgrims',
    description: 'Ancient temples, rich Dravidian culture, and diverse landscapes. From Madurai to Mahabalipuram, Tamil Nadu is a treasure trove of heritage.',
  },
];

export const DestinationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDest, setSelectedDest] = useState(null);

  const filteredDestinations = activeFilter === 'all'
    ? destinations
    : destinations.filter(d => d.category === activeFilter);

  return (
    <div data-testid="destinations-page" className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Explore Destinations
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From the misty mountains of the North-East to the backwaters of Kerala — discover your perfect getaway.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                data-testid={`filter-${filter.id}`}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, index) => (
              <div
                key={dest.id}
                data-testid={`dest-card-${dest.id}`}
                className="group cursor-pointer"
                onClick={() => setSelectedDest(dest)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">{dest.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {dest.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {dest.duration}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500 font-medium group-hover:underline">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Detail Modal */}
      {selectedDest && (
        <div
          data-testid="destination-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedDest(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={selectedDest.image}
                alt={selectedDest.name}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <button
                data-testid="close-modal"
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">{selectedDest.name}</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedDest.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-sky-100 text-sky-700 text-sm px-4 py-1.5 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">{selectedDest.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Best Time</span>
                  </div>
                  <p className="font-medium text-slate-900">{selectedDest.bestTime}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="font-medium text-slate-900">{selectedDest.duration}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Ideal For</span>
                  </div>
                  <p className="font-medium text-slate-900">{selectedDest.idealFor}</p>
                </div>
              </div>

              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  data-testid="plan-trip-btn"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6 text-lg font-medium"
                >
                  Plan my trip to {selectedDest.name}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="px-6 md:px-12 mt-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Can't find your destination?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            We plan custom trips to many more locations. Tell us where you want to go!
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              data-testid="custom-trip-btn"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-10 py-6 text-lg font-medium"
            >
              Request Custom Trip
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
