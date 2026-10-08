import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/ai-tools/local-file-generator`;

export const metadata = {
  title: "AB Advisory Group | OECD Local File Generator — Free TP Tool",
  description:
    "Generate OECD-compliant Local Transfer Pricing Files for free. Designed for CA firms, tax advisors, and multinational enterprises across Singapore, UAE, EU, UK, India, and global markets.",
  keywords: [
    "OECD local file generator free",
    "transfer pricing local file template",
    "local file TP generator Singapore UAE EU UK India",
    "free transfer pricing documentation tool",
    "OECD TP compliance generator",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | OECD Local File Generator — Free TP Tool",
    description:
      "Generate OECD-compliant Local Transfer Pricing Files for free across Singapore, UAE, EU, UK, India and global markets.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function LocalFileGeneratorPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <div className="flex-1 w-full">
        <IframeWrapper 
          src="/tools/ab-tp-local-file-generator.html" 
          title="Local File Generator"
        />
      </div>
      <Footer />
    </main>
  );
}
