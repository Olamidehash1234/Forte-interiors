import React from "react";

const ProjectCaseHero: React.FC = () => {
  return (
    <section className="w-full pb-[40px] pt-[173px] px-4 lg:px-[80px] lg:pt-[173px] lg:pb-[60px]">
      {/* Heading */}
      <div className="text-center mb-12 lg:mb-0">
        <h2 className="text-3xl lg:text-[64px] font-semibold lg:leading-[40px] text-[#3B241E] uppercase">
          project case
        </h2>
        <p className="text-sm lg:text-[14px] text-[#000] mt-4 lg:mt-[24px]">
          Stay inspired with practical tips, creative ideas, and the latest trends in interior design.
        </p>
      </div>
    </section>
  );
};

export default ProjectCaseHero;
