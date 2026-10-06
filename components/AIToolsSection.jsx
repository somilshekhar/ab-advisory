import Image from "next/image";
import Link from "next/link";

export default function AIToolsSection() {
  const tools = [
    {
      title: "Generate Your Own Functional Analysis Questionnaire – GPT",
      image: "/Functional-Analysis-GPT.jpg",
      link: "https://chatgpt.com/g/g-69ce185436a88191bff9cf742f9844c8-transfer-pricing-functionalanalysis-io"
    },
    {
      title: "Generate OECD Local TP Files for Free",
      image: "/Local-TP-Files.jpg",
      link: "/ai-tools/local-file-generator"
    },
    {
      title: "Benchmarking Range Calculator",
      image: "/Benchmarking-Range-Calculator.jpg",
      link: "/ai-tools/benchmarking-calculator"
    },
    {
      title: "Free Master File Preparation Tool",
      image: "/Master-File-Tool.jpg",
      link: "/ai-tools/master-file-generator"
    },
    {
      title: "TP Position Tool",
      image: "/TP-Position-Tool.jpg",
      link: "/ai-tools/position-tool"
    },
    {
      title: "PDF Redaction Tool",
      image: "/PDF-Redaction-Tool.jpg",
      link: "/ai-tools/pdf-redaction"
    },
    {
      title: "PDF Compressor Tool",
      image: "/PDF-Compressor-Tool.jpg",
      link: "/ai-tools/pdf-compressor"
    }
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        
        <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-brand-primary leading-tight">
          Our In-house Developed AI Tools
        </h2>
        
        <p className="mt-4 mb-12 text-[1.1rem] md:text-[1.25rem] text-gray-700 max-w-3xl">
          Practical tools designed to simplify transfer pricing analysis, documentation, and everyday workflows.
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              
              {/* Image */}
              <div className="w-full h-[240px] relative border-b border-gray-100 bg-gray-50">
                <Image 
                  src={tool.image} 
                  alt={tool.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-[1.3rem] font-bold text-black leading-snug mb-8 pr-4">
                  {tool.title}
                </h3>
                
                <Link 
                  href={tool.link} 
                  target={tool.link.startsWith('http') ? "_blank" : undefined}
                  rel={tool.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex items-center text-brand-accent font-semibold text-[15px] hover:text-brand-accent transition-colors group"
                >
                  Try free 
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
