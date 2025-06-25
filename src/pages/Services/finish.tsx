const WallFinishComponent = () => {
  const services = [
    { name: "Wall Cladding" },
    { name: "Wall Niche" },
    { name: "Wall Prints" },
    { name: "Wainscoting" }
  ];

  const additionalServices = [
    { name: "Screeding" },
    { name: "Wallpaper" },
    { name: "TV/Media Walls" }
  ];

  const finalServices = [
    { name: "3D Panels" },
    { name: "Dry/False Walls" },
    { name: "Painting" }
  ];

  return (
    <div className="px-[16px] lg:px-[80px] pt-[40px] lg:pb-[0px] lg:pt-[20px] bg-white">
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
        {/* Left section - Text content */}
        <div className="">
          {/* Title */}
          <h2 className="text-[18px] lg:text-[24px] font-semibold tracking-wider text-[#3B241E] uppercase mb-6 lg:mb-[16px] leading-tight lg:leading-[40px]">
            WALL FINISH
          </h2>
          
          {/* Description */}
          <p className="text-sm lg:text-[14px] max-w-[620px] text-[#000000]leading-normal mb-8 lg:mb-[16px]">
            Wall finishes play a key role in enhancing interiors and exteriors. Our team delivers stylish wall solutions tailored to your taste. Wall finish services include:
          </p>
          
          {/* Services grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {/* First column */}
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  <span className="text-sm lg:text-[14px] lg:leading-normal text-[#000]">{service.name}</span>
                </div>
              ))}
            </div>
            
            {/* Second column */}
            <div className="space-y-2">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  <span className="text-sm lg:text-[14px] lg:leading-normal text-[#000]">{service.name}</span>
                </div>
              ))}
            </div>
            
            {/* Third column */}
            <div className="space-y-2">
              {finalServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  <span className="text-sm lg:text-[14px] lg:leading-normal text-[#000]">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right section - Image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dzwv3fba5/image/upload/v1750858942/finish-img_izsr8t.png"
            alt="Interior wall finish showcasing artistic wall treatment with contemporary design elements"
            className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
          />
        </div>
      </div>
      
      {/* Bottom border line */}
      <div className="w-full h-px bg-gray-400 mt-[40px]"></div>
    </div>
  );
};

export default WallFinishComponent;