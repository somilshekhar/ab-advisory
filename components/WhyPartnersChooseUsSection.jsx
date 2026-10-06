export default function WhyPartnersChooseUsSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 px-6 md:px-16 lg:px-28 flex flex-col items-center rounded-[28px] mx-auto max-w-[96%] my-6">
      <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#111] text-center tracking-tight mb-4">Why Partners Choose Us</h2>
      <p className="text-[1.05rem] md:text-[1.15rem] text-gray-500 text-center max-w-3xl mb-14 font-medium">
        Delivering high value execution and backend support across global markets
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1 */}
        <div className="bg-white rounded-[20px] p-7 flex flex-col items-start border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-brand-surface border border-[#d8e2d5] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <h3 className="text-[1.2rem] font-bold text-[#111] mb-2.5">Dual Expertise</h3>
          <p className="text-gray-600 font-medium text-[14px] leading-[1.55]">
            Deep expertise across transfer pricing and strategic transactions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[20px] p-7 flex flex-col items-start border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-brand-surface border border-[#d8e2d5] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <h3 className="text-[1.2rem] font-bold text-[#111] mb-2.5">Global Scale</h3>
          <p className="text-gray-600 font-medium text-[14px] leading-[1.55]">
            Strong experience across India, UAE & global markets.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[20px] p-7 flex flex-col items-start border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-brand-surface border border-[#d8e2d5] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <h3 className="text-[1.2rem] font-bold text-[#111] mb-2.5">Expert Partnership</h3>
          <p className="text-gray-600 font-medium text-[14px] leading-[1.55]">
            Confidential, white-label partnerships with experienced professionals.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[20px] p-7 flex flex-col items-start border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
          <div className="w-11 h-11 rounded-full bg-brand-surface border border-[#d8e2d5] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-brand-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          <h3 className="text-[1.2rem] font-bold text-[#111] mb-2.5">Scalable Support</h3>
          <p className="text-gray-600 font-medium text-[14px] leading-[1.55]">
            Flexible support for complex and high-value mandates.
          </p>
        </div>

      </div>
    </section>
  );
}
