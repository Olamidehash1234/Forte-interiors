const CoreValuesSection = () => {
  const values = [
    {
      number: "01",
      title: "Creativity",
      description: "Thoughtful and original approaches in every project.",
    },
    {
      number: "02",
      title: "Timely Delivery",
      description: "Always on schedule, always prepared.",
    },
    {
      number: "03",
      title: "Customer-Centric Service",
      description: "You are at the heart of our process.",
    },
  ];

  return (
    <div className="bg-[#3B241E] py-[40px] px-[16px] lg:px-[80px] lg:py-[60px]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Column - Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl lg:text-[24px] font-light text-white leading-tight lg:leading-[40px]">
              OUR CORE
              <br className="hidden lg:block" />
              VALUES
            </h2>
          </div>

          {/* Right Columns - Values */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <div key={index} className="space-y-[11px]">
                  {/* Number */}
                  <div
                    className="text-6xl font-[Manrope] lg:text-[48px] font-light text-amber-800 opacity-60 leading-normal"
                    style={{
                      WebkitTextStroke: "0.5px #FFFFFF73",
                      color: "transparent",
                    }}
                  >
                    {value.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-[14px] font-[manrope] font-medium text-white">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base font-normal lg:text-[14px] text-white leading-relaxed lg:leading-normal">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
