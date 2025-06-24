import React from "react";

const InsightsHero: React.FC = () => {
  return (
    <section className="w-full bg-white pb-[40px] pt-[173px] px-4 lg:px-[80px] lg:pt-[173px] lg:pb-[60px]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-[64px] font-semibold lg:leading-[40px] text-[#3B241E] uppercase">
          Insights from Our Studio
        </h2>
        <p className="text-sm lg:text-[14px] text-[#000] mt-4 lg:mt-[24px]">
          Stay inspired with practical tips, creative ideas, and the latest trends in interior design.
        </p>
      </div>

      {/* Featured Blog Section */}
      <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="/blog/hero-img.png" // Replace with your actual image
          alt="Studio blog banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-[#00000073] flex items-end p-6 md:p-10 text-white">
          <div className="">
            <p className="text-sm mb-2 text-[16px] lg:mb-[16px]">May 2025</p>
            <h3 className="text-xl lg:text-[32px] lg:mb-[24px] max-w-[575px] leading-normal font-light leading-snug mb-3">
              Designing with Purpose: How to Build Spaces That Work for You
            </h3>
            <p className="text-sm lg:text-[16px] mb-4 lg:mb-[40px]">
              Functionality is the heart of great design. In this post, we explore how to blend beauty and practicality — from space planning to furniture placement.
            </p>
            <button className="border w-[200px] border-white text-white px-[14px] py-[10px] text-sm hover:bg-white hover:text-black transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
