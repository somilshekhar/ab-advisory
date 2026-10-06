import Image from "next/image";
import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="w-full bg-brand-primary py-24 px-6 md:px-16 lg:px-28 flex flex-col items-center">
      <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-white text-center tracking-tight mb-4">Know our founder</h2>
      <p className="text-[1.1rem] md:text-[1.2rem] text-[#e0e8dd] text-center max-w-3xl mb-16 font-medium">
        International Tax & Transfer Pricing Advisor
      </p>

      <div className="w-full max-w-[1050px] bg-white rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-14 shadow-lg">
        
        {/* Image */}
        <div className="w-full md:w-[45%] flex-shrink-0">
          <div className="relative w-full aspect-[4/4.5] rounded-[24px] overflow-hidden">
            <Image 
              src="/Abhiishhek Bhavsar (CA) image.png" 
              alt="Abhiishhek Bhavsar (CA)" 
              fill 
              className="object-cover" 
              unoptimized 
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center py-2 md:py-6">
          <h3 className="text-[1.8rem] md:text-[2.2rem] font-bold text-black mb-5">Abhiishhek Bhavsar (CA)</h3>
          
          <p className="text-gray-800 font-medium text-[16px] md:text-[17px] leading-[1.6] mb-6">
            Leading Transfer Pricing Advisory with strong communication skills.
          </p>

          <h4 className="text-[1.15rem] font-bold text-black mb-3">Experience includes:</h4>
          <p className="text-gray-800 font-medium text-[16px] md:text-[17px] mb-6">
            Ernst &amp; Young (EY), Bengaluru · Nexdigm (SKP), Pune
          </p>

          <h4 className="text-[1.15rem] font-bold text-black mb-3">Areas of expertise:</h4>
          <p className="text-gray-800 font-medium text-[16px] md:text-[17px] leading-[1.6] mb-8">
            Transfer Pricing · Cross-Border Structuring ·<br className="hidden lg:block" /> International Tax · Litigation Support
          </p>

          <div>
            <Link href="https://www.linkedin.com/in/abhiishhek-bhavsar/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 border border-[#8bb1f6] text-[#3b82f6] hover:bg-blue-50 rounded-lg font-medium transition-colors text-[14px]">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.751-.79-1.751-1.764s.785-1.764 1.751-1.764 1.751.79 1.751 1.764-.784 1.764-1.751 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
