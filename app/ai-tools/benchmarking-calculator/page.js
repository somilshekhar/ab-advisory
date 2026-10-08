import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/ai-tools/benchmarking-calculator`;

export const metadata = {
  title: "AB Advisory Group | Benchmarking Range Calculator — Free TP Tool",
  description:
    "Calculate arm's length benchmarking ranges and interquartile percentiles for transfer pricing studies. Designed for CA firms and MNEs across Singapore, UAE, EU, UK, India, and global markets.",
  keywords: [
    "transfer pricing benchmarking range calculator",
    "arm's length interquartile range calculator",
    "TP benchmarking study tool Singapore UAE EU UK India",
    "transfer pricing percentile calculator",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Benchmarking Range Calculator — Free TP Tool",
    description:
      "Calculate arm's length benchmarking ranges and interquartile percentiles across Singapore, UAE, EU, UK, India and global markets.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function BenchmarkingCalculatorPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <div className="flex-1 w-full">
        <IframeWrapper 
          src="/tools/AB-benchmarking-range-calculator.html" 
          title="Benchmarking Range Calculator"
        />
      </div>
      <Footer />
    </main>
  );
}
