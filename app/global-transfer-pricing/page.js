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
    "Expert transfer pricing documentation, benchmarking, APA support, Pillar Two analysis and litigation strategy for India, UAE, Singapore, EU and UK. Partner-led, no junior-only teams. White-label TP delivery for CA firms.",
  keywords: [
    "transfer pricing advisory India",
    "transfer pricing documentation India",
    "OECD local file India",
    "master file preparation India",
    "CbCR filing India",
    "APA preparation India",
    "advance pricing agreement India CBDT",
    "Pillar Two BEPS India",
    "safe harbour transfer pricing India",
    "TP benchmarking India",
    "transfer pricing litigation India",
    "intercompany pricing policy India",
    "transfer pricing UAE",
    "white label transfer pricing CA firm",
    "TP outsourcing India",
    "Section 92D transfer pricing",
    "Form 3CEB India",
    "transfer pricing officer India",
    "Global Capability Centers transfer pricing",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Global Transfer Pricing Advisory & Compliance",
    description:
      "Expert TP documentation, benchmarking, APA support and white-label delivery for India, UAE, Singapore. Partner-led, no junior-only teams.",
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
    "Partner-led transfer pricing documentation (Local File, Master File, CbCR), benchmarking studies, APA preparation, Pillar Two impact analysis, TP litigation support and white-label delivery for CA firms across India, UAE, Singapore, EU and UK.",
  areaServed: ["India", "UAE", "Singapore", "United Kingdom", "European Union", "GCC"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Transfer Pricing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TP Documentation — Local File, Master File, CbCR" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "APA Preparation Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pillar Two / BEPS 2.0 Impact Analysis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TP Benchmarking & Comparable Analysis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "TP Litigation Strategy & Research Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "White-label TP Delivery for CA Firms" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intercompany Pricing Policy Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Safe Harbour Evaluation" } },
    ],
  },
};

const gtpFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is transfer pricing documentation in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transfer pricing documentation in India refers to the records that multinational enterprises must maintain under Section 92D and Rule 10D of the Income Tax Act, 1961. This includes a Local File (Form 3CEB), Master File (Rule 10DA), and Country-by-Country Report (CbCR) for entities with aggregate international transactions exceeding prescribed thresholds. These documents must demonstrate that related-party transactions are conducted at arm's length.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Advance Pricing Agreement (APA) in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Advance Pricing Agreement (APA) in India is a formal agreement between a taxpayer and the CBDT (Central Board of Direct Taxes) that determines the transfer pricing methodology and arm's length price for international related-party transactions in advance, covering a period of up to 5 years. India offers unilateral APAs (with CBDT only) and bilateral/multilateral APAs (involving competent authorities of other countries).",
      },
    },
    {
      "@type": "Question",
      name: "What is the Safe Harbour rule in transfer pricing India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India's Safe Harbour Rules (SHR), introduced under Rules 10TA to 10TG of the Income Tax Rules, allow eligible taxpayers to declare their international transactions at or above certain prescribed margins without detailed benchmarking. Safe harbour margins are available for IT/ITeS services, knowledge process outsourcing, contract R&D, financial transactions and more. Opting for safe harbour simplifies compliance but requires careful eligibility assessment.",
      },
    },
    {
      "@type": "Question",
      name: "What is Pillar Two (BEPS 2.0) and how does it affect Indian companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pillar Two (also called BEPS 2.0 or Global Minimum Tax) is an OECD initiative that imposes a minimum effective tax rate of 15% on large multinational enterprises (consolidated revenue exceeding €750 million). Indian subsidiaries and outbound Indian multinationals operating in participating jurisdictions need to assess their effective tax rates in each country, identify any top-up tax liability, and review their intercompany structures accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "What is white-label transfer pricing delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White-label transfer pricing delivery is a service model where AB Advisory Group completes the full TP documentation, advisory and compliance work on behalf of a CA or tax advisory firm, but the deliverables are issued entirely under the partner firm's brand and letterhead. The end client never knows AB Advisory is involved. This allows smaller CA firms to offer expert TP services without building an in-house TP team.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are required for CbCR filing in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Country-by-Country Reporting (CbCR) is mandatory in India for Indian parent entities of MNE groups with consolidated revenue of INR 5,500 crore or more. The CbCR (Form 3CEAD) must be filed with the CBDT and contains jurisdiction-wise data on revenue, profit/loss, taxes, employees and assets. Secondary filing obligations apply for Indian constituent entities whose parent entity is based in a non-reciprocating country.",
      },
    },
    {
      "@type": "Question",
      name: "How is transfer pricing benchmarking done in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transfer pricing benchmarking in India involves searching for comparable unrelated companies using databases such as Prowess IQ, Capitaline TP, or ACE TP. The search selects functionally comparable entities, applies quantitative and qualitative filters, and determines an arm's length range (typically the interquartile range). The most appropriate TP method (TNMM, CUP, CPM, RPM, or PSM) is selected based on the nature of the transaction.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs to comply with transfer pricing regulations in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any Indian company or foreign company operating in India that has international transactions with associated enterprises (related parties) must comply with India's transfer pricing regulations under Sections 92 to 92F of the Income Tax Act, 1961. This includes transactions involving goods, services, intangibles, financial transactions (loans, guarantees) and business restructurings. Even a single related-party international transaction exceeding INR 1 crore triggers Form 3CEB reporting.",
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
