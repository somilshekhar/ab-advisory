export default function OurInvestorNetwork() {
  const cards = [
    {
      title: "Seed & Angel Networks",
      description: "Early-stage capital from organized angel networks and sector-focused seed funds for promising companies.",
      image: "/Seed & Angel Networks.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2b5936]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    },
    {
      title: "A/B Venture Capital",
      description: "Institutional VC firms deploying capital into innovative and high-growth businesses.",
      image: "/A_B Venture Capital.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2b5936]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
    {
      title: "Growth Equity",
      description: "Growth-focused investors for established businesses ready to scale aggressively.",
      image: "/Growth Equity.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2b5936]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      title: "Private Equity",
      description: "Strategic capital for established companies seeking structured growth or management buyouts.",
      image: "/Private Equity.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2b5936]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.896 1.984-1.984 1.984H5.734c-1.09 0-1.984-.89-1.984-1.984v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      )
    },
    {
      title: "Family Offices",
      description: "Long-term capital from family offices seeking strategic investment opportunities.",
      image: "/Family Offices.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2b5936]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      )
    },
    {
      title: "Pre-IPO / PIPE",
      description: "Specialist investors focused on companies preparing for pre-IPO or public-market transactions.",
      image: "/Pre-IPO _ PIPE.png",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2b5936]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#fafafa] py-20 lg:py-28 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-[#111] mb-3 tracking-tight text-center">
          Capital Sources We Prepare You For
        </h2>
        <p className="text-[1.05rem] md:text-[1.15rem] text-gray-700 font-medium mb-12 text-center max-w-3xl">
          Preparing you for the right conversations at every stage, with introductions through our partner network.
        </p>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="relative overflow-hidden bg-white rounded-[20px] p-7 border border-gray-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group min-h-[220px]">
              
              {/* Background Image placed on the right */}
              <div className="absolute right-0 top-0 h-full w-2/3 pointer-events-none opacity-90 transition-transform duration-500 group-hover:scale-105 origin-right">
                <img 
                  src={card.image} 
                  alt="" 
                  className="w-full h-full object-contain object-right"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full w-full">
                <div className="w-10 h-10 rounded-[10px] border border-gray-100 flex items-center justify-center mb-5 bg-white shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-[1.2rem] font-bold text-[#111] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed font-medium max-w-[80%]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full mt-8 lg:mt-10 flex flex-col md:flex-row items-start md:items-center justify-start gap-6 md:gap-16 transition-all duration-300">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center shrink-0">
              <img src="/handshakeicon.png" alt="Handshake" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#111] leading-tight">6+</span>
              <span className="text-[14px] text-gray-500 font-medium">Capital Types Covered</span>
            </div>
          </div>
          
          <div className="w-full h-px md:w-px md:h-12 bg-gray-100 my-2 md:my-0"></div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center shrink-0">
              <img src="/earth icon.png" alt="End-to-End" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#111] leading-tight">End-to-End</span>
              <span className="text-[14px] text-gray-500 font-medium">Preparation to Introduction</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

