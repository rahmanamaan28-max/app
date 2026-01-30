import { Button } from '../components/ui/button';
import { 
  ArrowRight,
  Instagram,
  Send,
  Clock,
  MessageCircle,
  MapPin
} from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const contactMethods = [
  {
    icon: Send,
    title: 'Telegram',
    value: 'OnTheGo Travels',
    link: 'https://t.me/OnTheGoTravels',
    color: 'bg-sky-500',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@onthegotravels26',
    link: 'https://instagram.com/onthegotravels26',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
];

export const ContactPage = () => {
  return (
    <div data-testid="contact-page" className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have questions? Want to plan a trip? We're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 bg-slate-50 border-b border-slate-200">
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  Send Us an Enquiry
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              {/* Google Form Embed */}
              <div className="relative">
                <iframe
                  src={`${GOOGLE_FORM_URL.replace('/viewform', '/viewform?embedded=true')}`}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Enquiry Form"
                  data-testid="google-form-iframe"
                  className="w-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 text-lg mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`contact-method-${index}`}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className={`${method.color} p-3 rounded-xl text-white`}>
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{method.title}</p>
                      <p className="text-sm text-slate-600">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 ml-auto" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-sky-50 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Response Time</h4>
                  <p className="text-slate-600 text-sm">
                    We usually respond within 24 hours. For urgent queries, reach out via Telegram for faster response.
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-500" />
                Working Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monday - Saturday</span>
                  <span className="text-slate-900 font-medium">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="text-slate-900 font-medium">11:00 AM - 5:00 PM</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                * We're available for urgent travel support even outside these hours
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-slate-500" />
                What to Expect
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                  We'll acknowledge your enquiry within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                  Our team will call you to discuss requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                  You'll receive a personalized quote within 48 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                  No spam, no pressure — just honest help
                </li>
              </ul>
            </div>

            {/* Location Note */}
            <div className="bg-slate-900 p-6 rounded-2xl text-white">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Based in India</h4>
                  <p className="text-sm text-slate-300">
                    Specializing in North-East India, Himalayas, Nepal, Bhutan, Kerala & Tamil Nadu trips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
