import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

export const metadata = {
  title: "TP Position Tool | AI Tools",
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
