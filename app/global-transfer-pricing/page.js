import Header from "../../components/Header";
import GlobalTransferPricingHero from "../../components/GlobalTransferPricingHero";
import TheProblemWeSolve from "../../components/TheProblemWeSolve";
import WhyFirmsWorkWithUs from "../../components/WhyFirmsWorkWithUs";
import WorkflowSection from "../../components/WorkflowSection";
import WhatWeDeliverTP from "../../components/WhatWeDeliverTP";
import EngagementModels from "../../components/EngagementModels";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/global-transfer-pricing`;

export const metadata = {
  title: "AB Advisory Group | Global Transfer Pricing Advisory & Compliance",
  description:
    "Partner-led Global Transfer Pricing documentation, benchmarking, APA support, Pillar Two impact analysis and litigation strategy across Singapore, UAE, EU, UK, India and global markets. White-label TP delivery for CA & tax advisory firms.",
  keywords: [
    "transfer pricing advisory Singapore",
    "transfer pricing compliance UAE",
    "transfer pricing advisory EU",
    "transfer pricing documentation UK",
    "transfer pricing advisory India",
    "OECD local file generator",
    "master file preparation tool",
    "CbCR filing Singapore UAE EU UK India",
    "APA preparation Singapore UAE EU UK India",
    "advance pricing agreement Singapore UAE EU UK India",
    "Pillar Two BEPS 2.0 analysis EU UK UAE Singapore India",
    "safe harbour transfer pricing India UAE",
    "TP benchmarking Singapore UAE EU UK India",
    "transfer pricing litigation strategy",
    "intercompany pricing policy global",
    "white label transfer pricing CA firm",
    "TP outsourcing Singapore UAE EU UK India Global",
    "IRAS transfer pricing Singapore",
    "FTA corporate tax transfer pricing UAE",
    "HMRC transfer pricing UK",
    "EU transfer pricing ATAD Pillar Two",
    "Global Capability Centers transfer pricing",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Global Transfer Pricing Advisory & Compliance",
    description:
      "Partner-led TP documentation, benchmarking, APA support and white-label delivery for Singapore, UAE, EU, UK, India and global markets. Partner-led execution.",
    url: PAGE_URL,
    type: "website",
  },
};

const gtpServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Global Transfer Pricing Advisory & Compliance",
  provider: {
    "@type": "Organization",
    name: "AB Advisory Group",
    url: SITE_URL,
  },
  serviceType: "Transfer Pricing Documentation & Advisory",
  description:
    "Partner-led transfer pricing documentation (Local File, Master File, CbCR), benchmarking studies, APA preparation, Pillar Two impact analysis, TP litigation support and white-label delivery for CA & tax advisory firms across Singapore, UAE, EU, UK, India and global markets.",
  areaServed: ["Singapore", "UAE", "European Union", "United Kingdom", "India", "Global"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Global Transfer Pricing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TP Documentation — Local File, Master File, CbCR (Singapore, UAE, EU, UK, India, Global)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "APA Preparation & Negotiation Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pillar Two / BEPS 2.0 Global Minimum Tax Impact Analysis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Border TP Benchmarking & Comparable Analysis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TP Litigation Strategy & Defense Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "White-label TP Delivery for CA & Accounting Firms" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intercompany Pricing Policy Design & Structuring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Safe Harbour & Regulatory Exemption Evaluation" } },
    ],
  },
};

const gtpFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which regions does AB Advisory Group cover for Transfer Pricing compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AB Advisory Group delivers transfer pricing advisory, OECD-compliant Local File and Master File documentation, CbCR filing, benchmarking, and APA support across Singapore, UAE, EU, UK, India, and global markets. We also provide white-label TP services for accounting and tax advisory firms operating in these jurisdictions.",
      },
    },
    {
      "@type": "Question",
      name: "What are the transfer pricing rules in Singapore (IRAS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under IRAS guidelines, Singapore companies with gross revenue exceeding SGD 10 million must prepare Transfer Pricing Documentation (TPD) for related-party transactions unless safe harbour thresholds apply. AB Advisory assists Singapore entities with OECD Local Files, Master Files, benchmarking, and IRAS advance pricing agreement (APA) filings.",
      },
    },
    {
      "@type": "Question",
      name: "How does Transfer Pricing work under UAE Corporate Tax law?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under UAE Federal Decree-Law No. 47 of 2022 on Corporate Tax, transfer pricing rules apply to all transactions between related parties and connected persons in the UAE. MNEs and UAE entities meeting revenue thresholds must maintain a Disclosure Form, Local File, and Master File adhering to the OECD Transfer Pricing Guidelines. AB Advisory supports UAE businesses with full TP compliance and disclosure filing.",
      },
    },
    {
      "@type": "Question",
      name: "What are the Transfer Pricing documentation requirements in the UK & EU under Pillar Two?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The UK (HMRC) and EU member states enforce strict OECD Transfer Pricing documentation (Local File, Master File, CbCR) alongside Pillar Two (Global Anti-Base Erosion Rules / 15% Minimum Tax). MNEs operating across UK and EU corridors require robust functional analysis, benchmarking, and country-by-country reporting. AB Advisory provides cross-border TP documentation and Pillar Two impact assessments.",
      },
    },
    {
      "@type": "Question",
      name: "What is transfer pricing documentation in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transfer pricing documentation in India refers to the records that multinational enterprises must maintain under Section 92D and Rule 10D of the Income Tax Act, 1961. This includes a Local File (Form 3CEB), Master File (Rule 10DA), and Country-by-Country Report (CbCR) for entities with aggregate international transactions exceeding prescribed thresholds.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Advance Pricing Agreement (APA) and bilateral APA support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Advance Pricing Agreement (APA) is a formal agreement between a taxpayer and tax authorities (such as CBDT in India, IRAS in Singapore, FTA in UAE, or HMRC in the UK) that determines the transfer pricing methodology and arm's length price in advance for up to 5 years. AB Advisory assists with unilateral, bilateral, and multilateral APAs.",
      },
    },
    {
      "@type": "Question",
      name: "What is white-label transfer pricing delivery for accounting & CA firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White-label transfer pricing delivery is a service model where AB Advisory Group completes the full TP documentation, benchmarking, advisory and compliance work on behalf of a CA or tax advisory firm, issued entirely under the partner firm's brand across Singapore, UAE, EU, UK, India, and global markets.",
      },
    },
    {
      "@type": "Question",
      name: "What is Pillar Two (BEPS 2.0) and how does it affect global MNEs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pillar Two (BEPS 2.0) introduces a global minimum effective tax rate of 15% for multinational enterprises with consolidated revenues exceeding €750 million. MNEs across Singapore, UAE, EU, UK, and India must evaluate their effective tax rates jurisdiction by jurisdiction and adjust intercompany transfer pricing strategies to mitigate top-up tax liabilities.",
      },
    },
  ],
};

export default function GlobalTransferPricing() {
  return (
    <main className="flex flex-col w-full relative bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gtpServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gtpFAQSchema) }}
      />
      <Header />
      <FadeIn delay={0.1} className="w-full flex-1 flex flex-col">
        <GlobalTransferPricingHero />
      </FadeIn>
      <FadeIn>
        <TheProblemWeSolve />
      </FadeIn>
      <FadeIn>
        <WhyFirmsWorkWithUs />
      </FadeIn>
      <FadeIn>
        <WorkflowSection />
      </FadeIn>
      <FadeIn>
        <WhatWeDeliverTP />
      </FadeIn>
      <FadeIn>
        <EngagementModels />
      </FadeIn>
      <FadeIn>
        <CTASection />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
