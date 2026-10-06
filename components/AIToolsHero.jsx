import Image from "next/image";

export default function AIToolsHero() {
  return (
    <section className="w-full relative bg-brand-surface overflow-hidden pt-8 lg:pt-10 pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col justify-start lg:justify-center min-h-[85vh] lg:min-h-[95vh]">
      
      {/* Background Gradient (optional, to mimic the soft light in the top-left) */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white opacity-40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start lg:items-center relative z-10 lg:flex-grow">
        
        {/* Left Content */}
        <div className="flex flex-col max-w-xl xl:max-w-2xl pt-0 lg:pt-4">
          <h1 className="font-playfair text-[2.5rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] font-bold text-brand-primary leading-[1.1] tracking-tight">
            Explore Our<br/>Knowledge Bank &<br/>Free TP Tools
          </h1>
          
          <p className="mt-4 md:mt-6 text-[1.1rem] sm:text-[1.2rem] md:text-[1.4rem] text-gray-800 font-medium leading-relaxed max-w-[95%] lg:max-w-[90%]">
            Practical tools and resources to simplify transfer pricing and cross-border transaction workflows
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[400px] xl:h-[450px] flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
          <div className="relative w-full h-full lg:scale-110 lg:translate-x-10 lg:translate-y-6">
            <Image 
              src="/AI Tools & Knowledge Bank.png" 
              alt="AI Tools & Knowledge Bank"
              fill
              className="object-contain object-center lg:object-right"
              priority
              unoptimized
            />
          </div>
        </div>

      </div>

    </section>
  );
}
