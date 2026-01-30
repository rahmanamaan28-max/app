import { Link } from 'react-router-dom';
import { MapPin, Instagram, Send, Mail, Phone } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-amber-500" />
              <span className="font-serif font-bold text-xl">OnTheGo Travels</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Honest, transparent travel planning across North-East India, Himalayas & beyond. No middlemen, no hidden costs.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/onthegotravels26"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram"
                className="text-slate-400 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/OnTheGoTravels"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-telegram"
                className="text-slate-400 hover:text-amber-500 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Destinations', 'Packages', 'How to Book', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    data-testid={`footer-link-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-white mb-4">Top Destinations</h4>
            <ul className="space-y-3">
              {['Sikkim', 'Meghalaya', 'Tawang', 'Bhutan', 'Nepal'].map((item) => (
                <li key={item}>
                  <Link
                    to="/destinations"
                    data-testid={`footer-dest-${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/OnTheGoTravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-contact-telegram"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram: OnTheGo Travels</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/onthegotravels26"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-contact-instagram"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@onthegotravels26</span>
                </a>
              </li>
            </ul>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-enquiry-btn"
              className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 py-2 text-sm font-medium transition-all"
            >
              Send Enquiry
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} OnTheGo Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/about" className="text-slate-500 hover:text-white text-sm transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-slate-500 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
