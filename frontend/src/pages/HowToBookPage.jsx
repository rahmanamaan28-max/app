import { Button } from '../components/ui/button';
import { 
  MapPin,
  FileText,
  PhoneCall,
  Calendar,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  CreditCard,
  Plane
} from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const steps = [
  {
    icon: MapPin,
    title: 'Choose Your Destination',
    description: 'Browse our destinations or tell us where you want to go. We cover North-East India, Himalayas, and international destinations like Nepal & Bhutan.',
    tip: 'Not sure where to go? We can suggest based on your preferences!',
  },
  {
    icon: FileText,
    title: 'Share Your Details',
    description: 'Fill out our simple enquiry form with your travel dates, group size, budget range, and any specific preferences or requirements.',
    tip: 'The more details you share, the better we can customize your trip.',
  },
  {
    icon: PhoneCall,
    title: 'We Call You',
    description: 'Our travel expert will personally call you within 24 hours to discuss your requirements, answer questions, and understand your expectations.',
    tip: 'Feel free to ask anything — there are no silly questions!',
  },
  {
    icon: Calendar,
    title: 'Get Your Custom Plan',
    description: 'Based on our discussion, we\'ll create a detailed day-by-day itinerary with transparent pricing breakdown. You can request changes until you\'re satisfied.',
    tip: 'We typically provide 2-3 options at different price points.',
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    description: 'Once you approve the plan, pay a small advance to confirm your booking. The remaining amount can be paid in installments or before the trip.',
    tip: 'We accept bank transfers, UPI, and cards. No hidden charges!',
  },
  {
    icon: Plane,
    title: 'Trip Confirmed!',
    description: 'You\'ll receive all booking confirmations, a detailed travel guide, and our 24/7 support number. Pack your bags and get ready for an amazing journey!',
    tip: 'We stay available throughout your trip for any assistance.',
  },
];

const faqs = [
  {
    question: 'How much advance do I need to pay?',
    answer: 'Typically 20-30% of the total trip cost. This varies based on the destination and bookings required.',
  },
  {
    question: 'Can I change my dates after booking?',
    answer: 'Yes, date changes are possible subject to availability. Minimal charges may apply for re-bookings.',
  },
  {
    question: 'What if I need to cancel?',
    answer: 'We have a fair cancellation policy. Refund amount depends on how early you cancel and hotel policies.',
  },
  {
    question: 'Do you provide travel insurance?',
    answer: 'We recommend travel insurance but don\'t include it in packages. We can help you choose the right one.',
  },
];

export const HowToBookPage = () => {
  return (
    <div data-testid="how-to-book-page" className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How to Book
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Booking your dream trip is simple and stress-free. Here's our step-by-step process.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  data-testid={`booking-step-${index}`}
                  className="relative flex gap-6 md:gap-8"
                >
                  {/* Step number */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-sky-50 p-3 rounded-lg text-sm text-sky-700 flex items-start gap-2">
                      <MessageCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{step.tip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-sky-50 to-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Promise to You
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              We believe booking travel should feel reassuring, not confusing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'No Hidden Costs', desc: 'Every expense is listed upfront' },
              { title: 'No Pressure', desc: 'Take your time to decide' },
              { title: 'Full Transparency', desc: 'Know exactly what you\'re paying for' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-sm"
              >
                <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-testid={`faq-${index}`}
                className="bg-slate-50 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all"
              >
                <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Fill out our simple enquiry form and we'll get back to you within 24 hours.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              data-testid="start-enquiry-btn"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-10 py-6 text-lg font-medium"
            >
              Start Your Enquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HowToBookPage;
