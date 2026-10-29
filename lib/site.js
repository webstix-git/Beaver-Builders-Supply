/** Shared site constants for SEO, sitemap, and structured data. */

export const SITE_NAME = "Beaver Builders' Supply";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.beaverbuilderssupply.com').replace(
  /\/$/,
  ''
);

export const SITE_DESCRIPTION =
  'Locally owned building supply in Holmen, WI since 1951. Quality materials, design support, and expert guidance for Coulee Region builders and homeowners.';

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Beaver Builders' Supply",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  phone: '+16085263232',
  email: 'sales@beaverbuilderssupply.com',
  streetAddress: 'N6838 Builders Ct.',
  addressLocality: 'Holmen',
  addressRegion: 'WI',
  postalCode: '54636',
  addressCountry: 'US',
  sameAs: [
    'https://www.facebook.com/beaverbuilderssupply',
    'https://www.instagram.com/beaverbuilderssupply/',
    'https://www.pinterest.com/beaverbuilderssupply/'
  ],
  geo: {
    // Approximate showroom location for LocalBusiness schema
    latitude: 43.9633,
    longitude: -91.2565
  }
};

/** Indexable public routes (no thank-you / 404). */
export const INDEXABLE_ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/materials', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/design', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/gallery', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/site-map', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/ai-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/ai-readiness-service-index', changeFrequency: 'yearly', priority: 0.3 }
];

/**
 * Per-page titles (~50–60 chars) and descriptions (~150–160 chars).
 * Titles are absolute (not combined with the layout template).
 */
export const PAGE_SEO = {
  home: {
    path: '/',
    title: "Beaver Builders' Supply | Building Materials in Holmen, WI",
    description: SITE_DESCRIPTION
  },
  about: {
    path: '/about',
    title: "About Us | Beaver Builders' Supply in Holmen, WI",
    description:
      'Third-generation, locally owned building supply in Holmen since 1951. Meet the team serving La Crosse and the Coulee Region with neighbor-first service.'
  },
  materials: {
    path: '/materials',
    title: "Building Materials | Beaver Builders' Supply WI",
    description:
      "Browse kitchen & bath, decking & railing, windows & doors, and roofing & siding from trusted brands. Expert help at Beaver Builders' Supply in Holmen, WI."
  },
  design: {
    path: '/design',
    title: "Design & Drafting Tools | Beaver Builders' Supply",
    description:
      "Drafting support, kitchen & bath design, and free brand visualizer tools for decks, windows, doors, siding, and roofing from Beaver Builders' Supply in Holmen."
  },
  gallery: {
    path: '/gallery',
    title: "Project Gallery | Beaver Builders' Supply Holmen",
    description:
      "See job sites, showroom displays, and Coulee Region projects—kitchens, decks, siding, windows, and doors from Beaver Builders' Supply in Holmen, Wisconsin."
  },
  contact: {
    path: '/contact',
    title: "Contact Us | Beaver Builders' Supply Holmen, WI",
    description:
      'Request a quote or visit N6838 Builders Ct., Holmen, WI 54636. Call 608-526-3232 or email sales@beaverbuilderssupply.com for materials and design help.'
  },
  siteMap: {
    path: '/site-map',
    title: "Site Map | Beaver Builders' Supply Pages Holmen",
    description:
      "Browse every Beaver Builders' Supply page: materials, design, gallery, about, contact, policies, and homepage sections for our Holmen, Wisconsin showroom."
  },
  privacy: {
    path: '/privacy-policy',
    title: "Privacy Policy | Beaver Builders' Supply Holmen",
    description:
      "Learn how Beaver Builders' Supply collects, uses, and protects personal information when you browse our website, request a quote, or contact our Holmen team."
  },
  aiPolicy: {
    path: '/ai-policy',
    title: "AI Policy | Beaver Builders' Supply in Holmen, WI",
    description:
      "Learn how Beaver Builders' Supply uses artificial intelligence responsibly for website content and operations while protecting customer data in Holmen, WI."
  },
  aiIndex: {
    path: '/ai-readiness-service-index',
    title: "AI Readiness Index | Beaver Builders' Supply WI",
    description:
      "Review Beaver Builders' Supply AI readiness details for materials, design services, brands we carry, key pages, FAQs, and customer support in Holmen, Wisconsin."
  },
  thankYou: {
    path: '/thank-you',
    title: "Thank You | Contact Beaver Builders' Supply WI",
    description:
      "Thanks for contacting Beaver Builders' Supply. Our Holmen sales team received your message and will follow up soon with product options and pricing next.",
    index: false
  },
  notFound: {
    path: '/404',
    title: "Page Not Found | Beaver Builders' Supply Holmen",
    description:
      'That page is unavailable or may have moved. Continue to materials, design, gallery, about, or contact Beaver Builders\' Supply at our Holmen, Wisconsin showroom.',
    index: false
  }
};

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageMetadata({ title, description, path, index = true }) {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export function seoMetadata(key) {
  const page = PAGE_SEO[key];
  if (!page) throw new Error(`Unknown PAGE_SEO key: ${key}`);
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    index: page.index !== false
  });
}
