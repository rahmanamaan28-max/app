import { useState } from 'react';
import { Button } from '../components/ui/button';
import { 
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Check,
  Star,
  Sparkles
} from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const packages = [
  {
    id: 'sikkim-5d',
    name: 'Sikkim Explorer',
    duration: '4N/5D',
    image: 'https://images.unsplash.com/photo-1554039363-bb1ab89fc855?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    priceRange: '₹12,000 - ₹18,000 per person',
    highlights: ['Gangtok', 'Tsomgo Lake', 'Nathula Pass', 'MG Marg'],
    itinerary: [
      { day: 1, title: 'Arrival in Gangtok', desc: 'Arrive at Bagdogra, transfer to Gangtok. Evening at leisure, explore MG Marg.' },
      { day: 2, title: 'Tsomgo Lake & Baba Mandir', desc: 'Visit the sacred Tsomgo Lake and Baba Harbhajan Singh Mandir.' },
      { day: 3, title: 'Nathula Pass (Optional)', desc: 'Excursion to Indo-China border at Nathula Pass (additional permit required).' },
      { day: 4, title: 'Local Sightseeing', desc: 'Visit Rumtek Monastery, Do Drul Chorten, and Enchey Monastery.' },
      { day: 5, title: 'Departure', desc: 'Morning free, transfer to Bagdogra for departure.' },
    ],
    included: ['Accommodation (3-star)', 'All transfers', 'Sightseeing as per itinerary', 'Driver allowance'],
    notIncluded: ['Flights', 'Meals', 'Nathula permit', 'Personal expenses'],
  },
  {
    id: 'meghalaya-4d',
    name: 'Meghalaya Magic',
    duration: '3N/4D',
    image: 'https://images.unsplash.com/photo-1564577160324-112d603f750f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    priceRange: '₹10,000 - ₹15,000 per person',
    highlights: ['Shillong', 'Cherrapunji', 'Living Root Bridge', 'Dawki'],
    itinerary: [
      { day: 1, title: 'Arrival in Shillong', desc: 'Arrive at Guwahati, transfer to Shillong. Visit Ward\'s Lake and Don Bosco Museum.' },
      { day: 2, title: 'Cherrapunji', desc: 'Full day excursion to Cherrapunji - Seven Sisters Falls, Mawsmai Caves, Eco Park.' },
      { day: 3, title: 'Dawki & Mawlynnong', desc: 'Crystal clear Dawki river, Asia\'s cleanest village Mawlynnong, Living Root Bridge.' },
      { day: 4, title: 'Departure', desc: 'Morning free for shopping, transfer to Guwahati for departure.' },
    ],
    included: ['Accommodation (3-star)', 'All transfers', 'Sightseeing as per itinerary', 'Driver allowance'],
    notIncluded: ['Flights', 'Meals', 'Entry tickets', 'Personal expenses'],
  },
  {
    id: 'bhutan-6d',
    name: 'Bhutan Discovery',
    duration: '5N/6D',
    image: 'https://images.unsplash.com/photo-1637552588842-6eb9ddef76e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    priceRange: '₹35,000 - ₹50,000 per person',
    highlights: ['Thimphu', 'Punakha', 'Paro', 'Tiger\'s Nest'],
    itinerary: [
      { day: 1, title: 'Arrival in Paro', desc: 'Fly to Paro, one of the most scenic landings. Transfer to Thimphu.' },
      { day: 2, title: 'Thimphu Sightseeing', desc: 'Buddha Point, Memorial Chorten, Folk Heritage Museum, Tashichho Dzong.' },
      { day: 3, title: 'Thimphu to Punakha', desc: 'Drive via Dochula Pass (3,100m), visit Punakha Dzong.' },
      { day: 4, title: 'Punakha to Paro', desc: 'Morning visit Chimi Lhakhang, then drive to Paro.' },
      { day: 5, title: 'Tiger\'s Nest Hike', desc: 'Hike to the iconic Taktsang Monastery (Tiger\'s Nest).' },
      { day: 6, title: 'Departure', desc: 'Transfer to Paro airport for departure.' },
    ],
    included: ['Accommodation (3-star)', 'All meals', 'Licensed guide', 'Sustainable Development Fee', 'All permits'],
    notIncluded: ['Flights', 'Tips', 'Personal expenses', 'Travel insurance'],
  },
  {
    id: 'kerala-6d',
    name: 'Kerala Essence',
    duration: '5N/6D',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    priceRange: '₹18,000 - ₹28,000 per person',
    highlights: ['Munnar', 'Thekkady', 'Alleppey', 'Houseboat'],
    itinerary: [
      { day: 1, title: 'Arrival in Cochin', desc: 'Arrive at Cochin, visit Fort Kochi, Chinese Fishing Nets, St. Francis Church.' },
      { day: 2, title: 'Cochin to Munnar', desc: 'Scenic drive to Munnar through tea plantations, waterfalls en route.' },
      { day: 3, title: 'Munnar Sightseeing', desc: 'Eravikulam National Park, Tea Museum, Mattupetty Dam, Echo Point.' },
      { day: 4, title: 'Munnar to Thekkady', desc: 'Drive to Thekkady, evening Kathakali dance show.' },
      { day: 5, title: 'Thekkady to Alleppey', desc: 'Morning spice garden visit, drive to Alleppey. Overnight houseboat cruise.' },
      { day: 6, title: 'Departure', desc: 'Disembark houseboat, transfer to Cochin airport for departure.' },
    ],
    included: ['Accommodation (3-star + Houseboat)', 'Houseboat meals', 'All transfers', 'Sightseeing'],
    notIncluded: ['Flights', 'Meals (except houseboat)', 'Entry tickets', 'Personal expenses'],
  },
  {
    id: 'tawang-7d',
    name: 'Tawang Adventure',
    duration: '6N/7D',
    image: 'https://images.unsplash.com/photo-1582534026419-53a6e82a6c9b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    priceRange: '₹20,000 - ₹30,000 per person',
    highlights: ['Guwahati', 'Bomdila', 'Tawang Monastery', 'Sela Pass'],
    itinerary: [
      { day: 1, title: 'Arrival in Guwahati', desc: 'Arrive at Guwahati, visit Kamakhya Temple. Overnight stay.' },
      { day: 2, title: 'Guwahati to Bomdila', desc: 'Long scenic drive to Bomdila through changing landscapes.' },
      { day: 3, title: 'Bomdila to Tawang', desc: 'Cross the stunning Sela Pass (13,700 ft), visit Jaswant Garh War Memorial.' },
      { day: 4, title: 'Tawang Sightseeing', desc: 'Tawang Monastery (largest in India), War Memorial, local market.' },
      { day: 5, title: 'Bumla Pass & Madhuri Lake', desc: 'Excursion to Indo-China border at Bumla, visit Madhuri Lake (PTSO Lake).' },
      { day: 6, title: 'Tawang to Bomdila', desc: 'Return journey to Bomdila via Sela Pass.' },
      { day: 7, title: 'Bomdila to Guwahati', desc: 'Drive back to Guwahati for departure.' },
    ],
    included: ['Accommodation', 'All transfers', 'Permits (ILP)', 'Driver allowance'],
    notIncluded: ['Flights', 'Meals', 'Bumla permit (additional)', 'Personal expenses'],
  },
  {
    id: 'nepal-5d',
    name: 'Nepal Highlights',
    duration: '4N/5D',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
    priceRange: '₹15,000 - ₹25,000 per person',
    highlights: ['Kathmandu', 'Pokhara', 'Pashupatinath', 'Phewa Lake'],
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', desc: 'Arrive at Tribhuvan Airport, transfer to hotel. Evening at Thamel.' },
      { day: 2, title: 'Kathmandu Valley', desc: 'Pashupatinath Temple, Boudhanath Stupa, Swayambhunath (Monkey Temple).' },
      { day: 3, title: 'Kathmandu to Pokhara', desc: 'Scenic drive or flight to Pokhara. Evening at Lakeside.' },
      { day: 4, title: 'Pokhara Sightseeing', desc: 'Sarangkot sunrise, Phewa Lake boating, Davis Falls, Gupteshwor Cave.' },
      { day: 5, title: 'Departure', desc: 'Transfer to Kathmandu/Pokhara airport for departure.' },
    ],
    included: ['Accommodation (3-star)', 'All transfers', 'Sightseeing as per itinerary'],
    notIncluded: ['Flights', 'Meals', 'Entry tickets', 'Personal expenses', 'Visa fees'],
  },
];

