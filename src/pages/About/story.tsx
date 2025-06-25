const OurStorySection = () => {
  return (
    <div className="bg-[#EAD6BD26] py-[40px] px-[16px] lg:py-[60px] lg:px-[80px]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            {/* Section Label */}
            <div>
              <p className="text-sm tracking-wider lg:text-[12px] font-medium text-[#000]">
                • WHAT WE DO
              </p>
              <h2 className="text-3xl lg:text-[24px] leading-snug lg:leading-[40px] font-semibold text-[#3B241E]">
                OUR STORY
              </h2>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-[20px] lg:space-y-[20px] text-[#000000] leading-relaxed">
              <p className="text-[14px] lg:text-[14px] lg:leading-normal">
                Fort Interiors is a renowned interior design consultancy,
                project management as well as products procurement and supply
                company that offers interior design services for corporate,
                residential and retail clients. We are a team of competent,
                creative and committed professionals who offer bespoke design
                services.
              </p>

              <p className="text-[14px] lg:text-[14px] lg:leading-normal">
                Our clients requirements are handled on an individual basis,
                irrespective of it's size while also delivering interior
                solution that are cost effective.
              </p>

              <p className="text-[14px] lg:text-[14px] lg:leading-normal">
                <span className="font-semibold text-[#3B241E]">
                  Our Mission
                </span>{" "}
                - To translate our client's idea and our own professional
                holistic vision into a space combining aesthetic, comfort,
                functionality and practicality.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <video
              src="https://res.cloudinary.com/dzwv3fba5/video/upload/v1750855628/about-vid_v7e4nd.mp4"
              poster="/about/sec2-img.png"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[400px] lg:h-[313px] object-cover"
            >
              Your browser does not support the video tag.
            </video>

            {/* Optional overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
