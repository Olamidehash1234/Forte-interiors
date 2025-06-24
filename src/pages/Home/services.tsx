// components/OurServices.jsx

export default function OurServices() {
  return (
    <section className="relative bg-[#3B241E] text-white px-6 lg:px-20 py-[40px]">
      {/* Background graphic */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: `url('/icons/home/service-bg.svg')`,
          mixBlendMode: "hard-light",
        }}
      ></div>

      <div className="relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 items-end">
          {/* Left: Heading */}
          <div>
            <p className="text-sm tracking-wider lg:text-[12px] font-medium text-[#F8F8F8] mb-2">
              • WHAT WE DO
            </p>
            <h2 className="text-3xl lg:text-[40px] leading-snug lg:leading-[40px] font-semibold">
              OUR <br className="hidden lg:block" />
              SERVICES
            </h2>
          </div>

          {/* Right: Description */}
          <p className="text-sm md:text-base lg:text-[14px] lg:text-right text-[#F8F8F8] leading-relaxed lg:leading-normal">
            We offer professional interior design and decorating services for
            both residential and commercial spaces—creating environments that
            reflect your style, enhance functionality, and support your
            lifestyle or business goals.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            {
              src: "/home/service-img.png",
              title: "Residential Interiors",
              desc: "Tailored designs that reflect your lifestyle and personality.",
            },
            {
              src: "/home/service-img1.png",
              title: "Commercial Spaces",
              desc: "Functional yet stylish designs for productive environments.",
            },
            {
              src: "/home/service-img2.png",
              title: "Space Planning",
              desc: "strategic layouts that combine aesthetics with usability.",
            },
            {
              src: "/home/service-img3.png",
              title: "Consultation & Styling",
              desc: "Expert guidance to bring your vision to life",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer w-full overflow-hidden group"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover aspect-[4/3] lg:h-[305px] transition-transform duration-300 ease-in-out"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

              {/* Text Block */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                <h3 className="text-[20px] font-medium mb-[8px]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-white/90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <a href="/services">
          <button className="mt-6 border border-white px-[36px] py-[12px] lg: hover:bg-white hover:text-[#3B221D] text-[14px] transition duration-300">
            View All Services
          </button>
        </a>
      </div>
    </section>
  );
}
