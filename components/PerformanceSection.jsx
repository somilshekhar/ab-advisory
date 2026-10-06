export default function PerformanceSection() {
  return (
    <section className="w-full bg-brand-surface py-12 md:py-16 px-6 md:px-16 lg:px-28 flex flex-col items-center">
      <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold text-black text-center tracking-tight mb-3">Our Performance</h2>
      <p className="text-[1.1rem] md:text-[1.3rem] text-gray-800 text-center max-w-3xl mb-10 font-medium">
        Since Fiscal Year 2023
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="bg-brand-primary rounded-[24px] p-6 md:p-8 flex flex-col justify-center min-h-[180px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-brand-primary cursor-default">
          <h3 className="font-playfair text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-white leading-none mb-4 tracking-tight">
            280<span className="text-[2.5rem] md:text-[3rem] font-sans font-light ml-1">+</span>
          </h3>
          <p className="text-white/95 font-medium text-[15px] leading-[1.5]">
            TP projects delivered<br />(India + UAE)
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-brand-primary rounded-[24px] p-6 md:p-8 flex flex-col justify-center min-h-[180px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-brand-primary cursor-default">
          <h3 className="font-playfair text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-white leading-none mb-4 tracking-tight">
            10<span className="text-[2.5rem] md:text-[3rem] font-sans font-light ml-1">+</span>
          </h3>
          <p className="text-white/95 font-medium text-[15px] leading-[1.5]">
            Years in International<br />Tax & TP
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-brand-primary rounded-[24px] p-6 md:p-8 flex flex-col justify-center min-h-[180px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-brand-primary cursor-default">
          <h3 className="font-playfair text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-white leading-none mb-4 tracking-tight flex items-baseline">
            100<span className="text-[2.8rem] md:text-[3.2rem] ml-1">%</span>
          </h3>
          <p className="text-white/95 font-medium text-[15px] leading-[1.5]">
            White-label<br />confidentiality
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-brand-primary rounded-[24px] p-6 md:p-8 flex flex-col justify-center min-h-[180px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-brand-primary cursor-default">
          <h3 className="font-playfair text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-white leading-none mb-4 tracking-tight">
            24<span className="text-[2.5rem] md:text-[3rem] font-sans font-light ml-1">+</span>
          </h3>
          <p className="text-white/95 font-medium text-[14px] leading-[1.5]">
            Consulting firms work with us:<br />4 leading firms in the UAE and 20+ CA and advisory firms in India
          </p>
        </div>

      </div>
    </section>
  );
}
