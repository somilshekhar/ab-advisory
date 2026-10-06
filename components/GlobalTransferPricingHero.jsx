"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GlobalTransferPricingHero() {
  return (
    <section className="flex flex-col w-full relative z-10 overflow-hidden bg-gradient-to-br from-[#f8fcf5] via-[#f3f9f0] to-[#e6f2e2] min-h-[85vh] lg:min-h-[95vh]">
      {/* Main Hero Content */}
      <div className="flex-1 w-full px-6 md:px-16 lg:pl-28 lg:pr-8 pt-16 lg:pt-20 pb-20 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Text */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start z-20">
          <h1 className="font-playfair text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] text-brand-primary font-bold tracking-tight">
            Expert transfer<br />
            pricing delivery &<br />
            Precise Execution
          </h1>

          <p className="mt-8 text-[1.25rem] md:text-[1.5rem] text-brand-badge font-medium max-w-[500px] leading-[1.4]">
            We handle complex TP work. Let us protect your clients.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-accent hover:bg-brand-accent text-black font-semibold rounded-md transition-colors text-[16px]"
            >
              Schedule a call
              <svg className="ml-2 w-5 h-5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <a
              href="#"
              className="hidden items-center justify-center px-6 py-3.5 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold rounded-md transition-colors text-[16px]"
            >
              Download Capability deck
            </a>
          </div>
        </div>

        {/* Right Graphics */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end lg:pr-8 mt-16 lg:mt-0 relative">
          <div className="relative w-full max-w-[700px] lg:max-w-[900px] flex items-center justify-center">
            <Image
              src="/Global Transfer Pricing Hero.png"
              alt="Global Transfer Pricing Hero illustration"
              width={1000}
              height={1000}
              className="w-full max-w-[750px] h-auto object-contain scale-100 lg:scale-[1.05] xl:scale-[1.1] drop-shadow-2xl"
              priority
            />

            {/* Floating Card 1: Transfer Pricing Strategy */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute top-[8%] md:top-[12%] left-[2%] md:left-[8%] z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-1.5 pr-4 md:p-2.5 md:pr-6 flex items-center gap-2 md:gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
              </div>
              <div className="text-[12px] md:text-[14px] font-semibold text-brand-primary leading-tight">
                Transfer<br />Pricing strategy
              </div>
            </motion.div>

            {/* Floating Card 2: Global Compliance */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-[12%] md:top-[16%] right-[2%] sm:right-[5%] md:right-[8%] z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-1.5 pr-4 md:p-2.5 md:pr-6 flex items-center gap-2 md:gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="text-[12px] md:text-[14px] font-semibold text-brand-primary leading-tight">
                Global<br />Compliance
              </div>
            </motion.div>

            {/* Floating Card 3: Sustainable Growth */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-[35%] md:bottom-[40%] right-[2%] sm:right-[4%] md:right-[5%] lg:right-[2%] z-20 bg-white rounded-xl shadow-lg border border-gray-100 p-1.5 pr-4 md:p-2.5 md:pr-6 flex items-center gap-2 md:gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                  <path d="M3 3v18h18"></path>
                  <rect x="7" y="14" width="4" height="5" rx="1"></rect>
                  <rect x="12" y="9" width="4" height="10" rx="1"></rect>
                  <rect x="17" y="4" width="4" height="15" rx="1"></rect>
                </svg>
              </div>
              <div className="text-[12px] md:text-[14px] font-semibold text-brand-primary leading-tight">
                White-label<br />Deliveries
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="w-full bg-[#f4e6b1] py-4 px-6 relative z-20">
        <div className="w-full flex items-center justify-center gap-3 text-center">
          <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"></circle>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8h.01"></path>
          </svg>
          <span className="text-brand-primary font-medium text-[14px] md:text-[15px] tracking-wide">
            Cross-border TP advisory | India, UAE and GCC | No junior-only teams, ever.
          </span>
        </div>
      </div>
    </section>
  );
}
