"use client";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full relative py-16 md:py-20 lg:py-28 px-6 md:px-16 lg:px-28 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image 
          src="/BGCTA.png" 
          alt="Global Connections" 
          fill 
          className="hidden md:block object-cover object-center md:object-right" 
          unoptimized
        />
        {/* Mobile Image */}
        <Image 
          src="/lalala.png" 
          alt="Global Connections Mobile" 
          fill 
          className="block md:hidden object-cover object-center" 
          unoptimized
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.15] tracking-tight mb-6">
          Let&apos;s have a <span className="text-brand-accent">confidential conversation</span>
        </h2>
        <p className="text-[1.1rem] md:text-[1.25rem] text-white font-medium mb-10 leading-[1.5]">
          No pitch decks, no pressure, just a direct conversation about whether we&apos;re the right fit.
        </p>
        <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-accent hover:bg-brand-accent text-black font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(226,183,58,0.3)] active:scale-95 text-[15px] group cursor-pointer">
          Get a Readiness Check
          <svg className="ml-2 w-5 h-5 stroke-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
