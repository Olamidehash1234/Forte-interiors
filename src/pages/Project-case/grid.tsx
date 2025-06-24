import { useState } from "react";

const images = [
  "/project-case/img2.png",
  "/project-case/img3.png",
  "/project-case/img4.png",
  "/project-case/img5.png",
  "/project-case/img6.png",
  "/project-case/img7.png",
  "/project-case/img8.png",
  "/project-case/img9.png",
  "/project-case/img10.png",
];

const imagesPerPage = 9;

const ImageGridSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
const totalPages = Math.ceil(images.length / imagesPerPage);
const startIndex = (currentPage - 1) * imagesPerPage;
const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

 const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  
  
  return (
    <div className="px-[16px] py-[40px] lg:px-[80px] lg:pb-[60px] lg:pt-0">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[20px]">
        <div className="lg:w-[65%] h-[520px] overflow-hidden">
          <img
            src="/project-case/img1.png"
            alt="Luxury living room with beige sectional sofa, round coffee table, elegant chandelier, and modern entertainment unit"
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
          />
        </div>

        <div className="w-full lg:w-[35%] h-[520px]">
          <video
            autoPlay
            muted
            loop
            src="/videos/case-vid.mp4"
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] mt-[20px]">
        {currentImages.map((img, idx) => (
          <div key={img + idx} className="w-full h-[300px] lg:h-[413px]">
            <img src={img} alt="" className="h-full object-cover w-full" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-start lg:mt-[60px] mt-[40px] space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="flex items-center space-x-2 py-2 text-sm font-medium text-[#000000] hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out"
        >
          <span className="text-[12px]">PREVIOUS</span>
        </button>

        <div className="flex items-center space-x-2">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`w-8 h-8 text-[12px] font-medium rounded transition-colors duration-200 ease-in-out ${
                  currentPage === pageNumber
                    ? "text-[#000000]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2 py-2 text-sm font-medium text-[#000000] hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out"
        >
          <span className="text-[12px]">NEXT</span>
        </button>
      </div>
    </div>
  );
};

export default ImageGridSection;
