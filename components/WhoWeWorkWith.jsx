export default function WhoWeWorkWith() {
  const cards = [
    {
      title: "Founders & Startups",
      description: "For founders preparing to raise their first institutional capital. We help assess readiness, identify gaps, and prepare for investor conversations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[22px] h-[22px] text-brand-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: "Promoters of Growth-Stage Companies",
      description: "For businesses with proven traction seeking growth capital. We help structure the opportunity and introduce you to the right partners.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      )
    },
    {
      title: "Pre-IPO Companies",
      description: "For companies preparing for the public markets. We help strengthen readiness and introduce you to SEBI-registered merchant bankers and institutional investors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[22px] h-[22px] text-brand-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-brand-primary py-20 lg:py-28 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white mb-3 tracking-tight">
          Who We Work With
        </h2>
        <p className="text-[1.05rem] md:text-[1.15rem] text-brand-text-green font-medium mb-14 text-center">
          Supporting businesses from early growth to pre-IPO readiness.
        </p>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-8 lg:p-10 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-full bg-brand-surface border border-brand-badge/20 flex items-center justify-center flex-shrink-0 mb-6">
                {card.icon}
              </div>
              <h3 className="text-[1.3rem] lg:text-[1.4rem] font-bold text-[#111] tracking-tight mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-gray-800 text-[15px] leading-relaxed font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
