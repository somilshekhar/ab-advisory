import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

export const metadata = {
  title: "AB Advisory Group | PDF Compressor Tool",
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
