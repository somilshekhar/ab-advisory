const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/contact`;

export const metadata = {
  title: "AB Advisory Group | Contact Us — Global Transfer Pricing & Pre-IPO Advisory",
  description:
    "Get in touch with AB Advisory Group for global transfer pricing documentation, compliance support, APA preparation or pre-IPO advisory across Singapore, UAE, EU, UK, India and global markets.",
  keywords: [
    "contact transfer pricing advisor Singapore UAE EU UK India",
    "AB Advisory Group contact",
    "transfer pricing consultant Singapore UAE EU UK India",
    "global transfer pricing advisory contact",
    "pre-IPO advisory consultant contact Singapore UAE EU UK India",
    "CA transfer pricing advisor Singapore UAE EU UK India",
    "Abhiishhek Bhavsar contact",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Contact Us — Global Transfer Pricing & Pre-IPO Advisory",
    description:
      "Get in touch with AB Advisory Group. Enquiries welcome for global transfer pricing and pre-IPO advisory across Singapore, UAE, EU, UK, India and global corridors.",
    url: PAGE_URL,
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AB Advisory Group",
  url: PAGE_URL,
  description:
    "Contact page for AB Advisory Group — global transfer pricing documentation, compliance advisory and pre-IPO readiness for Singapore, UAE, EU, UK, India and global markets.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "AB Advisory Group",
    legalName: "ABAdvisory Group LLP",
    telephone: "+919773037381",
    email: "abhiishhek@abadvisorygroup.in",
    url: SITE_URL,
    areaServed: ["Singapore", "UAE", "European Union", "United Kingdom", "India", "Global"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "407, Fourth Floor, Nobles Trade Center, Opp. B D Rao Hall, Bhuyangdev, Memnagar",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380052",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0678,
      longitude: 72.556,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919773037381",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati"],
        contactOption: "TollFree",
        areaServed: ["Singapore", "UAE", "European Union", "United Kingdom", "India", "Global"],
      },
      {
        "@type": "ContactPoint",
        email: "abhiishhek@abadvisorygroup.in",
        contactType: "sales",
        areaServed: ["Singapore", "UAE", "European Union", "United Kingdom", "India", "Global"],
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
