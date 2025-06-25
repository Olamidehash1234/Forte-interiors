const AboutUsHero = () => {
  return (
    <div className="relative h-[500px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dzwv3fba5/image/upload/v1750858799/hero-img_mi7lmp.png')"
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
           our services
          </h1>
          
          {/* Subtitle */}
          <p className="text-[14px] lg:text-[14px] text-white font-light leading-relaxed px-4">
            Explore our comprehensive suite of services tailored to transform your space with style, comfort, and functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;