"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HowWeHelp from "../../components/HowWeHelp";
import OurInvestorNetwork from "../../components/OurInvestorNetwork";
import WhoWeWorkWith from "../../components/WhoWeWorkWith";
import WhyWorkWithUs from "../../components/WhyWorkWithUs";
import CTASection from "../../components/CTASection";
import FadeIn from "../../components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InvestmentBankingPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#f6f9f7] overflow-hidden flex flex-col min-h-[85vh] lg:min-h-[95vh]">
        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col lg:flex-row items-center justify-between relative z-10 px-6 md:px-16 lg:px-28 pt-12 pb-0 lg:pt-16 lg:pb-0 xl:pt-20 xl:pb-0">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(15px)", x: -50 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[50%] flex flex-col items-start z-20 lg:-translate-y-12">
            <h1 className="font-playfair text-[3.2rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[4.8rem] leading-[1.1] text-[#111] font-bold tracking-tight">
              Get IPO-ready and <span className="text-brand-accent">investor-ready</span><br />
              before the bankers arrive.
            </h1>
            
            <p className="mt-6 md:mt-8 text-[1.1rem] md:text-[1.25rem] text-gray-800 font-medium max-w-[500px] leading-[1.5]">
              Pre-IPO readiness, structuring and investor preparation for growth companies in India.
            </p>
            
            <div className="mt-10 md:mt-12">
              <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 bg-brand-accent hover:bg-[#c9a130] text-black font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(222,178,58,0.4)] active:scale-95 text-[15px] group">
                Get a Pre-IPO Readiness Check
                <svg className="ml-2.5 w-4 h-4 stroke-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(15px)", x: 50 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[50%] mt-10 lg:mt-0 flex justify-center lg:justify-end relative lg:self-end">
             <Image 
               src="/investment-bankingImg.png" 
               alt="Investment Banking Analytics" 
               width={900} 
               height={900} 
               className="w-full max-w-[750px] lg:max-w-[1000px] h-auto object-contain lg:scale-[1.4] xl:scale-[1.5] lg:translate-x-16 xl:translate-x-24 origin-bottom-right"
               priority
               unoptimized
             />
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full bg-brand-accent py-4 px-6 relative z-20">
          <div className="w-full flex items-center justify-center text-center">
            <p className="text-brand-primary font-medium text-[14px] md:text-[15.5px] flex items-center justify-center flex-wrap gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <span>Seed to Pre-IPO <span className="mx-1 md:mx-2 font-normal text-black/40">|</span> India, UAE & GCC <span className="mx-1 md:mx-2 font-normal text-black/40">|</span> No SEBI-regulated activity conducted directly.</span>
            </p>
          </div>
        </motion.div>
      </section>
      
      <FadeIn delay={0.2}>
        <HowWeHelp />
      </FadeIn>
      <FadeIn delay={0.4}>
        <OurInvestorNetwork />
      </FadeIn>
      <FadeIn delay={0.6}>
        <WhoWeWorkWith />
      </FadeIn>
      
      <WhyWorkWithUs />
      
      <FadeIn delay={0.2}>
        <CTASection />
      </FadeIn>

      <Footer />
    </main>
  );
}
