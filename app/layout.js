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
    default: "AB Advisory Group | Global Transfer Pricing & Pre-IPO Advisory India",
    template: "%s | AB Advisory Group",
  },
  description:
    "Partner-led Global Transfer Pricing documentation, compliance, APA support and Pre-IPO readiness advisory for businesses across India, UAE, Singapore, EU and global markets. Founded by CA Abhiishhek Bhavsar (ex-EY, Nexdigm).",
  keywords: [
    "transfer pricing advisory India",
    "transfer pricing documentation India",
    "white label transfer pricing",
    "TP outsourcing India",
    "APA preparation India",
    "advance pricing agreement India",
    "Pillar Two BEPS India",
    "OECD local file India",
    "master file preparation India",
    "TP benchmarking India",
    "transfer pricing litigation India",
    "safe harbour transfer pricing India",
    "CbCR filing India",
    "intercompany pricing India",
    "cross border tax advisory India UAE",
    "transfer pricing UAE",
    "pre-IPO advisory India",
    "investor readiness India",
    "SME IPO advisory India",
    "fundraising consultant India",
    "CA firm TP outsourcing",
    "international tax advisor India",
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
    locale: "en_IN",
    url: SITE_URL,
    siteName: "AB Advisory Group",
    title: "AB Advisory Group | Global Transfer Pricing & Pre-IPO Advisory India",
    description:
      "Partner-led TP documentation, compliance, APA and Pre-IPO readiness for India, UAE and global markets. White-label delivery for CA & tax advisory firms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AB Advisory Group — Global Transfer Pricing & Pre-IPO Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Advisory Group | Transfer Pricing & Pre-IPO Advisory India",
    description:
      "Partner-led global TP documentation, APA support and pre-IPO readiness for India, UAE & global markets.",
    images: ["/og-image.png"],
    creator: "@abadvisorygroup",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Finance & Tax Advisory",
  verification: {
    google: "",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AB Advisory Group",
  legalName: "ABAdvisory Group LLP",
  description:
    "Partner-led Global Transfer Pricing and Investment Banking advisory for businesses and advisory firms across India, UAE, Singapore, EU and global markets.",
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
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: [
    "Transfer Pricing Advisory",
    "Transfer Pricing Documentation",
    "APA Preparation",
    "Pillar Two Analysis",
    "Pre-IPO Readiness Advisory",
    "Investment Banking Advisory",
    "White-label Tax Compliance",
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
      "Transfer Pricing",
      "International Tax",
      "Cross-Border Structuring",
      "Advance Pricing Agreements",
      "Pillar Two BEPS",
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
