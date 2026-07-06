const navBarLinks = [
  { name: 'Accueil', url: '/screwfast/fr' },
  { name: 'Produits', url: '/screwfast/fr/products' },
  { name: 'Services', url: '/screwfast/fr/services' },
  { name: 'Blog', url: '/screwfast/fr/blog' },
  { name: 'Contact', url: '/screwfast/fr/contact' },
];

const footerLinks = [
  {
    section: 'Écosystème',
    links: [
      { name: 'Documentation', url: '/screwfast/fr/welcome-to-docs/' },
      { name: 'Outils et Équipements', url: '/screwfast/fr/products' },
      { name: 'Services de Construction', url: '/screwfast/fr/services' },
    ],
  },
  {
    section: 'Société',
    links: [
      { name: 'À propos de nous', url: '#' },
      { name: 'Blog', url: '/screwfast/fr/blog' },
      { name: 'Carrières', url: '#' },
      { name: 'Clients', url: '#' },
    ],
  },
];

const socialLinks = {
  facebook: '#',
  x: '#',
  github: '#',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
