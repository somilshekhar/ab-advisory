import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

const SITE_URL = "https://abadvisorygroup.in";
const PAGE_URL = `${SITE_URL}/ai-tools/pdf-redaction`;

export const metadata = {
  title: "AB Advisory Group | PDF Redaction Tool — Free Privacy Tool",
  description:
    "Redact sensitive confidential information and pricing details from financial and transfer pricing documents securely. Ideal for tax advisors in Singapore, UAE, EU, UK, India, and global markets.",
  keywords: [
    "PDF redaction tool free",
    "redact transfer pricing documents",
    "confidential document redactor Singapore UAE EU UK India",
    "PDF redaction with compression",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AB Advisory Group | PDF Redaction Tool — Free Privacy Tool",
    description:
      "Redact sensitive confidential information from financial and TP documents securely across Singapore, UAE, EU, UK, India and global markets.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function PDFRedactionToolPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      <div className="flex-1 w-full">
        <IframeWrapper 
          src="/tools/pdf-redaction-tool-withcompression.html" 
          title="PDF Redaction Tool"
        />
      </div>
      <Footer />
    </main>
  );
}
