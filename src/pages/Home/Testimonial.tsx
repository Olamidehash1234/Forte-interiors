import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The team captured our vision perfectly – elegant, timeless, and practical.",
      author: "Mrs. Eniola A., Lagos",
    },
    {
      quote:
        "Their attention to detail and understanding of our lifestyle was exceptional. Every space feels perfectly designed for our family.",
      author: "Mr. Adebayo O., Abuja",
    },
    {
      quote:
        "Professional, creative, and delivered beyond our expectations. Our home is now a masterpiece of functional beauty.",
      author: "Mrs. Funmi R., Ibadan",
    },
    {
      quote:
        "The design process was seamless and collaborative. They transformed our space into something we never imagined possible.",
      author: "Dr. Kemi S., Victoria Island",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="px-[16px] lg:pl-[80px] lg:pr-0 py-[40px]">
      {/* Header */}
      <div className="mb-12 sm:mb-16 lg:mb-[40px]">
        <p className="text-[12px] lg:text-[12px] font-medium tracking-wider uppercase mb-4 lg:mb-[10px]">
          • WHAT OUR CLIENT SAYS
        </p>
        <h1 className="text-4xl lg:text-[40px] leading-none tracking-tight font-semibold lg:leading-[40px] text-[#3B241E]">
          TESTIMONIALS
        </h1>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-8  lg:gap-16 lg:flex">
        {/* Left Column - Testimonial Text */}
        <div className="flex flex-col relative justify-center w-full lg:w-2/5">
          {/* Background graphic */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center z-0"
            style={{
              backgroundImage: `url('/icons/home/testimonial-bg.svg')`,
              mixBlendMode: "luminosity",
            }}
          ></div>
          <div className="relative min-h-[150px] lg:min-h-auto lg:ml-[20px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="border-l-[2px] border-[#3B241E] pl-6 lg:py-[12px] lg:pl-[16px]">
                  <blockquote className="text-lg lg:text-[16px] text-gray-900 leading-relaxed mb-6 lg:mb-[20px]">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm  lg:text-[16px] font-semibold not-italic">
                    — {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="order-first lg:order-last w-full lg:w-3/5 flex items-center">
          <div className="aspect-[4/3] lg:h-[400px] lg:w-full overflow-hidden bg-gray-200">
            <img
              src="https://res.cloudinary.com/dzwv3fba5/image/upload/v1750855120/testimonial-img_f8rqyj.png"
              alt="Modern living room with stairs and dining area"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
