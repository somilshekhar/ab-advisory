"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const pathname = usePathname();
  
  // Date check for the event (after Oct 17, 2026)
  const isAfterEvent = new Date() > new Date("2026-10-18T00:00:00");
  const announcementText = isAfterEvent
    ? "Thank you, Singapore. Continue the conversation →"
    : "Official Social Media Promotion Partner, Global Tax Summit & Awards, Singapore Edition by Achromic Point · 16 Oct 2026 → Talk to us about APAC transfer pricing";

  return (
    <div className="w-full sticky top-0 z-50 flex flex-col">
      <AnimatePresence>
        {isAnnouncementVisible && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-brand-accent text-brand-primary relative overflow-hidden"
          >
            <div className="px-4 py-2 md:py-2.5 flex items-center justify-between min-h-[40px] w-full relative">
              <div className="w-[calc(100%-32px)] overflow-hidden flex items-center relative mask-image-linear-gradient">
                <style dangerouslySetInnerHTML={{__html: `
                  .mask-image-linear-gradient {
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                  }
                `}} />
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40,
                  }}
                >
                  {[...Array(10)].map((_, i) => (
                    <Link key={i} href="/global-transfer-pricing" className="text-[13.5px] md:text-[14px] font-semibold hover:underline px-8 leading-[1.4] inline-block shrink-0">
                      {announcementText}
                    </Link>
                  ))}
                </motion.div>
              </div>
              <button 
                onClick={() => setIsAnnouncementVisible(false)} 
                className="absolute right-3 md:right-6 text-brand-primary hover:opacity-70 focus:outline-none p-1 bg-brand-accent z-10 shadow-[-10px_0_10px_#e2b73a]" 
                aria-label="Close announcement"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="w-full bg-brand-primary px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Left - Logo */}
      <div className="flex-shrink-0 lg:w-[200px]">
        <Image
          src="/logo.png"
          alt="AB Advisory Logo"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
          unoptimized
        />
      </div>

      {/* Center - Desktop Nav (Menus) */}
      <nav className="hidden lg:flex items-center justify-center space-x-12 text-brand-text-green text-[15px] font-normal tracking-wide flex-1">
        <Link href="/" className={`relative pb-1 group ${pathname === '/' ? 'text-white' : 'text-brand-text-green hover:text-white transition-colors'}`}>
          Home
          <span className={`absolute left-0 bottom-0 h-[1.5px] bg-white transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
        <Link href="/global-transfer-pricing" className={`relative pb-1 group ${pathname === '/global-transfer-pricing' ? 'text-white' : 'text-brand-text-green hover:text-white transition-colors'}`}>
          Global Transfer Pricing
          <span className={`absolute left-0 bottom-0 h-[1.5px] bg-white transition-all duration-300 ${pathname === '/global-transfer-pricing' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
        <Link href="/investment-banking" className={`relative pb-1 group ${pathname === '/investment-banking' ? 'text-white' : 'text-brand-text-green hover:text-white transition-colors'}`}>
          Investment Banking
          <span className={`absolute left-0 bottom-0 h-[1.5px] bg-white transition-all duration-300 ${pathname === '/investment-banking' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
        <Link href="/ai-tools" className={`relative pb-1 group ${pathname === '/ai-tools' ? 'text-white' : 'text-brand-text-green hover:text-white transition-colors'}`}>
          Insights & Tools
          <span className={`absolute left-0 bottom-0 h-[1.5px] bg-white transition-all duration-300 ${pathname === '/ai-tools' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
        <Link href="/contact" className={`relative pb-1 group ${pathname === '/contact' ? 'text-white' : 'text-brand-text-green hover:text-white transition-colors'}`}>
          Contact
          <span className={`absolute left-0 bottom-0 h-[1.5px] bg-white transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
      </nav>

      {/* Right - Contact Button & Mobile Menu Toggle */}
      <div className="flex items-center justify-end lg:w-[200px] gap-3 sm:gap-4">
        {/* Contact Button */}
        <div>
          <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="px-3 py-1.5 sm:px-6 sm:py-2.5 bg-brand-accent text-brand-primary text-[13px] sm:text-[15px] font-semibold rounded hover:bg-brand-accent transition-colors cursor-pointer whitespace-nowrap">
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-primary flex flex-col items-center py-6 space-y-5 shadow-xl z-50 lg:hidden border-t border-white/10"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-[16px] font-medium">Home</Link>
            <Link href="/global-transfer-pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-green hover:text-white text-[16px]">Global Transfer Pricing</Link>
            <Link href="/investment-banking" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-green hover:text-white text-[16px]">Investment Banking</Link>
            <Link href="/ai-tools" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-green hover:text-white text-[16px]">Insights & Tools</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-text-green hover:text-white text-[16px]">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
      <ContactModal />
    </div>
  );
}
