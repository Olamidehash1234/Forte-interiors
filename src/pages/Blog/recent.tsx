import { useState } from 'react';

const RecentArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const articles = [
    {
      id: 1,
      title: "The Power of Wall Finishes in Modern Interiors",
      date: "May 2025",
      image: "/blog/art1.png"
    },
    {
      id: 2,
      title: "How to Choose the Right Furniture for Small Spaces",
      date: "June 2025",
      image: "/blog/art2.png"
    },
    {
      id: 3,
      title: "5 Tips for a Budget-Friendly Office Redesign",
      date: "July 2025",
      image: "/blog/art3.png"
    },
    {
      id: 4,
      title: "The Power of Wall Finishes in Modern Interiors",
      date: "May 2025",
      image: "/blog/art4.png"
    },
    {
      id: 5,
      title: "How to Choose the Right Furniture for Small Spaces",
      date: "June 2025",
      image: "/blog/art5.png"
    },
    {
      id: 6,
      title: "5 Tips for a Budget-Friendly Office Redesign",
      date: "July 2025",
      image: "/blog/art6.png"
    },
    {
      id: 7,
      title: "Creating Functional Workspace Design",
      date: "August 2025",
      image: "/blog/art6.png"
    }
  ];

  const articlesPerPage = 6;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="px-[16px] lg:px-[80px]">
      <div className="">
        {/* Header */}
        <div className="mb-[40px] lg:mb-[60px]">
          <h2 className="text-[24px] lg:text-[24px] lg:leading-[40px] font-semibold text-[#3B241E]">
            RECENT ARTICLES
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-y-[40px] lg:gap-[20px] mb-[40px] lg:mb-[60px]">
          {currentArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                {/* Image */}
                <div className="w-full h-[300px] lg:h-[500px] relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                  />
                  {/* Dark overlay - always present */}
                  <div className="absolute inset-0 bg-[#00000073]"></div>
                </div>

                {/* Default Content Overlay - visible by default */}
                <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-[16px] lg:text-[16px] leading-normal opacity-90">
                      {article.date}
                    </p>
                    <h3 className="text-xl lg:text-[24px] font-medium lg:leading-normal leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Content - full article details */}
                <div className="absolute left-0 right-0 bottom-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex flex-col justify-between p-6 h-[250px] lg:h-[350px]">
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-sm lg:text-[16px] font-medium mb-4 lg:mb-[24px] text-[#000]">
                      {article.date}
                    </p>
                    <h3 className="text-xl lg:text-[22px] font-medium text-[#000] mb-4 lg:mb-[24px] leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-[#000] text-sm lg:text-base mb-6 leading-[24px]">
                      Wall textures and finishes can dramatically change the feel of a room. We dive into trending styles and when to use paint, wallpaper, or wood paneling.
                    </p>
                  </div>
                  <div>
                    <a
                      href={`/articles/${article.id}`}
                      className="inline-block border border-[#3B241E] px-[14px] py-[10px] text-sm font-medium text-gray-700 text-center hover:bg-[#3B241E] hover:text-[#fff] transition-colors duration-200 w-[200px] ease-in-out"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-start lg:mb-[60px] mb-[40px] space-x-4">
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
                      ? 'text-[#000000]'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
    </div>
  );
};

export default RecentArticles;