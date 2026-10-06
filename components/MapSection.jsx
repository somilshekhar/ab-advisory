export default function MapSection() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-28 py-12 md:py-20 flex justify-center bg-white">
      <div className="w-full border border-gray-200 rounded-[24px] overflow-hidden shadow-sm flex flex-col">
        {/* Map Area */}
        <div className="w-full h-[350px] md:h-[500px] bg-gray-100 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5367670181514!2d72.5273180760168!3d23.040798115647572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b2c1f0923d%3A0xc3f83733cd3c85f9!2sNobles%20Trade%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="AB Advisory Office Location"
          ></iframe>
        </div>
        
        {/* Info Panel */}
        <div className="bg-white p-6 md:px-10 md:py-8 flex flex-col justify-center">
          <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold text-brand-primary mb-1.5 tracking-tight">
            ABAdvisory Group LLP
          </h3>
          <p className="text-brand-primary/80 font-medium text-[15px] md:text-[16px]">
            Your global partner for transfer pricing,as also for strategic funding solutions
          </p>
        </div>
      </div>
    </section>
  );
}
