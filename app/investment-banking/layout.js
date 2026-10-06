const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/investment-banking`;

export const metadata = {
  title: "AB Advisory Group | Pre-IPO Readiness & Investment Banking Advisory",
  description:
    "Pre-IPO readiness assessment, FEMA & cross-border structuring, fundraising and investor introductions (Seed to Pre-IPO) for growth companies in India and UAE. Expert advisory by CA Abhiishhek Bhavsar.",
  keywords: [
    "pre-IPO advisory India",
    "IPO readiness consultant India",
    "SME IPO advisory India",
    "pre-IPO fundraising consultants India",
    "investor readiness India",
    "fundraising advisory India UAE",
    "seed fundraising advisory India",
    "growth capital fundraising India",
    "FEMA structuring India",
    "cross-border structuring India UAE",
    "PIPE transactions India",
    "family office investors India",
    "venture capital India",
    "IPO preparation consultant Ahmedabad",
    "pre-IPO capital raise India",
    "listing readiness India",
    "IPO valuation advisory India",
    "equity story consultant India",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Pre-IPO Readiness & Investment Banking Advisory",
    description:
      "Pre-IPO readiness, cross-border structuring, FEMA compliance, fundraising and investor introductions for growth companies in India and UAE. Seed to Pre-IPO.",
    url: PAGE_URL,
    type: "website",
  },
};

const ibServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pre-IPO Readiness & Investment Banking Advisory",
  provider: {
    "@type": "Organization",
    name: "AB Advisory Group",
    url: SITE_URL,
  },
  serviceType: "Pre-IPO Advisory & Fundraising Support",
  description:
    "Pre-IPO readiness assessment, FEMA & cross-border structuring, related-party gap analysis, fundraising and investor introductions for growth companies in India and UAE. Introductions to SEBI-registered merchant banking partners.",
  areaServed: ["India", "UAE", "GCC"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Investment Banking Advisory Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-IPO Readiness Assessment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-border & FEMA Structuring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fundraising & Investor Introductions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deal Structuring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "M&A Deal Support" } },
    ],
  },
};

const ibFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is pre-IPO readiness for Indian companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-IPO readiness is a 12–24 month process where a company prepares itself for a public listing on NSE Emerge, BSE SME, or the NSE/BSE Mainboard. It involves cleaning up the cap table, resolving FEMA and related-party compliance gaps, aligning financial reporting to SEBI standards, building an equity story, and getting introduced to the right merchant bankers and institutional investors. Companies that undertake this process are significantly more likely to achieve better valuations and faster DRHP approval.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an SME IPO and a Mainboard IPO in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An SME IPO (on NSE Emerge or BSE SME) is designed for smaller companies with post-issue paid-up capital up to INR 25 crore. The regulatory requirements are lighter compared to a Mainboard IPO, but the liquidity is lower. A Mainboard IPO (on NSE or BSE) has a minimum post-issue paid-up capital of INR 10 crore (with no upper limit) and is regulated directly by SEBI under the SEBI (ICDR) Regulations, 2018.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Family Office investor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Family Office is a private wealth management entity that manages the investments of ultra-high-net-worth families. In the context of Indian startup and growth-stage investing, family offices are increasingly active as early-stage (Seed, Series A) and pre-IPO investors, often deploying INR 5–100 crore tickets. Unlike institutional VCs, family offices have more flexible mandates, longer investment horizons and fewer reporting requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Pre-IPO / PIPE transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A PIPE (Private Investment in Public Equity) or Pre-IPO placement is a transaction where a company raises capital from select institutional or accredited investors at a fixed price before its public listing. These placements typically happen 6–18 months before the IPO at a discount to the expected IPO price, providing anchor investors with early access and companies with growth capital to improve their financials before listing.",
      },
    },
    {
      "@type": "Question",
      name: "How does AB Advisory help companies prepare for an IPO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AB Advisory Group provides an honest pre-IPO readiness diagnostic covering: (1) Related-party transaction and transfer pricing compliance, (2) FEMA structuring gaps for cross-border businesses, (3) Tax and corporate governance gap resolution, (4) Building the equity story and investor narrative, and (5) Introductions to SEBI-registered merchant bankers and institutional investors suited to the company's stage and sector. All regulated activities are conducted by AB Advisory's empanelled SEBI-registered Merchant Banking partners.",
      },
    },
  ],
};

export default function InvestmentBankingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ibServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ibFAQSchema) }}
      />
      {children}
    </>
  );
}
