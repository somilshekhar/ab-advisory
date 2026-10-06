"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-primary pt-20 pb-8 px-6 md:px-16 lg:px-28">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
        
        {/* Brand Col */}
        <div className="lg:col-span-4 flex flex-col items-start text-left lg:pr-8">
          <Image 
            src="/logo.png" 
            alt="AB Advisory Logo" 
            width={140} 
            height={140} 
            className="w-28 h-28 object-contain mb-5" 
            unoptimized
          />
          <p className="text-white/90 text-[14px] md:text-[15px] font-medium leading-[1.6] max-w-[320px]">
            Partner-led Global Transfer Pricing and Investment Banking advisory for businesses and advisory firms.
          </p>
        </div>

        {/* Links Cols */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 lg:pl-10">
          {/* Global Transfer Pricing */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-brand-accent font-medium text-[16px] mb-4 sm:mb-8">Global Transfer Pricing</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li><Link href="/global-transfer-pricing#documentation" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">TP Documentation & Compliance</Link></li>
              <li><Link href="/global-transfer-pricing#advisory" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">TP Advisory & Pillar Two</Link></li>
              <li><Link href="/global-transfer-pricing#litigation" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">TP Litigation Support</Link></li>
              <li><Link href="/global-transfer-pricing#apa" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">APA Analysis</Link></li>
              <li><Link href="/global-transfer-pricing#white-label" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">White-Label Partnership</Link></li>
            </ul>
          </div>

          {/* Investment Banking */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-brand-accent font-medium text-[16px] mb-4 sm:mb-8">Investment Banking</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li><Link href="/investment-banking" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">Pre-IPO Assessment</Link></li>
              <li><Link href="/investment-banking" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">M&A Deal Support</Link></li>
              <li><Link href="/investment-banking" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">Fundraising & Investor Connects</Link></li>
              <li><Link href="/investment-banking" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">Deal Structuring</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-brand-accent font-medium text-[16px] mb-4 sm:mb-8">Connect</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li><a href="mailto:abhiishhek@abadvisorygroup.in" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">abhiishhek@abadvisorygroup.in</a></li>
              <li><a href="https://wa.me/919773037381" target="_blank" rel="noopener noreferrer" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">+91 97730 37381</a></li>
              <li><button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium cursor-pointer">Book a Call</button></li>
              <li><a href="https://linkedin.com/in/abhiishhek-bhavsar" target="_blank" rel="noopener noreferrer" className="text-white/95 hover:text-white transition-colors text-[14px] md:text-[15px] font-medium">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEBI Disclaimer */}
      <div className="w-full mx-auto border-t border-white/20 pt-8 pb-8 flex items-start text-left">
        <p className="text-white/70 text-[12px] md:text-[13px] leading-[1.6]">
          ABAdvisory Group LLP provides consulting and transaction preparation services only. We are not registered with SEBI and do not conduct any regulated activity including merchant banking, portfolio management, or investment advisory as defined under the SEBI Act, 1992. All regulated activities are conducted exclusively by our empanelled SEBI-registered Merchant Banking partners in their independent capacity and engagement with clients.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="w-full mx-auto border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <p className="text-white/90 text-[14px] md:text-[15px] font-medium text-center sm:text-left flex items-center">
          ©️ 2026 ABAdvisory Group LLP. All rights reserved.
        </p>
        <p className="text-white/90 text-[14px] md:text-[15px] font-medium text-center sm:text-right">
          Made by <a href="https://convergedigitals.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Converge Digitals</a>
        </p>
      </div>
    </footer>
  );
}
