import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/ai-tools/master-file-generator`;

export const metadata = {
  title: "AB Advisory Group | Master File Preparation Tool — Free TP Tool",
  description:
    "Prepare OECD Action 13 Master Files for multinational enterprise groups. Built for accounting firms and tax teams across Singapore, UAE, EU, UK, India, and global markets.",
  keywords: [
    "OECD master file generator free",
    "master file preparation tool transfer pricing",
    "BEPS Action 13 master file tool Singapore UAE EU UK India",
    "free transfer pricing master file template",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | Master File Preparation Tool — Free TP Tool",
    description:
      "Prepare OECD Action 13 Master Files for multinational enterprise groups across Singapore, UAE, EU, UK, India and global markets.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function MasterFileGeneratorPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <div className="flex-1 w-full">
        <IframeWrapper 
          src="/tools/kmp-tp-report-generator.html" 
          title="Master File Preparation Tool"
        />
      </div>
      <Footer />
    </main>
  );
}
