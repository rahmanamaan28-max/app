import { Link } from 'react-router-dom';
import { MapPin, Instagram, Send, MessageCircle } from 'lucide-react';
import siteConfig from '../config/siteConfig';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { social, quickLinks } = siteConfig;

  return (
    <footer data-testid="footer" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-amber-500" />
              <span className="font-serif font-bold text-xl">{siteConfig.businessName}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Honest, transparent travel planning across North-East India, Himalayas & beyond. No middlemen, no hidden costs.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {social.instagram.enabled && (
                <a
                  href={social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-instagram"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {social.telegram.enabled && (
                <a
                  href={social.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-telegram"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </a>
              )}
              {social.whatsapp.enabled && social.whatsapp.url && (
                <a
                  href={social.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
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
              {/* Dynamic Quick Links */}
              {Object.entries(quickLinks).map(([key, link]) => 
                link.enabled && link.url ? (
                  <li key={key}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : null
              )}
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
              {social.telegram.enabled && (
                <li>
                  <a
                    href={social.telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-contact-telegram"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram: {social.telegram.handle}</span>
                  </a>
                </li>
              )}
              {social.instagram.enabled && (
                <li>
                  <a
                    href={social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-contact-instagram"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>{social.instagram.handle}</span>
                  </a>
                </li>
              )}
              {social.whatsapp.enabled && social.whatsapp.url && (
                <li>
                  <a
                    href={social.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-contact-whatsapp"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp: {social.whatsapp.number}</span>
                  </a>
                </li>
              )}
            </ul>
            <a
              href={siteConfig.googleFormUrl}
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
            © {currentYear} {siteConfig.businessName}. All rights reserved.
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
