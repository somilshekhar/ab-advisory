import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import WhatWeDeliverSection from "../components/WhatWeDeliverSection";
import WhyPartnersChooseUsSection from "../components/WhyPartnersChooseUsSection";
import FounderSection from "../components/FounderSection";
import PerformanceSection from "../components/PerformanceSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

const SITE_URL = "https://abadvisorygroup.in";

export const metadata = {
  title: "AB Advisory Group | Global Transfer Pricing & Pre-IPO Advisory",
  description:
    "Partner-led Global Transfer Pricing documentation, compliance, APA support and Pre-IPO readiness for businesses across India, UAE, Singapore and global markets. White-label TP delivery for CA firms.",
  keywords: [
    "transfer pricing advisory India",
    "transfer pricing documentation India",
    "white label transfer pricing CA firm",
    "TP outsourcing India",
    "pre-IPO advisory India",
    "cross border tax advisory India",
    "international tax advisor India",
    "APA preparation India",
    "OECD local file India",
    "transfer pricing UAE",
    "investor readiness India",
    "SME IPO advisory India",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Global Transfer Pricing & Pre-IPO Advisory",
    description:
      "Partner-led TP documentation, compliance, APA and Pre-IPO readiness for India, UAE and global markets. White-label delivery for CA & tax advisory firms.",
    url: SITE_URL,
    type: "website",
  },
};

const homePageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Global Transfer Pricing Advisory",
    provider: { "@type": "Organization", name: "AB Advisory Group" },
    serviceType: "Transfer Pricing Documentation & Compliance",
    description:
      "Expert TP documentation (Local File, Master File, CbCR), benchmarking, APA preparation, Pillar Two analysis and white-label delivery for CA firms.",
    areaServed: ["India", "UAE", "Singapore", "United Kingdom", "European Union"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/global-transfer-pricing`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pre-IPO Readiness & Investment Banking Advisory",
    provider: { "@type": "Organization", name: "AB Advisory Group" },
    serviceType: "Pre-IPO Advisory & Fundraising Support",
    description:
      "Pre-IPO readiness assessment, FEMA & cross-border structuring, fundraising and investor introductions for growth companies in India and UAE.",
    areaServed: ["India", "UAE"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/investment-banking`,
    },
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full relative bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      {/* Hero Wrapper */}
      <div className="w-full min-h-screen bg-gradient-to-r from-white via-white to-[#e4f1e0] flex flex-col relative overflow-hidden">
        <Header />
        <FadeIn delay={0.1} className="w-full flex-1 flex flex-col">
          <HeroSection />
        </FadeIn>
      </div>

      <FadeIn>
        <CapabilitiesSection />
      </FadeIn>
      <FadeIn>
        <WhatWeDeliverSection />
      </FadeIn>
      <FadeIn>
        <WhyPartnersChooseUsSection />
      </FadeIn>
      <FadeIn>
        <FounderSection />
      </FadeIn>
      <FadeIn>
        <PerformanceSection />
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
