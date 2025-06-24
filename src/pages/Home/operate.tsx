const DesignPhilosophy = () => {
  return (
    <div className="bg-g[#FFFFFF]">
      <section className="px-6 lg:px-[80px] py-[40px] lg:pt-[60px] lg:pb-[70px]">
        {/* Header */}
        <div className="mb-16 lg:mb-[40px]">
          <p className="text-[12px] lg:text-[12px] font-medium tracking-wider uppercase mb-4 lg:mb-[10px]">
            • OUR DESIGN PHILOSOPHY
          </p>
          <h1 className="text-4xl lg:text-[40px] leading-none tracking-tight font-semibold lg:leading-[40px] text-[#3B241E]">
            HOW WE <br className="hidden lg:block" />
            OPERATE
          </h1>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
          {/* Column 1: Discover */}
          <div className="space-y-[11px] lg:space-y-[11px]">
            <div
              className="text-[48px] lg:text-[48px] font-[manrope] lg:leading-normal font-semibold leading-none inline-block"
              style={{
                WebkitTextStroke: "1px #3B241E",
                color: "transparent",
              
              }}
            >
              <p className="inline-block">01</p>
            </div>
            <h2 className="text-[14px] lg:text-[16px] lg:leading-normal font-medium font-[manrope]">
              Discover
            </h2>
            <p className="text-base lg:text-[14px] lg:leading-normal  leading-relaxed">
              Our designs are always impressive owing to our attention to
              detail, emphatic understanding of our client's taste and ambitions
              as well as giving due consideration to time and budget.
            </p>
          </div>

          {/* Column 2: Design */}
          <div className="space-y-[11px] lg:space-y-[11px]">
            <div
              className="text-[48px] lg:text-[48px] font-[inter] lg:leading-normal font-semibold leading-none"
              style={{
                WebkitTextStroke: "1px #3B241E",
                color: "transparent",
                display: "inline-block",
              }}
            >
              <p className="text-[48px] lg:text-[48px] font-[inter] lg:leading-normal font-medium leading-none inline-block">02</p>
            </div>
            <h2 className="text-[14px] lg:text-[16px] lg:leading-normal font-medium font-[manrope]">
              Design
            </h2>
            <p className="text-base lg:text-[14px] lg:leading-normal  leading-relaxed">
              We work closely with our client’s because we realized that
              different clients have different values and lifestyle, and all
              these have to be factored into the design.
            </p>
          </div>

          {/* Column 3: Deliver */}
          <div className="space-y-[11px] lg:space-y-[11px]">
            <div
              className="text-[48px] lg:text-[48px] font-[inter] lg:leading-normal font-medium leading-none"
              style={{
                WebkitTextStroke: "1px #3B241E",
                color: "transparent",
                display: "inline-block",
              }}
            >
              <p className="text-[48px] lg:text-[48px] font-[inter] lg:leading-normal font-medium leading-none inline-block">03</p>
            </div>
            <h2 className="text-[14px] lg:text-[16px] lg:leading-normal font-medium font-[manrope]">
              Deliver
            </h2>
            <p className="text-base lg:text-[14px] lg:leading-normal  leading-relaxed">
              These insights guide us in our quest to create an environment that
              is both functional and aesthetically pleasing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignPhilosophy;
