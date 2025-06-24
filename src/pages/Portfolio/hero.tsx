const AboutUsHero = () => {
  return (
    <div className="relative h-[500px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/portfolio/hero-img.png')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4  lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h1 className="text-[40px] lg:text-[64px] font-semibold lg:leading-normal text-white mb-[10px] uppercase lg:mb-[24px]">
            our portfolio
          </h1>
          
          {/* Subtitle */}
          <p className="text-[14px] lg:text-[14px] text-white font-light leading-relaxed px-4">
            Explore a curated collection of spaces we've transformed — each unique, functional, and inspired by the people who use them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;