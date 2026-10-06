export default function WhatWeDeliverTP() {
  return (
    <section className="w-full bg-brand-primary py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-white text-center leading-tight">
          What We Deliver
        </h2>
        
        <p className="mt-4 text-[1.2rem] md:text-[1.3rem] text-[#e0e8dd] text-center max-w-[800px]">
          Global Transfer Pricing Support
        </p>

        {/* 3 Columns */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="text-[1.3rem] font-bold text-black mb-4">
              Advisory & Structuring
            </h3>
            <hr className="border-gray-200 mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Inter Company pricing policy design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">TP Compliant remenuration models</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Drafting intercompany agreements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">TP applicabilty assessments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Pillar Two impact analysis</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <h3 className="text-[1.3rem] font-bold text-black mb-4">
              Compliance & Documentation
            </h3>
            <hr className="border-gray-200 mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Preparation of Audit Ready Study Reports</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Drafting / Updating Local Files & Masterfile</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Evaluating CbCR applicability</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Assisting in filing Transaction Disclosure Forms</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full border border-brand-badge/20 bg-brand-surface flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#203c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-[1.3rem] font-bold text-black mb-4">
              Litigation & Risk Assessment
            </h3>
            <hr className="border-gray-200 mb-6" />
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Litigation strategy & research support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">TP health checks & risk reviews</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">APA preparation support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-700 rounded-full flex-shrink-0"></span>
                <span className="text-[15px] text-gray-800">Safe Harbour evaluation</span>
              </li>
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  );
}
