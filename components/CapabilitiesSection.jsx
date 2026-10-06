import Image from "next/image";
import Link from "next/link";

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-brand-surface py-24 px-6 md:px-16 lg:px-28 flex flex-col items-center">
      <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-black text-center tracking-tight mb-2">Our capabilities</h2>
      <p className="text-[1.1rem] md:text-[1.2rem] text-gray-800 text-center max-w-3xl mb-14 font-medium">
        Two integrated practice areas. A common commitment to precision, insight and execution.
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

        {/* Card 1 */}
        <div className="bg-white rounded-[24px] border border-brand-badge/20 p-6 pb-36 md:p-10 md:pb-10 relative overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-[1.6rem] md:text-[1.9rem] font-bold text-black mb-8 relative z-10 group-hover:text-brand-accent transition-colors">Global Transfer Pricing</h3>

          <ul className="space-y-4 mb-14 relative z-10 flex-1">
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              TP Documentation & Compliance Support
            </li>
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              TP Advisory + Pillar 2 Analysis & Support
            </li>
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              TP Litigation Strategy & Support
            </li>
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              APA Analysis
            </li>
          </ul>

          <div className="relative z-10 mt-auto">
            <Link href="/global-transfer-pricing" className="inline-flex items-center px-6 py-2.5 border border-brand-accent text-brand-accent rounded-lg font-semibold hover:bg-brand-surface/50 transition-colors text-[14px]">
              Explore more <span className="ml-2 font-bold text-lg leading-none">→</span>
            </Link>
          </div>

          {/* Illustration */}
          <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] md:w-[320px] md:h-[320px] pointer-events-none">
            <Image src="/globe.png" alt="Globe" fill className="object-contain object-bottom right-0 opacity-90" unoptimized />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[24px] border border-brand-badge/20 p-6 pb-36 md:p-10 md:pb-10 relative overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <h3 className="text-[1.6rem] md:text-[1.9rem] font-bold text-black mb-8 relative z-10 group-hover:text-brand-accent transition-colors">Investment Banking Advisory</h3>

          <ul className="space-y-4 mb-14 relative z-10 flex-1">
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              Pre-IPO Assessment
            </li>
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              M&A deal support (buy/sell side)
            </li>
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              Fundraising & Investor Connects
            </li>
            <li className="flex items-start text-gray-800 font-medium text-[15px] md:text-[16px]">
              <span className="text-brand-badge mr-3 font-semibold">✓</span>
              Deal structuring support
            </li>
          </ul>

          <div className="relative z-10 mt-auto">
            <Link href="/investment-banking" className="inline-flex items-center px-6 py-2.5 border border-brand-accent text-brand-accent rounded-lg font-semibold hover:bg-brand-surface/50 transition-colors text-[14px]">
              Explore more <span className="ml-2 font-bold text-lg leading-none">→</span>
            </Link>
          </div>

          {/* Illustration */}
          <div className="absolute bottom-0 -right-4 w-[180px] h-[180px] md:w-[260px] md:h-[260px] pointer-events-none">
            <Image src="/money plant.png" alt="Money Plant" fill className="object-contain object-bottom right-0 opacity-90" unoptimized />
          </div>
        </div>

      </div>
    </section>
  );
}
