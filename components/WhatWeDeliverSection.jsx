import Image from "next/image";

export default function WhatWeDeliverSection() {
  return (
    <section className="w-full bg-brand-primary py-24 px-6 md:px-16 lg:px-28 flex flex-col items-center">
      <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-white text-center tracking-tight mb-4">What we deliver?</h2>
      <p className="text-[1.1rem] md:text-[1.2rem] text-[#e0e8dd] text-center max-w-3xl mb-16 font-medium">
        Focused expertise across international tax and transaction advisory.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-[24px] overflow-hidden flex flex-col shadow-lg border border-brand-badge transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#5a8752] group cursor-pointer">
          <div className="relative w-full h-[240px] overflow-hidden">
            <Image src="/image 1.png" alt="Transfer Pricing Mandates" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-[1.5rem] font-bold text-black mb-4">Transfer Pricing Mandates</h3>
            <p className="text-gray-800 font-medium text-[16px] leading-[1.5]">
              Seamless backend support (white-labelling)<br className="hidden lg:block" /> for consulting firms.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[24px] overflow-hidden flex flex-col shadow-lg border border-brand-badge transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#5a8752] group cursor-pointer">
          <div className="relative w-full h-[240px] overflow-hidden">
            <Image src="/image 2" alt="Cross-Border Structuring" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-[1.5rem] font-bold text-black mb-4">Cross-Border Structuring</h3>
            <p className="text-gray-800 font-medium text-[16px] leading-[1.5]">
              Inter-company remuneration structuring<br className="hidden lg:block" /> across India, UAE & global markets.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[24px] overflow-hidden flex flex-col shadow-lg border border-brand-badge transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#5a8752] group cursor-pointer">
          <div className="relative w-full h-[240px] overflow-hidden">
            <Image src="/image 3.png" alt="Transaction Support (India)" fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-[1.5rem] font-bold text-black mb-4">Transaction Support (India)</h3>
            <p className="text-gray-800 font-medium text-[16px] leading-[1.5]">
              Fundraising support for India-focused<br className="hidden lg:block" /> businesses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
