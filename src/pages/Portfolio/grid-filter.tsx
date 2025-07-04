import React, { useRef, useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Define gallery items with category and layout info
const galleryItems = [
  {
    videoIndex: 0,
    src: "https://res.cloudinary.com/dzwv3fba5/video/upload/v1750866868/case-vid_olwsq2.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856945/img1_plfkbi.png",
    category: "RESIDENTIAL",
    title: "Project Case",
    desc: "A modern yet cozy family home in Ikoyi featuring warm wood tones, open floor plans, and customized wardrobe fittings.",
    button: "VIEW RESIDENTIAL SPACE",
    id: "project-case",
    layout: { row: 1, col: 1 },
  },
  {
    videoIndex: 1,
    src: "https://res.cloudinary.com/dzwv3fba5/video/upload/v1750942080/PROJECT_LUXE_adzmmr.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856929/img2_elubi1.png",
    category: "RESIDENTIAL",
    title: "Project LUXE",
    button: "VIEW RESIDENTIAL SPACE",
    id: "project-luxe",
    layout: { row: 1, col: 2, sub: 1 },
  },
  {
    videoIndex: 2,
    src: "https://res.cloudinary.com/dzwv3fba5/video/upload/v1750942052/PROJECT_ADECO_plwyi6.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856943/img3_vy2m75.png",
    category: "OFFICE DESIGN & SETUP",
    title: "Project ADECO",
    desc: "We transformed an open-plan layout into a sleek workspace with acoustic paneling, ergonomic furniture, and custom glass partitions.",
    button: "VIEW OFFICE SPACE",
    id: "project-adeco",
    layout: { row: 1, col: 2, sub: 2 },
  },
  {
    videoIndex: 3,
    src: "https://res.cloudinary.com/dzwv3fba5/video/upload/v1750944211/about-vid_erdtl0.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856930/img4_liix8e.png",
    category: "RESIDENTIAL",
    title: "Project MICHDAN",
    desc: "We transformed an open-plan layout into a sleek workspace with acoustic paneling, ergonomic furniture, and custom glass partitions.",
    button: "VIEW RESIDENTIAL SPACE",
    id: "project-michdan",
    layout: { row: 1, col: 3, sub: 1 },
  },
  {
    videoIndex: 4,
    // src: "/videos/about-vid.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856947/img5_roejjm.png",
    category: "RESIDENTIAL",
    title: "Project TROPICAL LUSH",
    id: "project-tropical-lush",
    button: "VIEW RESIDENTIAL SPACE",
    layout: { row: 1, col: 3, sub: 2 },
  },
  {
    videoIndex: 5,
    src: "https://res.cloudinary.com/dzwv3fba5/video/upload/v1750942106/PROJECT_PINNOCK_bzimyy.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856944/img6_tum8s9.png",
    category: "RESIDENTIAL",
    title: "Project PINNOCK",
    desc: "We transformed an open-plan layout into a sleek workspace with acoustic paneling, ergonomic furniture, and custom glass partitions.",
    button: "VIEW RESIDENTIAL SPACE",
    id: "project-pinnock",
    layout: { row: 2, col: 1, sub: 1 },
  },
  {
    videoIndex: 6,
    // src: "/videos/about-vid.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856934/img7_jdd8bl.png",
    category: "RESIDENTIAL",
    title: "Project MO",
    id: "project-mo",
    button: "VIEW RESIDENTIAL SPACE",
    layout: { row: 2, col: 1, sub: 2 },
  },
  {
    videoIndex: 7,
    // src: "/videos/about-vid.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856945/img8_l02bxp.png",
    category: "RETAIL",
    title: "Project LK",
    id: "project-lk",
    button: "VIEW RESIDENTIAL SPACE",
    layout: { row: 2, col: 2, sub: 1 },
  },
  {
    videoIndex: 8,
    // src: "/videos/about-vid.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856937/img9_xmxopl.png",
    category: "RETAIL",
    title: "Project HYDE PARK",
    id: "project-hyde-park",
    button: "VIEW COMMERCIAL SPACE",
    layout: { row: 2, col: 2, sub: 2 },
  },
  {
    videoIndex: 9,
    // src: "/videos/about-vid.mp4",
    poster: "https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856927/img10_cggzfa.png",
    category: "RESIDENTIAL",
    title: "Project DE",
    desc: "A modern yet cozy family home in Ikoyi featuring warm wood tones, open floor plans, and customized wardrobe fittings.",
    button: "VIEW RESIDENTIAL SPACE",
    id: "project-de",
    layout: { row: 2, col: 3 },
  },
];

type GalleryItem = {
  videoIndex: number;
  src?: string;
  poster: string;
  category: string;
  title: string;
  desc?: string;
  button: string;
  id?: string;
  layout: {
    row: number;
    col: number;
    sub?: number;
  };
};

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

  const [isMuted, setIsMuted] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

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
    // Attach hover play/pause to all videos that have a src (i.e., are rendered)
    const cleanups: (() => void)[] = [];
    galleryItems.forEach((item, idx) => {
      if (!item.src) return;
      const video = videoRefs[idx].current;
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

      cleanups.push(() => {
        parent?.removeEventListener("mouseenter", play);
        parent?.removeEventListener("mouseleave", pause);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [isMuted, activeTab]);

  // Filter items by tab
  const filteredItems =
    activeTab === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  // Helper to render overlay
  const renderOverlay = (item: GalleryItem) => (
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
      <h2
        className={`text-white text-center ${
          item.desc ? "text-[20px]" : "text-[24px]"
        } mb-4 lg:mb-[16px] font-normal`}
      >
        {item.title}
      </h2>
      {item.desc && (
        <p
          className={`text-white text-center ${
            item.desc.length > 60 ? "max-w-xs" : "max-w-[350px]"
          } mb-6 text-[14px] font-light lg:leading-normal`}
        >
          {item.desc}
        </p>
      )}
      {item.id ? (
        <Link to={`/project-case/${item.id}`}>
          <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
            {item.button}
          </button>
        </Link>
      ) : (
        <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
          {item.button}
        </button>
      )}
    </div>
  );

  // Render the grid in the same layout as before for ALL, but 4-column grid for tabs
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
      {activeTab === "ALL" ? (
        <div className="flex flex-col">
          {/* First row */}
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[30px]">
            {/* first image */}
            {filteredItems
              .filter((item) => item.layout.row === 1 && item.layout.col === 1)
              .map((item, i) => (
                <div
                  key={i}
                  className="w-full lg:w-[39%] lg:h-[655px] relative group"
                >
                  <video
                    ref={videoRefs[item.videoIndex]}
                    src={item.src}
                    poster={item.poster}
                    className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                    playsInline
                    loop
                    muted={isMuted[item.videoIndex]}
                    controls={false}
                    preload="metadata"
                  />
                  <button
                    onClick={() => toggleMute(item.videoIndex)}
                    className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  >
                    {isMuted[item.videoIndex] ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  {renderOverlay(item)}
                </div>
              ))}
            {/* second column */}
            <div className="flex flex-col gap-[30px] lg:w-[30%]">
              {filteredItems
                .filter((item) => item.layout.row === 1 && item.layout.col === 2)
                .map((item, i) => (
                  <div
                    key={i}
                    className={`h-[300px] ${
                      item.layout.sub === 2 ? "lg:h-[398px]" : "lg:h-[242px]"
                    } relative group`}
                  >
                    <video
                      ref={videoRefs[item.videoIndex]}
                      src={item.src}
                      poster={item.poster}
                      className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                      playsInline
                      loop
                      muted={isMuted[item.videoIndex]}
                      controls={false}
                      preload="metadata"
                    />
                    <button
                      onClick={() => toggleMute(item.videoIndex)}
                      className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                      {isMuted[item.videoIndex] ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                    {renderOverlay(item)}
                  </div>
                ))}
            </div>
            {/* third column */}
            <div className="flex flex-col lg:w-[31%] gap-[30px]">
              {filteredItems
                .filter((item) => item.layout.row === 1 && item.layout.col === 3)
                .map((item, i) => (
                  <div
                    key={i}
                    className={`h-[300px] ${
                      item.layout.sub === 1 ? "lg:h-[398px]" : "lg:h-[242px]"
                    } relative group`}
                  >
                    <video
                      ref={videoRefs[item.videoIndex]}
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                      playsInline
                      loop
                      muted={isMuted[item.videoIndex]}
                      controls={false}
                      preload="metadata"
                    />
                    {renderOverlay(item)}
                  </div>
                ))}
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
            <div className="flex flex-col lg:w-[31%] gap-[30px]">
              {filteredItems
                .filter((item) => item.layout.row === 2 && item.layout.col === 1)
                .map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      item.layout.sub === 1
                        ? "mt-[30px] lg:mt-[15px] h-[300px] lg:h-[398px]"
                        : "h-[300px] lg:h-[242px]"
                    } relative group`}
                  >
                    <video
                      ref={videoRefs[item.videoIndex]}
                      src={item.src}
                      poster={item.poster}
                      className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                      playsInline
                      loop
                      muted={isMuted[item.videoIndex]}
                      controls={false}
                      preload="metadata"
                    />
                    {/* Hide mute/unmute button for Project MO (videoIndex 6) */}
                    {item.videoIndex !== 6 && (
                      <button
                        onClick={() => toggleMute(item.videoIndex)}
                        className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                      >
                        {isMuted[item.videoIndex] ? <FaVolumeMute /> : <FaVolumeUp />}
                      </button>
                    )}
                    {renderOverlay(item)}
                  </div>
                ))}
            </div>
            <div className="flex flex-col lg:w-[30%] gap-[30px]">
              {filteredItems
                .filter((item) => item.layout.row === 2 && item.layout.col === 2)
                .map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      item.layout.sub === 1
                        ? "lg:mt-[30px] h-[300px] lg:h-[242px]"
                        : "h-[300px] lg:h-[398px] overflow-hidden"
                    } relative group`}
                  >
                    <video
                      ref={videoRefs[item.videoIndex]}
                      src={item.src}
                      poster={item.poster}
                      className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                      playsInline
                      loop
                      muted={isMuted[item.videoIndex]}
                      controls={false}
                      preload="metadata"
                    />
                    {renderOverlay(item)}
                  </div>
                ))}
            </div>
            <div className="mt-[30px] h-[300px] w-full lg:w-[39%] lg:h-[655px] relative group">
              {filteredItems
                .filter((item) => item.layout.row === 2 && item.layout.col === 3)
                .map((item, i) => (
                  <React.Fragment key={i}>
                    <video
                      ref={videoRefs[item.videoIndex]}
                      src={item.src}
                      poster={item.poster}
                      className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                      playsInline
                      loop
                      muted={isMuted[item.videoIndex]}
                      controls={false}
                      preload="metadata"
                    />
                    {renderOverlay(item)}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {filteredItems.map((item, i) => (
            <div key={i} className="relative group h-[300px] lg:h-[350px]">
              <video
                ref={videoRefs[item.videoIndex]}
                src={item.src}
                poster={item.poster}
                className="h-full w-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                // Always set muted to true for autoplay on hover
                muted={true}
                controls={false}
                preload="metadata"
              />
              {/* Hide mute/unmute button for Project MO (videoIndex 6), Project LK (7), Project HYDE PARK (8), Project DE (9), Project LUSH (4) */}
              {![4, 6, 7, 8, 9].includes(item.videoIndex) && (
                <button
                  onClick={() => toggleMute(item.videoIndex)}
                  className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  {isMuted[item.videoIndex] ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
              )}
              {renderOverlay(item)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
