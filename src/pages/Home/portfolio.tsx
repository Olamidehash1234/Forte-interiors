import { useRef, useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Portfolio = () => {
  const videoRefs = [
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
    <div className="bg-[#EAD6BD26] px-[16px] py-[40px] lg:px-[80px] lg:py-[60px]">
      <div className="flex flex-col lg:flex-row items-end lg:gap-[35px] gap-[40px]">
        {/* Last Video - Mobile First */}
        <div className="order-1 lg:order-3 flex flex-col lg:w-[31%] w-full">
          <div className="mb-[40px]">
            <p className="text-[12px] lg:text-right font-medium tracking-wider uppercase mb-4">
              • OUR WORK SPEAKS FOR ITSELF
            </p>
            <h1 className="text-4xl lg:text-right lg:text-[40px] leading-none tracking-tight uppercase font-semibold lg:leading-[40px] text-[#3B241E]">
              our <br className="hidden lg:block" />
              portfolio
            </h1>
          </div>

          <div className="h-[300px] w-full lg:h-[398px] lg:mb-[64px] group relative overflow-hidden">
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

          <div className="flex text-center lg:justify-end">
            <a href="/portfolio">
              <button className="mt-6 flex lg:w-auto text-center lg:mt-0 border border-[#3B241E] px-[36px] py-[12px] text-[14px] hover:bg-[#3B241E] hover:text-white transition duration-300">
                View all portfolios
              </button>
            </a>
          </div>
        </div>

        {/* First Video */}
        <div className="order-3 lg:order-1 h-[300px] w-full lg:w-[40%] lg:h-[655px] group relative overflow-hidden">
          <video
            ref={videoRefs[0]}
            src="/videos/about-vid.mp4"
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
              A modern yet cozy family home in Ikoyi featuring warm wood tones,
              open floor plans, and customized wardrobe fittings.
            </p>
            <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
              VIEW RESIDENTIAL SPACE
            </button>
          </div>
        </div>

        {/* Second + Third Videos */}
        <div className="order-2 lg:order-2 flex flex-col gap-[25px] lg:w-[29%] w-full">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="h-[300px] w-full lg:h-[242px] group relative overflow-hidden"
            >
              <video
                ref={videoRefs[i]}
                src="/videos/about-vid.mp4"
                poster={`/home/port-img${i + 1}.png`}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                playsInline
                loop
                muted={isMuted[i]}
                controls={false}
                preload="metadata"
              />
              <button
                onClick={() => toggleMute(i)}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                {isMuted[i] ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-10">
                <h2 className="text-white text-center text-[24px] mb-4 lg:mb-[24px] font-normal">
                  Project LUXE
                </h2>

                <button className="border border-white text-white px-[14px] py-[10px] bg-transparent hover:bg-[#000] text-[12px] hover:text-[#FFF] hover:border-none inline-block transition-colors duration-200">
                  {i === 2
                    ? "VIEW RESIDENTIAL SPACE"
                    : "VIEW RESIDENTIAL SPACE"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
