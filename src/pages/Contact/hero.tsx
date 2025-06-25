import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:pb-[60px] self-end items-end">
      {/* Left side - Contact form */}
      <div className="w-full lg:w-1/2 px-[16px]  py-[40px] items-end lg:px-20 lg:py-[60px] bg-white">
        <div className="">
          {/* Heading */}
          <h2 className="text-[32px] text-[#3B241E] lg:text-[40px] lg:leading-[40px] font-semibold mb-2 lg:mb-[20px]">
            CONTACT US
          </h2>
          <p className="text-[14px] text-[#000000] mb-8 lg:mb-[40px]">
            We're excited to hear about your project. Fill out the form or reach
            us directly.
          </p>

          {/* Form */}
          <form className="space-y-[40px] lg:space-y-[40px]">
            {/* Name & Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[44px] lg">
              <input
                type="text"
                placeholder="Name"
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
              />
            </div>

            {/* Phone Number & Project Type */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[44px]">
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
              />
              <input
                type="text"
                placeholder="Project Type"
                className="border-b text-[14px] border-[#000] focus:outline-none py-2 text-[#000] placeholder-[#000]"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={8}
              className="w-full border-b text-[14px] border-[#000] focus:outline-none py-2 lg:py-text-[#000] placeholder-[#000]"
            ></textarea>

            {/* Submit Button */}
          </form>
          <button
            type="submit"
            className="bg-[#3B241E] w-full lg:w-[200px] text-white text-sm px-6 py-3 mt-[40px] lg:mt-[60px]"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative inset-0 w-full lg:block lg:w-1/2 h-[500px] lg:h-[880px]">
        <img
          src="https://res.cloudinary.com/dzwv3fba5/image/upload/v1750861232/contact-img_ovb4ix.png"
          alt="Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00000066] pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Contact;
