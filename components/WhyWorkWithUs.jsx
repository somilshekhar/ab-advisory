"use client";
import Image from "next/image";
import FadeIn from "./FadeIn";

const features = [
  {
    number: "01",
    image: "/We Tell You the Truth First1.png",
    title: "We Tell You the Truth First",
    description: "We assess your readiness honestly and help address gaps before approaching investors."
  },
  {
    number: "02",
    image: "/Structuring Depth Beyond Typical IB2.png",
    title: "Tax-Led Structuring Insight",
    description: "Our M&A expertise helps spot structural issues early."
  },
  {
    number: "03",
    image: "/Access Without the Cold Start3.png",
    title: "Warm Introductions, Not Cold Outreach",
    description: "Introductions through our partner network, matched to your stage."
  }
];

export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-white pt-20 lg:pt-24 flex flex-col">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 w-full flex flex-col items-center">
        <FadeIn>
          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-center text-[#111] mb-4 tracking-tight">
            Why Work With Us
          </h2>
          <p className="text-gray-800 text-[1.1rem] md:text-[1.25rem] text-center mb-16 max-w-2xl mx-auto font-medium">
            Practical expertise and strategic support from preparation to execution.
          </p>
        </FadeIn>

        <div className="flex flex-col w-full mb-16">
          <div className="w-full flex flex-col border-t border-b border-gray-200/80">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0.1 * index} className="w-full">
                <div className={`flex flex-col md:flex-row items-start md:items-center py-8 md:py-10 w-full ${index !== features.length - 1 ? 'border-b border-gray-200/80' : ''}`}>
                  
                  {/* Left: Number + Icon */}
                  <div className="flex items-center gap-6 md:gap-10 md:w-[35%] lg:w-[32%] shrink-0 mb-5 md:mb-0">
                    <span className="text-[1.5rem] md:text-[1.8rem] font-bold text-[#1b3b27] font-sans leading-none w-8">
                      {feature.number}
                    </span>
                    <div className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] flex items-center justify-center shrink-0">
                      <Image 
                        src={feature.image} 
                        alt={feature.title} 
                        width={90} 
                        height={90} 
                        className="object-contain w-full h-full"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Middle: Title */}
                  <div className="md:w-[35%] lg:w-[32%] shrink-0 pr-6 mb-3 md:mb-0">
                    <h3 className="text-[1.3rem] lg:text-[1.5rem] font-bold text-[#111] leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Right: Description */}
                  <div className="flex-1 text-[#333] text-[15px] lg:text-[16px] leading-[1.6]">
                    {feature.description}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <FadeIn delay={0.6} className="w-full mt-4 lg:mt-8">
        <div className="w-full bg-brand-accent rounded-t-[16px] md:rounded-t-[20px] px-6 md:px-16 lg:px-28 py-8 md:py-10 flex justify-center">
          <div className="max-w-7xl w-full flex items-start gap-4 md:gap-5">
            <div className="flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-brand-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-brand-primary text-[13.5px] md:text-[14px] leading-[1.6] font-medium">
              ABAdvisory Group LLP provides consulting and transaction preparation services only. We are not registered with SEBI and do not conduct any regulated activity including merchant banking, portfolio management, or investment advisory as defined under the SEBI Act, 1992. All regulated activities are conducted exclusively by our empanelled SEBI-registered Merchant Banking partners in their independent capacity and engagement with clients.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
