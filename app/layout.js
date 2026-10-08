import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const SITE_URL = "https://abadvisorygroup.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AB Advisory Group | Global Transfer Pricing & Pre-IPO Advisory",
    template: "AB Advisory Group | %s",
  },
  icons: {
    icon: [
      { url: "/AB_logo_vector_transparent.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/AB_logo_vector_transparent.svg",
    apple: "/logo.png",
  },
  description:
    "Partner-led Global Transfer Pricing documentation, compliance, APA support and Pre-IPO readiness advisory for businesses across Singapore, UAE, EU, UK, India and global markets. Founded by CA Abhiishhek Bhavsar (ex-EY, Nexdigm).",
  keywords: [
    "transfer pricing advisory Singapore",
    "transfer pricing UAE",
    "transfer pricing advisory EU",
    "transfer pricing advisory UK",
    "transfer pricing advisory India",
    "global transfer pricing documentation",
    "OECD local file generator",
    "master file preparation tool",
    "APA preparation Singapore UAE EU UK India Global",
    "Pillar Two BEPS compliance Singapore UAE EU UK India",
    "white label transfer pricing CA firm",
    "TP outsourcing Singapore UAE EU UK India",
    "cross border tax advisory Singapore UAE EU UK India Global",
    "pre-IPO advisory Singapore UAE EU UK India",
    "investor readiness advisory",
    "international tax advisor Singapore UAE EU UK India Global",
    "IRAS transfer pricing Singapore",
    "FTA corporate tax transfer pricing UAE",
    "HMRC transfer pricing UK",
    "EU Pillar Two global minimum tax advisory",
    "CBDT transfer pricing India",
  ],
  authors: [{ name: "Abhiishhek Bhavsar", url: "https://www.linkedin.com/in/abhiishhek-bhavsar/" }],
  creator: "AB Advisory Group",
  publisher: "ABAdvisory Group LLP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AB Advisory Group",
    title: "AB Advisory Group | Global Transfer Pricing & Pre-IPO Advisory",
    description:
      "Partner-led Global Transfer Pricing documentation, compliance, APA and Pre-IPO readiness for Singapore, UAE, EU, UK, India and global markets. White-label delivery for CA & tax advisory firms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AB Advisory Group — Global Transfer Pricing & Pre-IPO Advisory across Singapore, UAE, EU, UK, India & Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Advisory Group | Transfer Pricing & Pre-IPO Advisory",
    description:
      "Partner-led global TP documentation, APA support and pre-IPO readiness across Singapore, UAE, EU, UK, India & global corridors.",
    images: ["/og-image.png"],
    creator: "@abadvisorygroup",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-SG": SITE_URL,
      "en-AE": SITE_URL,
      "en-GB": SITE_URL,
      "en-IN": SITE_URL,
      "en-EU": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  category: "Finance & Tax Advisory",
  other: {
    "geo.region": "SG, AE, EU, GB, IN, GLOBAL",
    "geo.placename": "Singapore, UAE, EU, UK, India, Global",
    "target-audience": "Multinational Enterprises, CA Firms, Tax Advisory Firms, Growth Companies",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AB Advisory Group",
  legalName: "ABAdvisory Group LLP",
  description:
    "Partner-led Global Transfer Pricing and Investment Banking advisory for businesses and advisory firms across Singapore, UAE, EU, UK, India and global markets.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+919773037381",
  email: "abhiishhek@abadvisorygroup.in",
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
  areaServed: [
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Place", name: "European Union" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Global" },
  ],
  serviceType: [
    "Global Transfer Pricing Advisory",
    "Transfer Pricing Documentation",
    "OECD Local File & Master File Preparation",
    "APA Preparation & Negotiation",
    "Pillar Two BEPS 2.0 Impact Analysis",
    "Pre-IPO Readiness Advisory",
    "Investment Banking & Cross-Border Structuring Advisory",
    "White-label Tax Compliance & TP Delivery",
  ],
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://www.linkedin.com/in/abhiishhek-bhavsar/",
  ],
  founder: {
    "@type": "Person",
    name: "Abhiishhek Bhavsar",
    honorificSuffix: "CA",
    jobTitle: "Transfer Pricing Advisor & Founder",
    worksFor: { "@type": "Organization", name: "AB Advisory Group" },
    alumniOf: [
      { "@type": "Organization", name: "Ernst & Young (EY)" },
      { "@type": "Organization", name: "Nexdigm (SKP)" },
    ],
    knowsAbout: [
      "Global Transfer Pricing",
      "OECD Guidelines",
      "Singapore IRAS TP Guidelines",
      "UAE Corporate Tax & TP Rules",
      "UK HMRC Transfer Pricing",
      "EU Pillar Two BEPS Directives",
      "India Income Tax Act Sec 92",
      "International Tax Structuring",
      "Advance Pricing Agreements (APA)",
      "Investment Banking Advisory",
    ],
    sameAs: "https://www.linkedin.com/in/abhiishhek-bhavsar/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white">{children}</body>
    </html>
  );
}
