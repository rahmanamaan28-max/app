import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Shield, 
  Users, 
  Wallet, 
  PhoneCall,
  MapPin,
  Calendar,
  MessageCircle,
  FileText,
  CheckCircle,
  Star,
  ArrowRight,
  Mountain,
  Waves,
  TreePine,
  Building
} from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const destinations = [
  {
    name: 'Sikkim',
    keywords: ['Snow', 'Monasteries', 'Lakes'],
    image: 'https://images.unsplash.com/photo-1554039363-bb1ab89fc855?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
  },
  {
    name: 'Meghalaya',
    keywords: ['Waterfalls', 'Caves', 'Living Roots'],
    image: 'https://images.unsplash.com/photo-1564577160324-112d603f750f?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
  },
  {
    name: 'Tawang',
    keywords: ['Monastery', 'Mountains', 'Culture'],
    image: 'https://images.unsplash.com/photo-1582534026419-53a6e82a6c9b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
  },
  {
    name: 'Bhutan',
    keywords: ['Happiness', 'Tigers Nest', 'Dzongs'],
    image: 'https://images.unsplash.com/photo-1637552588842-6eb9ddef76e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
  },
  {
    name: 'Nepal',
    keywords: ['Everest', 'Temples', 'Adventure'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
  },
  {
    name: 'Kerala',
    keywords: ['Backwaters', 'Ayurveda', 'Beaches'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
  },
];

const trustSignals = [
  { icon: Shield, title: 'Transparent Pricing', desc: 'Know exactly where your money goes' },
  { icon: Users, title: 'Direct Tie-ups', desc: 'Hotels & drivers we personally trust' },
  { icon: Wallet, title: 'Budget-Friendly', desc: 'Custom trips under your budget' },
  { icon: PhoneCall, title: 'Real Support', desc: 'Call-based human assistance' },
];

const howItWorks = [
  { icon: MapPin, title: 'Choose Destination', desc: 'Pick where you want to go' },
  { icon: FileText, title: 'Share Details', desc: 'Tell us your preferences' },
  { icon: PhoneCall, title: 'We Call You', desc: 'Personal consultation' },
  { icon: Calendar, title: 'Get Custom Plan', desc: 'Tailored itinerary' },
  { icon: CheckCircle, title: 'Trip Confirmed', desc: 'Book & travel happy' },
];

const reviews = [
  {
    name: 'Rahul M.',
    location: 'Delhi',
    text: 'First trip with them — smooth & honest. No hidden surprises, exactly what they promised.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    location: 'Mumbai',
    text: 'Finally found an agency that respects budget and delivers quality. Sikkim trip was magical!',
    rating: 5,
  },
  {
    name: 'Amit K.',
    location: 'Bangalore',
    text: 'Transparent pricing and genuine recommendations. Will book again for sure.',
    rating: 5,
  },
];

const whyChooseUs = [
  { text: "We don't sell fixed packages blindly", icon: Building },
  { text: 'We work within your real budget', icon: Wallet },
  { text: 'We explain every cost clearly', icon: FileText },
  { text: 'We stay available before & during your trip', icon: PhoneCall },
];

export const HomePage = () => {
  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative min-h-screen flex items-center bg-gradient-to-b from-sky-50 to-white pt-24 pb-16 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                Travel made{' '}
                <span className="text-amber-500">simple</span>,{' '}
                <span className="text-sky-600">honest</span> &{' '}
                <span className="text-emerald-600">comfortable</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                Budget & custom trips across North-East, Himalayas & beyond — no middlemen, no hidden costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    data-testid="hero-cta-primary"
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-lg font-medium transition-all active:scale-95 flex items-center gap-2"
                  >
                    Get a Custom Trip Plan
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <Link to="/destinations">
                  <Button
                    data-testid="hero-cta-secondary"
                    variant="outline"
                    className="bg-white text-slate-900 border-slate-200 hover:bg-slate-50 rounded-full px-8 py-6 text-lg font-medium transition-all"
                  >
                    See Destinations
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in stagger-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1624725412168-a8e69d4f7b36?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                  alt="Beautiful mountain landscape"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Mountain className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">500+ Trips</p>
                  <p className="text-sm text-slate-500">Happy Travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section data-testid="trust-signals-section" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div
                key={signal.title}
                data-testid={`trust-signal-${index}`}
                className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100"
              >
                <div className="bg-sky-100 p-4 rounded-xl">
                  <signal.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{signal.title}</h3>
                <p className="text-sm text-slate-500">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section data-testid="destinations-section" className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore breathtaking locations across India and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Link
                key={dest.name}
                to="/destinations"
                data-testid={`destination-card-${index}`}
                className="relative overflow-hidden rounded-2xl aspect-[4/5] group cursor-pointer"
              >
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
                  <div className="mt-4 flex items-center gap-2 text-amber-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    View trips <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button
                data-testid="view-all-destinations"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg"
              >
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section data-testid="how-it-works-section" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Simple steps to your dream trip
            </p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  data-testid={`how-it-works-step-${index}`}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 bg-white p-2">
                    <div className="bg-slate-900 text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-amber-500 font-bold text-sm mb-2">Step {index + 1}</span>
                  <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                data-testid="start-planning-btn"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-lg font-medium"
              >
                Start Planning Your Trip
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section data-testid="why-choose-us-section" className="py-20 px-6 md:px-12 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We're not a big company — and that's our strength. We believe in honest conversations, transparent pricing, and trips that actually fit your budget.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    data-testid={`why-us-${index}`}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-emerald-100 p-2 rounded-lg shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-slate-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Happy travelers"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="font-serif text-4xl font-bold">100%</p>
                <p className="text-sm">Transparent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section data-testid="reviews-section" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real experiences from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                data-testid={`review-card-${index}`}
                className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-slate-600">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section data-testid="final-cta-section" className="py-24 px-6 md:px-12 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to plan your trip?
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Tell us your idea — we'll handle the rest. No pressure, no hidden costs, just honest travel planning.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              data-testid="final-cta-btn"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-10 py-6 text-lg font-medium transition-all active:scale-95"
            >
              Get a Custom Trip Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
