import React, { useRef, useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "RESIDENTIAL", "OFFICE DESIGN & SETUP", "RETAIL"];

  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const [isMuted, setIsMuted] = useState([true, true, true]);

  const toggleMute = (index: number) => {
    const newMutedState = [...isMuted];
    newMutedState[index] = !newMutedState[index];
    setIsMuted(newMutedState);

    const video = videoRefs[index].current;
    if (video) {
      video.muted = newMutedState[index];
    }
  };

  useEffect(() => {
    videoRefs.forEach((ref) => {
      const video = ref.current;
      if (!video) return;

      const play = () => {
        video
          .play()
          .catch((err) => console.warn("Autoplay failed:", err.message));
      };

      const pause = () => {
        video.pause();
        video.currentTime = 0;

        const originalSrc = video.src;
        video.src = "";
        video.load();
        video.src = originalSrc;
      };

      const parent = video.parentElement;
      parent?.addEventListener("mouseenter", play);
      parent?.addEventListener("mouseleave", pause);

      return () => {
        parent?.removeEventListener("mouseenter", play);
        parent?.removeEventListener("mouseleave", pause);
      };
    });
  }, [isMuted]);

  return (
    <section className="py-[40px] px-[16px] lg:px-[80px] lg:py-[60px]">
      {/* Header Tabs */}
      <div className="flex items-center gap-0 mb-[40px] lg:mb-[60px] text-[12px] font-medium uppercase">
        {tabs.map((tab, idx) => (
          <React.Fragment key={tab}>
            <button
              className={`px-0 lg:px-0 leading-normal focus:outline-none relative
                ${activeTab === tab ? "text-[#3B241E]" : "text-black"}
                ${activeTab === tab ? "font-semibold" : "font-normal"}
              `}
              onClick={() => setActiveTab(tab)}
            >
              <span
                className={`tracking-wide ${
                  activeTab === tab ? "border-b-2 border-[#3B241E] pb-1" : ""
                }`}
              >
                {tab}
              </span>
            </button>
            {idx < tabs.length - 1 && (
              <span className="mx-[10px] text-[#3B241E] text-lg font-light">
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Columns Layout */}
      {/* first row of images */}
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[30px]">
          {/* first image */}
          <div className=" w-full lg:w-[39%] lg:h-[655px] relative group">
            <video
              ref={videoRefs[0]}
              src="/videos/case-vid.mp4"
              poster="/home/port-img1.png"
              className="h-full w-full object-cover transition-all duration-300 ease-in-out"
              playsInline
              loop
              muted={isMuted[0]}
              controls={false}
              preload="metadata"
            />
            <button
              onClick={() => toggleMute(0)}
              className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              {isMuted[0] ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
              <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                Project Case
              </h2>
              <p className="text-white text-center max-w-[350px] mb-6 text-[14px] font-light">
                A modern yet cozy family home in Ikoyi featuring warm wood
                tones, open floor plans, and customized wardrobe fittings.
              </p>
              <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                VIEW RESIDENTIAL SPACE
              </button>
            </div>
          </div>

          {/* second image */}
          <div className=" flex flex-col gap-[30px] lg:w-[30%]">
            <div className="h-[300px] lg:h-[242px] relative group">
              <video
                ref={videoRefs[1]}
                src="/videos/about-vid.mp4"
                poster="/portfolio/grid-images/img2.png"
                className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted={isMuted[2]}
                controls={false}
                preload="metadata"
              />
              <button
                onClick={() => toggleMute(1)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[1] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                  Project LUXE
                </h2>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW RESIDENTIAL SPACE
                </button>
              </div>
            </div>

            <div className="h-[300px] lg:h-[398px] relative group">
              <video
                ref={videoRefs[3]}
                src="/videos/about-vid.mp4"
                poster="/home/port-img4.png"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted
                controls={false}
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[20px] mb-4 lg:mb-[16px] font-normal">
                  Project ADECO
                </h2>
                <p className="text-white text-center max-w-xs mb-6 text-[12px] font-light lg:leading-normal">
                  We transformed an open-plan layout into a sleek workspace with
                  acoustic paneling, ergonomic furniture, and custom glass
                  partitions.
                </p>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW OFFICE SPACE
                </button>
              </div>
            </div>
          </div>

          {/* third column image */}
          <div className="flex flex-col lg:w-[31%] gap-[30px]">
            <div className="h-[300px] lg:h-[398px] relative group">
              <video
                ref={videoRefs[4]}
                src="/videos/about-vid.mp4"
                poster="/portfolio/grid-images/img4.png"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted
                controls={false}
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[20px] mb-4 lg:mb-[16px] font-normal">
                  Project MICHDAN
                </h2>
                <p className="text-white text-center max-w-xs mb-6 text-[12px] font-light lg:leading-normal">
                  We transformed an open-plan layout into a sleek workspace with
                  acoustic paneling, ergonomic furniture, and custom glass
                  partitions.
                </p>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW RESIDENTIAL SPACE
                </button>
              </div>
            </div>
            <div className="h-[300px] lg:h-[242px] relative group">
              <video
                ref={videoRefs[5]}
                src="/videos/about-vid.mp4"
                poster="/portfolio/grid-images/img5.png"
                className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted={isMuted[0]}
                controls={false}
                preload="metadata"
              />
              {/* <button
                onClick={() => toggleMute(3)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[5] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button> */}

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                  Project TROPICAL LUSH
                </h2>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW RESIDENTIAL SPACE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        

        {/* Second Row of Images */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
          <div className="flex flex-col lg:w-[31%] gap-[30px]">
            <div className="mt-[30px] lg:mt-[15px] h-[300px] lg:h-[398px] relative group">
              <video
                ref={videoRefs[6]}
                src="/videos/about-vid.mp4"
                poster="/portfolio/grid-images/img6.png"
                className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted={isMuted[6]}
                controls={false}
                preload="metadata"
              />
              <button
                onClick={() => toggleMute(6)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[6] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                  Project PINNOCK
                </h2>
                <p className="text-white text-center max-w-xs mb-6 text-[12px] font-light lg:leading-normal">
                  We transformed an open-plan layout into a sleek workspace with
                  acoustic paneling, ergonomic furniture, and custom glass
                  partitions.
                </p>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW RESIDENTIAL SPACE
                </button>
              </div>
            </div>
            <div className="h-[300px] lg:h-[242px] relative group">
              <video
                ref={videoRefs[5]}
                src="/videos/about-vid.mp4"
                poster="/portfolio/grid-images/img7.png"
                className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted={isMuted[0]}
                controls={false}
                preload="metadata"
              />
              {/* <button
                onClick={() => toggleMute(3)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[5] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button> */}

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                  Project MO
                </h2>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW RESIDENTIAL SPACE
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-[30%] gap-[30px]">
            <div className="lg:mt-[30px] h-[300px] lg:h-[242px] relative group">
              <video
                ref={videoRefs[5]}
                src="/videos/about-vid.mp4"
                poster="/portfolio/grid-images/img8.png"
                className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted={isMuted[0]}
                controls={false}
                preload="metadata"
              />
              {/* <button
                onClick={() => toggleMute(3)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[5] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button> */}

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                  Project LK
                </h2>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW RESIDENTIAL SPACE
                </button>
              </div>
            </div>

            <div className="h-[300px] lg:h-[398px] relative group overflow-hidden">
              <video
                ref={videoRefs[5]}
                src="/videos/about-vid.mp4"
                poster="/portfolio/grid-images/img9.png"
                className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted={isMuted[0]}
                controls={false}
                preload="metadata"
              />
              {/* <button
                onClick={() => toggleMute(3)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[5] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button> */}

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                  Project HYDE PARK
                </h2>
                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  VIEW COMMERCIAL SPACE
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[30px] h-[300px] w-full lg:w-[39%] lg:h-[655px] relative group">
            <video
              ref={videoRefs[5]}
              // src="/videos/about-vid.mp4"
              poster="/portfolio/grid-images/img10.png"
              className="h-full w-full object-cover transition-all duration-300 ease-in-out"
              playsInline
              loop
              muted={isMuted[0]}
              controls={false}
              preload="metadata"
            />
            {/* <button
                onClick={() => toggleMute(3)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[5] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button> */}

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
              <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[16px] font-normal">
                Project DE
              </h2>
              <p className="text-white text-center max-w-[350px] mb-6 text-[14px] font-light">
                A modern yet cozy family home in Ikoyi featuring warm wood
                tones, open floor plans, and customized wardrobe fittings.
              </p>
              <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                VIEW RESIDENTIAL SPACE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
