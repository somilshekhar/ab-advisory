const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/contact`;

export const metadata = {
  title: "Contact Us — Transfer Pricing & Pre-IPO Advisory",
  description:
    "Get in touch with AB Advisory Group for transfer pricing documentation, compliance support or pre-IPO advisory. Office in Ahmedabad, Gujarat, India. WhatsApp, email and callback enquiries welcome.",
  keywords: [
    "contact transfer pricing advisor India",
    "AB Advisory Group contact",
    "transfer pricing consultant Ahmedabad",
    "transfer pricing advisory contact India",
    "pre-IPO advisory consultant contact",
    "CA transfer pricing advisor Gujarat",
    "Abhiishhek Bhavsar contact",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact AB Advisory Group — Transfer Pricing & Pre-IPO Advisory India",
    description:
      "Get in touch with AB Advisory Group. Office in Ahmedabad, India. WhatsApp, email and callback enquiries for transfer pricing and pre-IPO advisory.",
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
    "Contact page for AB Advisory Group — transfer pricing documentation, compliance advisory and pre-IPO readiness for India, UAE and global markets.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "AB Advisory Group",
    legalName: "ABAdvisory Group LLP",
    telephone: "+919773037381",
    email: "abhiishhek@abadvisorygroup.in",
    url: SITE_URL,
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
      },
      {
        "@type": "ContactPoint",
        email: "abhiishhek@abadvisorygroup.in",
        contactType: "sales",
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
