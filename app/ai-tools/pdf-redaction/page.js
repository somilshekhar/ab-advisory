import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

export const metadata = {
  title: "PDF Redaction Tool | AI Tools",
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
