import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import IframeWrapper from "../../../components/IframeWrapper";

export const metadata = {
  title: "AB Advisory Group | Benchmarking Range Calculator",
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
