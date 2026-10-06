import Header from "../../components/Header";
import AIToolsHero from "../../components/AIToolsHero";
import AIToolsSection from "../../components/AIToolsSection";
import KnowledgeBankSection from "../../components/KnowledgeBankSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/ai-tools`;

export const metadata = {
  title: "AB Advisory Group | Free Transfer Pricing Tools & AI Knowledge Bank",
  description:
    "Free AI-powered transfer pricing tools: OECD Local File generator, benchmarking range calculator, master file preparation tool, TP position tool, and functional analysis GPT. Built for CA firms, tax advisors and MNCs.",
  keywords: [
    "free transfer pricing tools",
    "OECD local file generator free",
    "transfer pricing benchmarking calculator",
    "master file preparation tool free",
    "functional analysis questionnaire transfer pricing",
    "TP position tool",
    "transfer pricing AI tools India",
    "PDF redaction tool",
    "local file transfer pricing free template",
    "TP compliance tools India",
    "transfer pricing knowledge bank",
    "free TP documentation tools CA",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Free Transfer Pricing Tools & AI Knowledge Bank",
    description:
      "Free AI-powered TP tools: OECD Local File generator, benchmarking calculator, master file tool and more. Built for CA firms, tax advisors and MNCs.",
    url: PAGE_URL,
    type: "website",
  },
};

const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Transfer Pricing Tools by AB Advisory Group",
  description: "Practical AI-powered tools to simplify transfer pricing documentation, analysis and workflows.",
  url: PAGE_URL,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Functional Analysis Questionnaire — GPT",
        description: "Generate a customized TP Functional Analysis Questionnaire using GPT.",
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        url: "https://chatgpt.com/g/g-69ce185436a88191bff9cf742f9844c8-transfer-pricing-functionalanalysis-io",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "OECD Local TP File Generator",
        description: "Generate OECD-compliant Local Transfer Pricing Files for free.",
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        url: `${SITE_URL}/ai-tools/local-file-generator`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Benchmarking Range Calculator",
        description: "Calculate the arm's length benchmarking range for transfer pricing studies.",
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        url: `${SITE_URL}/ai-tools/benchmarking-calculator`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "Free Master File Preparation Tool",
        description: "Prepare OECD-compliant transfer pricing Master Files for free.",
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        url: `${SITE_URL}/ai-tools/master-file-generator`,
      },
    },
  ],
};



export default function AIToolsPage() {
  return (
    <main className="flex flex-col w-full relative bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }}
      />
      <Header />
      <FadeIn delay={0.1} className="w-full flex-1 flex flex-col">
        <AIToolsHero />
      </FadeIn>
      <FadeIn>
        <AIToolsSection />
      </FadeIn>
      <FadeIn>
        <KnowledgeBankSection />
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
