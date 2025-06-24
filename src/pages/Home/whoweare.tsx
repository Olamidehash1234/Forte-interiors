import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      className="w-full py-[40px] px-4 md:px-10 lg:px-[78px] lg:py-[60px] bg-white relative"
    >
      {/* Centered Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center z-0"
        style={{ backgroundImage: `url('/icons/home/who-bg.svg')` }}
      ></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-start relative z-10">
        {/* Left Side */}
        <div>
          <p className="text-xs lg:mb-[10px] lg:text-[12px] tracking-widest text-gray-800">• WHO WE ARE</p>
          <h2 className="text-3xl lg:mb-[20px] lg:text-[40px] font-semibold leading-snug lg:leading-[40px]">
            ABOUT <br />
            FORT INTERIORS
          </h2>

          <p className="text-sm lg:text-[14px] lg:max-w-[650px] lg:leading-normal lg:mb-[20px]">
            Fort Interiors is a renowned interior design consultancy, project management as well as products procurement and supply company that offers interior design services for corporate, residential and retail clients. We are a team of competent, creative and committed professionals who offer bespoke design services.
          </p>
          <p className="text-sm lg:text-[14px] lg:max-w-[650px] lg:mb-[35px]">
            Our clients’ requirements are handled on an individual basis, irrespective of its size while also delivering interior solutions that are cost effective.
          </p>

          {/* Small Images */}
          <div className="grid grid-cols-3 gap-4 lg:gap-[30px] pt-2">
            <img src="/home/who-img2.png" alt="Project 1" className="w-full h-auto lg:h-[200px] object-cover" />
            <img src="/home/who-img3.png" alt="Project 2" className="w-full h-auto lg:h-[200px] object-cover" />
            <img src="/home/who-img4.png" alt="Project 3" className="w-full h-auto lg:h-[200px] object-cover" />
          </div>

          {/* CTA Button */}
          <button className="mt-6 lg:mt-[40px] border border-black px-6 py-2 text-sm hover:bg-[#3B241E] hover:text-white transition-all">
            Learn more About Us
          </button>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src="/home/who-img.png"
            alt="About Fort Interiors"
            className="w-full h-[250px] lg:h-[590px] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
