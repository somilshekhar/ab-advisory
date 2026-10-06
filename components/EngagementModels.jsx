export default function EngagementModels() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-black text-center leading-tight">
          Engagement Models
        </h2>
        
        <p className="mt-4 text-[1.2rem] md:text-[1.3rem] text-gray-800 text-center max-w-[800px] font-medium">
          Work with us the way that suits you
        </p>

        {/* 3 Columns */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-brand-badge/20 p-8 lg:p-10 flex flex-col shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <h3 className="text-[1.3rem] font-bold text-black mb-6">
              White label execution
            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed">
              we work entirely under your firm's brand. Deliverables carry your letterhead - your client never know we exist.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-brand-badge/20 p-8 lg:p-10 flex flex-col shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <circle cx="10" cy="13" r="2"></circle>
                <path d="M7 18v-1a3 3 0 0 1 6 0v1"></path>
              </svg>
            </div>
            <h3 className="text-[1.3rem] font-bold text-black mb-6">
              Sub-contracted assignments
            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed">
              You refer the TP work to us directly. We deliver, you review and present to your client. Clean handoff, clean output.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-brand-badge/20 p-8 lg:p-10 flex flex-col shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M9 16l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-[1.3rem] font-bold text-black mb-6">
              Ongoing retainer
            </h3>
            <p className="text-[15px] text-gray-800 leading-relaxed">
              For firms with regular TP mandates- a dedicated monthly arrangement with priority turnaround.
            </p>
          </div>

        </div>
        
      </div>
    </section>
  );
}
