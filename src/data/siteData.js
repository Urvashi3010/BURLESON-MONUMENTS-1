/**
 * Single source of truth for REAL business information.
 * Everything here was taken from burlesonmonuments.com — do not invent or alter.
 */
export const business = {
  name: 'Burleson Monuments',
  legalName: 'Burleson Monument Design & Mfg., Inc.',
  founded: 1970,
  tagline:
    'Since 1970, Burleson Monuments has been helping families create an everlasting expression of their devotion and love.',
  address: {
    line1: '216 East Ellison St.',
    line2: 'Burleson, TX 76028',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6726.803541555002!2d-97.317171!3d32.542121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e69af07c3c99f%3A0x36c2000db125b8cf!2s216+E+Ellison+St%2C+Burleson%2C+TX+76028!5e0!3m2!1sen!2sus!4v1436381780525',
  },
  phones: {
    tollFree: { display: '1-800-863-2662', href: 'tel:+18008632662' },
    office: { display: '817-295-2662', href: 'tel:+18172952662' },
    fax: '817-295-3639',
  },
  email: 'info@burlesonmonuments.com',
  hours: [
    { days: 'Tuesday – Friday', time: '10:00am – 5:00pm' },
    { days: 'Saturday', time: '10:00am – 3:00pm' },
    { days: 'Sunday & Monday', time: 'Closed' },
  ],
  acceptsCreditCards: true,
  serviceArea:
    'Burleson Monuments serves the cemeteries in Burleson, Crowley, Joshua, Alvarado, Cleburne, Rendon, Everman, Mansfield, Benbrook, Fort Worth, Arlington, Grand Prairie, Dallas, Plano, Frisco, Trophy Club, Grapevine, Denton, Decatur, Azle, Weatherford, and all cemeteries in the North Central Texas area. We also ship memorials to any cemetery in the United States.',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Ordering / Prices', to: '/ordering' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact Us', to: '/contact' },
];

/** The 20 original categories, in original order. `code` = stock design number shown on the original site.
 *  Each category's image slot name is its `slug` (add src/assets/<slug>.jpg). */
