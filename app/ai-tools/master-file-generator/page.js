import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

export const metadata = {
  title: "AB Advisory Group | Master File Preparation Tool",
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
