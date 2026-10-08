import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/ai-tools/position-tool`;

export const metadata = {
  title: "AB Advisory Group | TP Position Tool — Free Transfer Pricing Tool",
  description:
    "Evaluate transfer pricing risk positions, tax audit exposure, and intercompany policy alignment for MNCs across Singapore, UAE, EU, UK, India, and global markets.",
  keywords: [
    "transfer pricing position tool",
    "TP risk assessment tool",
    "intercompany tax position evaluation Singapore UAE EU UK India",
    "transfer pricing dispute prevention tool",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | TP Position Tool — Free Transfer Pricing Tool",
    description:
      "Evaluate transfer pricing risk positions and intercompany policy alignment across Singapore, UAE, EU, UK, India and global markets.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function TPPositionToolPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <div className="flex-1 w-full">
        <IframeWrapper 
          src="/tools/ab-tp-positionbook.html" 
          title="TP Position Tool"
        />
      </div>
      <Footer />
    </main>
  );
}
