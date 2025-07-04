import React from "react";
import type { Project } from "../data/projects";

interface ProjectCaseProps {
  project: Project;
}

const ProjectCase: React.FC<ProjectCaseProps> = ({ project }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full pb-[40px] pt-[173px] px-4 lg:px-[80px] lg:pt-[173px] lg:pb-[60px]">
        <div className="text-center mb-12 lg:mb-0">
          <h2 className="text-3xl lg:text-[64px] font-semibold lg:leading-[40px] text-[#3B241E] uppercase">
            {project.title}
          </h2>
          <p className="text-sm lg:text-[14px] text-[#000] mt-4 lg:mt-[24px]">
            {project.desc}
          </p>
        </div>
      </section>
      {/* Grid Section */}
      <div className="px-[16px] py-[40px] lg:px-[80px] lg:pb-[60px] lg:pt-0">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[20px]">
          {project.images[0] && (
            <div className="lg:w-[65%] h-[520px] overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
            </div>
          )}
          {/* Show video if available, otherwise show second image if exists */}
          {project.video ? (
            <div className="w-full lg:w-[35%] h-[520px]">
              <video
                autoPlay
                muted
                loop
                src={project.video}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
            </div>
          ) : (
            project.images[1] && (
              <div className="w-full lg:w-[35%] h-[520px] overflow-hidden">
                <img
                  src={project.images[1]}
                  alt={project.title + " secondary"}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />
              </div>
            )
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[20px]">
          {project.video
            ? project.images.slice(1).map((img, idx) => (
                <div key={img + idx} className="w-full h-[300px] lg:h-[413px]">
                  <img src={img} alt="" className="h-full object-cover w-full" />
                </div>
              ))
            : project.images.slice(2).map((img, idx) => (
                <div key={img + idx} className="w-full h-[300px] lg:h-[413px]">
                  <img src={img} alt="" className="h-full object-cover w-full" />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCase;
