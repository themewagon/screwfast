// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/screwfast/' },
  { name: 'Products', url: '/screwfast/products' },
  { name: 'Services', url: '/screwfast/services' },
  { name: 'Blog', url: '/screwfast/blog' },
  { name: 'Contact', url: '/screwfast/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Documentation', url: '/screwfast/welcome-to-docs/' },
      { name: 'Tools & Equipment', url: '/screwfast/products' },
      { name: 'Construction Services', url: '/screwfast/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '#' },
      { name: 'Blog', url: '/screwfast/blog' },
      { name: 'Careers', url: '#' },
      { name: 'Customers', url: '#' },
    ],
  },
];
// An object of links for social icons
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
