export default function KnowledgeBankSection() {
  const videoIds = [
    "cIsDONONaHE",
    "X5dAh93XaQk",
    "9MArKOzpvo4",
    "lBa5OxE9YR0",
    "eOqM1zJPeHU",
    "W7sA16L8DaU",
    "ndSvfhSJ0KQ",
    "h2-dA0DcY1A"
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        
        {/* Title */}
        <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-bold text-brand-primary mb-12 font-playfair leading-tight">
          Knowledge Bank - Videos from Abhiishhek's Youtube Channel - <span className="text-red-600">/theLearningCA</span>
        </h2>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {videoIds.map((id, index) => (
            <div key={index} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 group bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <iframe 
                src={`https://www.youtube.com/embed/${id}`} 
                title={`YouTube video player ${index + 1}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