export const categories = [
  { n: 1, slug: 'single-markers-granite', name: 'Single Markers- Granite', short: 'Single Markers', material: 'Granite', code: 'RM9752' },
  { n: 2, slug: 'companion-markers-granite', name: 'Companion Markers- Granite', short: 'Companion Markers', material: 'Granite', code: 'RM9742' },
  { n: 3, slug: 'single-markers-bronze', name: 'Single Markers- Bronze', short: 'Single Markers', material: 'Bronze', code: 'GB42' },
  { n: 4, slug: 'companion-markers-bronze', name: 'Companion Markers- Bronze', short: 'Companion Markers', material: 'Bronze', code: 'GB133' },
  { n: 5, slug: 'double-interment-markers', name: 'Double Interment Markers', short: 'Double Interment Markers' },
  { n: 6, slug: 'single-monuments', name: 'Single Monuments', short: 'Single Monuments', code: 'RM0204' },
  { n: 7, slug: 'companion-monuments', name: 'Companion Monuments', short: 'Companion Monuments', code: 'RM0106' },
  { n: 8, slug: 'premium-monuments', name: 'Premium Monuments', short: 'Premium Monuments', code: 'RM9718' },
  { n: 9, slug: 'child-memorials', name: 'Child Memorials', short: 'Child Memorials' },
  { n: 10, slug: 'single-slant-memorials', name: 'Single Slant Memorials', short: 'Single Slant Memorials' },
  { n: 11, slug: 'companion-slant-memorials', name: 'Companion Slant Memorials', short: 'Companion Slant Memorials' },
  { n: 12, slug: 'cremation-memorials', name: 'Cremation Memorials', short: 'Cremation Memorials', code: 'GB203' },
  { n: 13, slug: 'memorial-benches', name: 'Memorial Benches', short: 'Memorial Benches', code: 'BMD400' },
  { n: 14, slug: 'laser-etching', name: 'Laser Etching', short: 'Laser Etching' },
  { n: 15, slug: 'bronze-plaques', name: 'Bronze Plaques', short: 'Bronze Plaques' },
  { n: 16, slug: 'granite-colors', name: 'Granite Colors', short: 'Granite Colors' },
  { n: 17, slug: 'memorial-photos', name: 'Memorial Photos', short: 'Memorial Photos' },
  { n: 18, slug: 'flower-vases', name: 'Flower Vases', short: 'Flower Vases' },
  { n: 19, slug: 'inscriptions', name: 'Inscriptions', short: 'Inscriptions' },
  { n: 20, slug: 'pet-memorials', name: 'Pet Memorials', short: 'Pet Memorials' },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

/** Slides for the Headstone Design Inspiration carousel — real original product photos. */
export const inspiration = [
  { title: 'Premium Monuments', code: 'RM9718', image: 'inspiration-1', slug: 'premium-monuments' },
  { title: 'Single Markers — Granite', code: 'RM9752', image: 'inspiration-2', slug: 'single-markers-granite' },
  { title: 'Companion Monuments', code: 'RM0106', image: 'inspiration-3', slug: 'companion-monuments' },
  { title: 'Single Markers — Bronze', code: 'GB42', image: 'inspiration-4', slug: 'single-markers-bronze' },
  { title: 'Single Monuments', code: 'RM0204', image: 'inspiration-5', slug: 'single-monuments' },
  { title: 'Companion Markers — Granite', code: 'RM9742', image: 'inspiration-6', slug: 'companion-markers-granite' },
  { title: 'Companion Markers — Bronze', code: 'GB133', image: 'inspiration-7', slug: 'companion-markers-bronze' },
  { title: 'Cremation Memorials', code: 'GB203', image: 'inspiration-8', slug: 'cremation-memorials' },
];

/** Real customer testimonials, copied from the original site. */
export const testimonials = [
  {
    title: 'We Couldn’t Be More Pleased',
    quote:
      'We went to see the monument and it was so beautiful. It was perfect! It was more than I expected, you did an awesome job and we couldn’t be more pleased with it.',
    name: 'Brenda B.',
    place: 'Burleson, Texas',
  },
  {
    title: 'Thanks for Being So Patient...',
    quote:
      'Thank you very much for making my mothers resting place so beautiful. Also, for being so patient with us.',
    name: 'Bob & Carol',
    place: 'Burleson, Texas',
  },
  {
    title: 'You Really Went the Extra Mile',
    quote:
      'Thank you so much for the headstone. You really went the extra mile and I am so proud of it.',
    name: 'Kelli M.',
    place: 'Burleson, Texas',
  },
  {
    title: 'As Lovely as Can Be...',
    quote:
      'Thank you for the effort you have put into Mother and Dads marker. It’s as lovely as can be. Thanks once again.',
    name: 'Linda',
    place: 'Crowley, Texas',
  },
  {
    title: 'Still People Who Take Pride in What They Do...',
    quote:
      'Thanks for everything you have done for me and my family. You have shown me that there’s still people who take pride in what they do, and still care about people.',
    name: 'Gena',
    place: 'Joshua, Texas',
  },
  {
    title: 'We Appreciate the Fine Work...',
    quote: 'We appreciate the quick response and the fine work you did...',
    name: 'John & Debbie T.',
    place: 'Joshua, Texas',
  },
];

/** The four promises shown on the original homepage. */
export const promises = [
  { title: 'No Sales Pressure', text: 'At Burleson Monuments we provide memorial information without any sales pressure.' },
  { title: 'Written Confirmation & Drawing', text: 'We offer written order confirmation and a computer generated drawing with each order.' },
  { title: 'We Work With Your Cemetery', text: 'We work with your cemetery to provide the required documents, at no extra charge.' },
  { title: 'Experienced Craftsmen', text: 'Our experienced memorial consultants, memorial designers, and craftsmen are prepared to create a memorial that is both beautiful and durable.' },
];

export const orderingSteps = [
  { n: 1, title: 'Design Selection' },
  { n: 2, title: 'Granite Color' },
  { n: 3, title: 'Inscription', note: 'names(s), dates, verses, etc.' },
  { n: 4, title: 'Cemetery' },
];

export const orderingGuarantees = [
  'There\'s never any pressure or obligation.',
  'All of our gravestones are Guaranteed.',
  'We obtain and complete the required cemetery forms for you free of charge.',
  'We offer custom design and engraving for cemetery memorials, or you can choose from our extensive selection of stock designs.',
  'Our craftsmanship has a reputation for being among the best in the headstone industry.',
  'We\'re a member of the Better Business Bureau.',
  'Our prices are very AFFORDABLE, and you\'ll never see surprise fees.',
];

import { AFFILIATION_LOGOS, getImage } from './images';

export const affiliations = [
  { name: 'Better Business Bureau', img: getImage('badge-bbb') || AFFILIATION_LOGOS['badge-bbb'], href: 'http://www.bbb.org' },
  { name: 'Burleson Chamber of Commerce', img: getImage('badge-burleson-chamber') || AFFILIATION_LOGOS['badge-burleson-chamber'], href: 'http://burlesonchamber.com' },
  { name: 'National Federation of Independent Business', img: getImage('badge-nfib') || AFFILIATION_LOGOS['badge-nfib'], href: 'http://www.nfib.com' },
  { name: 'U.S. Chamber of Commerce', img: getImage('badge-us-chamber') || AFFILIATION_LOGOS['badge-us-chamber'], href: 'https://www.uschamber.com' },
];
