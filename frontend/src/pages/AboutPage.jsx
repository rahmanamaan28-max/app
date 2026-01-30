import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  ArrowRight,
  Heart,
  Shield,
  Users,
  MapPin,
  Target,
  Sparkles,
  Instagram,
  Send
} from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const values = [
  {
    icon: Shield,
    title: 'Transparency First',
    description: 'No hidden costs, no surprises. We show you exactly where your money goes.',
  },
  {
    icon: Heart,
    title: 'Budget Respect',
    description: 'We work within YOUR budget, not push you to spend more.',
  },
  {
    icon: Users,
    title: 'Personal Touch',
    description: 'Real conversations, not automated responses. We know your name.',
  },
  {
    icon: Target,
    title: 'Honest Recommendations',
    description: 'We suggest what\'s best for you, not what gives us higher margins.',
  },
];

const specializations = [
  'Sikkim & Darjeeling',
  'Meghalaya & Assam',
  'Tawang & Arunachal',
  'Himachal Pradesh',
  'Nepal',
  'Bhutan',
  'Kerala',
  'Tamil Nadu',
];

export const AboutPage = () => {
  return (
    <div data-testid="about-page" className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                We're not a big company — and that's our <span className="text-amber-500">strength</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                OnTheGo Travels was born from frustration. Frustration with inflated prices, hidden costs, and agencies that treat travelers as transactions, not people.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We started with a simple belief: travel should be accessible, honest, and stress-free. Every trip we plan reflects this belief.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Team travel planning"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Since 2024</p>
                    <p className="text-sm text-slate-500">Making travel honest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-12 mb-20 bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              Our Story
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="mb-6">
              It started with a bad travel experience. Quoted one price, charged another. Promised luxury, delivered mediocrity. No one to call when things went wrong.
            </p>
            <p className="mb-6">
              We thought: there has to be a better way. A way to plan trips where the traveler knows exactly what they're paying for. Where someone actually picks up the phone. Where budget doesn't mean compromising on the experience.
            </p>
            <p className="mb-6">
              So we started OnTheGo Travels. Not as another travel agency, but as a team that genuinely cares about your trip. We've traveled to every destination we recommend. We know the local drivers personally. We've stayed in the hotels we suggest.
            </p>
            <p className="font-medium text-slate-900">
              Today, we're proud to say that most of our travelers come through referrals. That's the only metric that matters to us.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              What We Believe In
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                data-testid={`value-card-${index}`}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="bg-sky-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-sky-50 to-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Regions We Specialize In
            </h2>
            <p className="text-slate-600">
              We focus on destinations we truly know and love
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((region, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-colors cursor-default"
              >
                <MapPin className="w-4 h-4 inline mr-1" />
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-slate-600">
              Follow our journey and travel stories
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/onthegotravels26"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-instagram"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              @onthegotravels26
            </a>
            <a
              href="https://t.me/OnTheGoTravels"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-telegram"
              className="flex items-center gap-3 bg-sky-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5" />
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Plan Your Next Adventure
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Ready to experience travel done right? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                data-testid="about-enquiry-btn"
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-10 py-6 text-lg font-medium"
              >
                Start Planning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/destinations">
              <Button
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 rounded-full px-10 py-6 text-lg font-medium"
              >
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
