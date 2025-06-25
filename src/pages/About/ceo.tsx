const MeetTheCEO = () => {
  return (
    <div className=" bg-[#EAD6BD26] py-[40px] px-4 lg:px-[80px] lg:py-[60px]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dzwv3fba5/image/upload/v1750856088/ceo-img_dz4x8r.png"
                alt="Funke Olude, CEO of Fort Interiors"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div>
              <h2 className="text-3xl lg:text-[24px] font-semibold text-[#3B241E] mb-8">
                MEET THE CEO
              </h2>
            </div>

            <div className="space-y-[20px] text-[#000] leading-normal">
              <p className="text-[14px]">
                <span className="">Welcome to Fort Interiors — where creativity meets craftsmanship.</span>
              </p>

              <p className="text-sm lg:text-[14px] lg:leading-normal">
                I’m <span className="font-semibold">LIANAH OLUWATOSIN IBIDAPO</span> the <span className="font-semibold">CEO of Fort Interiors.</span>
              </p>

              <p className="text-sm lg:text-[14px] lg:leading-normal">
                With over 6 years of experience in interior and exterior design, I started this company with one clear goal: to translate our client’s ideas and our own professional holistic vision into a space combining aesthetics, comfort and practicality that reflect style, function, and individuality
              </p>

              <p className="text-sm lg:text-[14px] lg:leading-normal">
                At Fort Interiors, we believe your space should inspire you. Whether it’s a home, office, or commercial project, we approach every design with attention to detail, a deep understanding of your vision, and a commitment to excellence.
              </p>

              <p className="text-sm lg:text-[14px] lg:leading-normal">
                We don’t just design interiors — we create experiences that enhance the way you live and work. Thank you for choosing Fort Interiors. I look forward to helping you bring your dream space to life.
              </p>

              <div className="pt-4 lg:pt-[10px]">
                <p className="text-sm lg:leading-normal">Warm regards,</p>
                <p className="font-semibold text-base lg:leading-normal lg:text-[14px]">LIANAH OLUWATOSIN IBIDAPO</p>
                <p className="text-sm lg:text-[14px] lg:leading-normal">CEO, <span className="font-semibold">Fort Interiors</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheCEO;