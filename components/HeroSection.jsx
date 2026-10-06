import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex-1 w-full flex flex-col lg:flex-row items-center justify-between relative z-10 overflow-visible">
      {/* Left Content */}
      <div className="w-full lg:w-[60%] xl:w-[55%] 2xl:w-1/2 px-6 md:px-16 lg:pl-20 xl:pl-28 lg:pr-4 pt-12 lg:pt-0 flex flex-col justify-center items-start">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm border border-brand-badge/40 rounded-[2rem] sm:rounded-full pl-2 pr-4 sm:pr-5 py-2 mb-8 shadow-sm">
          <div className="flex -space-x-2 shrink-0">
            <Image src="/globeicon.png" alt="Global" width={28} height={28} className="rounded-full w-7 h-7 border-2 border-white object-cover" unoptimized />
            <Image src="/indiaicon.png" alt="India" width={28} height={28} className="rounded-full w-7 h-7 border-2 border-white object-cover" unoptimized />
            <Image src="/UAEicon.png" alt="UAE" width={28} height={28} className="rounded-full w-7 h-7 border-2 border-white object-cover" unoptimized />
          </div>
          <span className="text-[12px] sm:text-[14px] text-gray-800 font-medium leading-[1.3] py-0.5 max-w-[280px] sm:max-w-none">
            Trusted across key markets - India, UAE & Global markets
          </span>
        </div>

        <h1 className="font-playfair text-[2.5rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[3rem] xl:text-[3.8rem] 2xl:text-[4.5rem] leading-[1.05] text-black font-bold tracking-tight">
          <span className="lg:whitespace-nowrap">Global Transfer Pricing,</span><br />
          <span className="text-brand-accent lg:whitespace-nowrap">Partner-Led and Built</span><br />
          <span className="text-brand-accent">for</span> Execution
        </h1>

        <p className="mt-6 text-[1.1rem] md:text-[1.3rem] text-gray-900 font-medium max-w-[550px] leading-[1.4]">
          TP documentation, advisory and dispute support across Singapore, UAE, EU, UK, India and global corridors, delivered directly or as a white-label partner.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 bg-brand-accent hover:bg-brand-accent/90 text-black font-semibold rounded-lg transition-colors text-[15px]">
            Let&apos;s Connect
            <svg className="ml-2.5 w-4 h-4 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Right Content - Globe */}
      <div className="w-full lg:w-[40%] xl:w-[45%] 2xl:w-1/2 flex justify-center lg:justify-end lg:pr-8 mt-16 lg:mt-0 relative">
        <div className="relative w-full max-w-[700px] lg:max-w-[900px] flex items-center justify-center">
          <Image
            src="/India_s_Global_Connections_Globe-removebg-preview.png"
            alt="Globe showing India's global connections"
            width={1000}
            height={1000}
            className="w-full max-w-[750px] h-auto object-contain scale-100 lg:scale-[1.05] xl:scale-[1.1] drop-shadow-[0_0_60px_rgba(0,0,0,0.25)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
