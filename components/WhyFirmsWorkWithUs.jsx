export default function WhyFirmsWorkWithUs() {
  return (
    <section className="w-full bg-brand-primary py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-white text-center leading-tight">
          Why firms work with us
        </h2>
        
        <p className="mt-4 text-[1.2rem] md:text-[1.3rem] text-[#e0e8dd] text-center max-w-[800px]">
          Built differently. On purpose.
        </p>

        {/* 3 Columns */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-14 h-14 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M16 11l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-[1.4rem] font-bold text-black mb-4 leading-snug">
              Partner Lead,not junior Staffed
            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed">
              Every engagement has an experienced CA involved at review and delivey - not just outsourced thinking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-14 h-14 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="M18 9l-5 5-4-4-4 4"></path>
                <path d="M14 9h4v4"></path>
              </svg>
            </div>
            <h3 className="text-[1.4rem] font-bold text-black mb-4 leading-snug">
              Scalable on demand
            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed">
              One file or ten.Peak season or year-round retainer -we scale to your mandate without hiring.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-14 h-14 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-[1.4rem] font-bold text-black mb-4 leading-snug">
              Strict Confidentiality
            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed">
              Full NDA on every engagement. No cross selling, no client poaching. Your relationship stays yours, always.
            </p>
          </div>

        </div>
        
      </div>
    </section>
  );
}
