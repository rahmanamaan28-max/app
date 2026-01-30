// Site Configuration - Edit this file to update links and contact info
// Changes will reflect across the entire website

export const siteConfig = {
  // Business Info
  businessName: "OnTheGo Travels",
  tagline: "Travel made simple, honest & comfortable",
  
  // Main CTA - Google Form
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc5lFNPXDoW-5uUaeNJ_wATz970qxwa7yAWfiFOEsXMheXpHQ/viewform?usp=header",
  
  // Social Links - Set to null to hide
  social: {
    telegram: {
      handle: "@OnTheGoTravels",
      url: "https://t.me/OnTheGoTravels",
      enabled: true,
    },
    instagram: {
      handle: "@onthegotravels26",
      url: "https://instagram.com/onthegotravels26",
      enabled: true,
    },
    whatsapp: {
      number: null, // e.g., "+919876543210"
      url: null,    // e.g., "https://wa.me/919876543210"
      enabled: false,
    },
    facebook: {
      handle: null,
      url: null,
      enabled: false,
    },
    youtube: {
      handle: null,
      url: null,
      enabled: false,
    },
    twitter: {
      handle: null,
      url: null,
      enabled: false,
    },
  },
  
  // Contact Info
  contact: {
    email: null, // e.g., "hello@onthegotravels.com"
    phone: null, // e.g., "+91 98765 43210"
    workingHours: {
      weekdays: "10:00 AM - 7:00 PM",
      saturday: "10:00 AM - 7:00 PM", 
      sunday: "11:00 AM - 5:00 PM",
    },
  },
  
  // Quick Links - Add external links here
  quickLinks: {
    tripAdvisor: {
      label: "TripAdvisor Reviews",
      url: null,
      enabled: false,
    },
    googleReviews: {
      label: "Google Reviews", 
      url: null,
      enabled: false,
    },
    customLink1: {
      label: "Custom Link 1",
      url: null,
      enabled: false,
    },
    customLink2: {
      label: "Custom Link 2",
      url: null,
      enabled: false,
    },
  },
  
  // Feature Toggles
  features: {
    showWhatsAppButton: false, // Floating WhatsApp button
    showNewsletter: false,     // Newsletter signup in footer
    showBlogLink: false,       // Blog link in nav
  },
};

export default siteConfig;
