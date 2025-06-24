import React, { useEffect, useState } from "react";


const slides = [
  "/home/hero-img.png",
  "/home/hero-img2.png",
  "/home/hero-img3.png",
  "/home/hero-img4.png",

];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animate, setAnimate] = useState(true);

  // Auto slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Trigger fade-in on mount
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Trigger fade-in on slide change
    if (!isLoaded) return;
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, [current, isLoaded]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[100vh] lg:h-[100vh] overflow-hidden">
      {/* Background Slideshow */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[current]})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0  bg-black/60" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 transition-opacity duration-700 ${
          isLoaded && animate ? "opacity-100" : "opacity-0"
        }${animate ? " animate-twice animate-duration-[5ms] animate-delay-0 animate-ease-in-out" : ""}`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-medium leading-tight lg:leading-[50px] max-w-5xl">
          DESIGNING SPACES WHERE <br className="hidden md:block" />
          BEAUTY MEETS FUNCTIONALITY
        </h1>
        <p className="mt-6 lg:mt-[30px] text-sm font-medium lg:leading-normal md:text-base max-w-[884px] mx-auto">
          At Fort Interiors, we bring your vision to life through detail-driven design, client-focused service, and expert project delivery – blending creativity with functionality across corporate, residential, and retail spaces.
        </p>
        <button className="mt-6 lg:mt-[30px] border border-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white hover:border-none transition">
          Book a Consultation
        </button>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-0 right-0 bg-white flex items-center z-10">
        <button
          onClick={prevSlide}
          className=" px-[16px] py-[10px] lg:px-[20px] lg:py-[26px] flex items-center justify-center border border-white bg-white hover:bg-white/40 transition"
        >
          <img src="/icons/home/arrow-left.svg" className="text-white lg:h-auto lg:w-auto h-[20px] w-[20px]" />
        </button>
        <span className="h-[20px] lg:h-[45px] w-[1.5px] bg-[#3B241E] inline-block" />
        <button
          onClick={nextSlide}
          className="px-[16px] py-[10px] lg:px-[20px] lg:py-[26px]  flex items-center justify-center border border-white bg-white hover:bg-white/40 transition"
        >
          <img src="/icons/home/arrow-right.svg" className="text-white text-white lg:h-auto lg:w-auto h-[20px] w-[20px]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