export const PackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div data-testid="packages-page" className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Sample Itineraries
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            These are sample plans to give you an idea. Every trip is fully customizable based on your preferences and budget.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            All packages are 100% customizable
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                data-testid={`package-card-${pkg.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group"
              >
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    Customizable
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                        +{pkg.highlights.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-amber-600 font-semibold mb-4">{pkg.priceRange}</p>
                  <Button
                    data-testid={`view-package-${pkg.id}`}
                    onClick={() => setSelectedPackage(pkg)}
                    variant="outline"
                    className="w-full rounded-full"
                  >
                    View Sample Plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div
          data-testid="package-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 md:h-72">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-t-3xl" />
              <button
                data-testid="close-package-modal"
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedPackage.duration}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    Customizable
                  </span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white">{selectedPackage.name}</h2>
              </div>
            </div>

            <div className="p-8">
              {/* Price & Highlights */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Price Range (per person)</p>
                  <p className="text-2xl font-bold text-amber-600">{selectedPackage.priceRange}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedPackage.highlights.map((h) => (
                    <span key={h} className="bg-sky-100 text-sky-700 text-sm px-3 py-1.5 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 text-lg mb-4">Day-wise Itinerary</h3>
                <div className="space-y-4">
                  {selectedPackage.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-slate-900 mb-1">{day.title}</h4>
                        <p className="text-sm text-slate-600">{day.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {selectedPackage.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-emerald-700">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-slate-700 mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {selectedPackage.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Note */}
              <div className="bg-amber-50 p-4 rounded-xl mb-8 text-sm text-amber-800">
                <p className="font-medium mb-1">Note:</p>
                <p>This is a sample itinerary. Actual pricing depends on travel dates, hotel category, group size, and customizations. We'll create a personalized plan just for you.</p>
              </div>

              {/* CTA */}
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  data-testid="customize-package-btn"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6 text-lg font-medium"
                >
                  Customize This Trip
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
            Want a completely custom trip?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Don't see what you're looking for? We specialize in creating unique itineraries from scratch.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              data-testid="custom-plan-btn"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-10 py-6 text-lg font-medium"
            >
              Request Custom Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
