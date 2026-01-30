import { Button } from '../components/ui/button';
import { 
  ArrowRight,
  Check,
  X,
  Info,
  Calendar,
  Users,
  Hotel,
  Car,
  Mountain,
  Wallet
} from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const priceFactors = [
  {
    icon: Calendar,
    title: 'Travel Season',
    description: 'Peak season (Oct-May) costs more due to high demand. Off-season offers great discounts.',
  },
  {
    icon: Hotel,
    title: 'Hotel Category',
    description: 'Budget, Standard (3-star), or Premium (4-5 star). We have options for every budget.',
  },
  {
    icon: Users,
    title: 'Group Size',
    description: 'Larger groups get better per-person rates. Solo travelers can join group departures.',
  },
  {
    icon: Car,
    title: 'Vehicle Type',
    description: 'Sedan, SUV, or Tempo Traveller. Choice depends on group size and terrain.',
  },
  {
    icon: Mountain,
    title: 'Activities',
    description: 'Trekking, rafting, local experiences. Add only what interests you.',
  },
  {
    icon: Wallet,
    title: 'Your Budget',
    description: 'Tell us your budget and we\'ll design the best possible trip within it.',
  },
];

const included = [
  'Accommodation as per itinerary',
  'All transfers and sightseeing by private vehicle',
  'Driver allowance, fuel, parking, toll taxes',
  'All applicable permits (Inner Line Permit, etc.)',
  'Basic travel assistance',
  'Detailed day-wise itinerary document',
];

const notIncluded = [
  'Flight/train tickets to and from destination',
  'Meals (unless specified)',
  'Entry tickets to monuments/attractions',
  'Personal expenses (tips, shopping, laundry)',
  'Travel insurance',
  'Anything not mentioned in inclusions',
];

const paymentPolicy = [
  { title: 'Booking Advance', value: '20-30%', desc: 'To confirm your booking' },
  { title: 'Second Installment', value: '40-50%', desc: '15 days before trip start' },
  { title: 'Balance Payment', value: 'Remaining', desc: 'Before trip start or during trip' },
];

export const PricingPage = () => {
  return (
    <div data-testid="pricing-page" className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Pricing & Transparency
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            No surprises. Ever. Here's exactly how we calculate your trip cost.
          </p>
        </div>
      </section>

      {/* Sample Price Breakdown - Receipt Style */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg">
            <div className="text-center mb-8 pb-6 border-b border-dashed border-slate-200">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                Sample Cost Breakdown
              </h2>
              <p className="text-slate-500 text-sm">5N/6D Sikkim Trip • 2 Persons • 3-Star Hotels</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { item: 'Accommodation (5 nights)', amount: '₹15,000' },
                { item: 'Vehicle + Driver (6 days)', amount: '₹18,000' },
                { item: 'Permits & Entry Fees', amount: '₹1,500' },
                { item: 'Driver Allowance', amount: '₹3,000' },
                { item: 'Service Fee (Planning + Support)', amount: '₹2,500' },
              ].map((line, index) => (
                <div key={index} className="flex justify-between items-center text-slate-700">
                  <span>{line.item}</span>
                  <span className="font-medium">{line.amount}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-slate-200 pt-6">
              <div className="flex justify-between items-center text-lg font-bold text-slate-900 mb-2">
                <span>Total Cost</span>
                <span>₹40,000</span>
              </div>
              <div className="flex justify-between items-center text-amber-600 font-semibold">
                <span>Per Person</span>
                <span>₹20,000</span>
              </div>
            </div>

            <div className="mt-6 bg-sky-50 p-4 rounded-xl text-sm text-sky-700">
              <Info className="w-4 h-4 inline mr-2" />
              This is a sample breakdown. Actual costs vary based on your specific requirements.
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="px-6 md:px-12 mb-20 bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              What Affects Your Trip Cost?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Understanding these factors helps you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceFactors.map((factor, index) => (
              <div
                key={index}
                data-testid={`price-factor-${index}`}
                className="bg-white p-6 rounded-2xl hover:shadow-md transition-all"
              >
                <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{factor.title}</h3>
                <p className="text-sm text-slate-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              What's Included & Not Included
            </h2>
            <p className="text-slate-600">
              Clear expectations = happy travels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <div className="bg-emerald-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-emerald-800 text-lg mb-6 flex items-center gap-2">
                <Check className="w-6 h-6" />
                Typically Included
              </h3>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-emerald-700">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-slate-100 p-8 rounded-2xl">
              <h3 className="font-semibold text-slate-700 text-lg mb-6 flex items-center gap-2">
                <X className="w-6 h-6" />
                Not Included
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <X className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Policy */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
              Payment Policy
            </h2>
            <p className="text-slate-600">
              Flexible payment options to suit your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentPolicy.map((policy, index) => (
              <div
                key={index}
                data-testid={`payment-policy-${index}`}
                className="bg-white p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-all"
              >
                <div className="text-4xl font-bold text-slate-900 mb-2">{policy.value}</div>
                <h4 className="font-semibold text-slate-700 mb-1">{policy.title}</h4>
                <p className="text-sm text-slate-500">{policy.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 p-6 rounded-xl text-center">
            <p className="text-amber-800">
              <strong>Note:</strong> Payment terms may vary for international trips and peak season bookings. 
              Full details will be shared in your personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Cancellation */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-3xl">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6 text-center">
            Cancellation Policy
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { period: '30+ days before trip', refund: '90% refund (10% processing fee)' },
              { period: '15-30 days before trip', refund: '70% refund' },
              { period: '7-15 days before trip', refund: '50% refund' },
              { period: 'Less than 7 days', refund: 'No refund (case-by-case consideration)' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-white p-4 rounded-xl">
                <span className="text-slate-700">{item.period}</span>
                <span className="font-medium text-slate-900">{item.refund}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            * Refunds subject to hotel and vendor cancellation policies
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Personalized Quote
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Tell us your requirements and we'll create a transparent, detailed cost breakdown just for you.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              data-testid="get-quote-btn"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-10 py-6 text-lg font-medium"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
