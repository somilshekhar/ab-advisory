import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/ai-tools/pdf-compressor`;

export const metadata = {
  title: "AB Advisory Group | PDF Compressor Tool — Free Tool",
  description:
    "Compress PDF file sizes quickly for email attachments and tax portal filings. Designed for professionals across Singapore, UAE, EU, UK, India, and global markets.",
  keywords: [
    "PDF compressor tool free",
    "compress transfer pricing reports",
    "PDF file compressor Singapore UAE EU UK India",
    "free online PDF compression",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | PDF Compressor Tool — Free Tool",
    description:
      "Compress PDF file sizes quickly for tax filings and email attachments across Singapore, UAE, EU, UK, India and global markets.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function PDFCompressorPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <div className="flex-1 w-full">
        <IframeWrapper 
          src="/tools/AB-pdf-compressor.html" 
          title="PDF Compressor"
        />
      </div>
      <Footer />
    </main>
  );
}
