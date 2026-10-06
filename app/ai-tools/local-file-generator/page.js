import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

export const metadata = {
  title: "Local File Generator | AI Tools",
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
