import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Packages', path: '/packages' },
  { name: 'How to Book', path: '/how-to-book' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-lg'
            : 'bg-white/80'
        } backdrop-blur-md border border-slate-200/50 rounded-full px-4 md:px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            data-testid="navbar-logo"
            className="flex items-center gap-2 font-serif font-bold text-slate-900 text-lg"
          >
            <MapPin className="w-5 h-5 text-amber-500" />
            <span className="hidden sm:inline">OnTheGo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="navbar-cta"
            >
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-4 md:px-6 py-2 text-sm font-medium transition-all active:scale-95"
              >
                Plan My Trip
              </Button>
            </a>
            
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          data-testid="mobile-menu"
          className="fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-md lg:hidden animate-fade-in"
        >
          <div className="flex flex-col items-center gap-6 py-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
