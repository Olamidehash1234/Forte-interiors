import { useState } from "react";

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "Our project timelines vary based on scope and complexity. Typically, a residential project take 6 weeks and above, while commercial spaces may require 12 weeks or more. We prioritize quality and communication throughout the process.",
    },
    {
      question: "Do you provide consultations?",
      answer:
        "Yes! We offer complimentary consultations to discuss your vision and needs. During this meeting, we will explore your ideas and provide insights on how to bring your dream space to life.",
    },
    {
      question: "Can I customize my design?",
      answer:
        "Absolutely! We believe every space should reflect the personality of its owner. Our team collaborates closely with you to ensure that your preferences and style are integrated into the final design.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is based on the specifics of your project, including size, complexity, and materials. We offer transparent estimates and work within your budget to deliver exceptional results.",
    },
    {
      question: "Do you offer post-project support?",
      answer:
        "Yes, we provide ongoing support and follow-up services after project completion. Our goal is to ensure you are completely satisfied with your new space and address any concerns that may arise.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-[#3B241E] text-white">
      <div className="px-6 lg:px-[80px] py-[40px] lg:py-[60px]">
        {/* Top Section - Header and Intro */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 lg:mb-[60px]">
          {/* Left - Header */}
          <div className="grid lg:grid-cols-2 items-end">
          {/* Left: Heading */}
          <div>
            <p className="text-sm tracking-wider lg:text-[12px] font-medium text-[#F8F8F8] mb-2">
              • YOUR QUERIES ANSWERED
            </p>
            <h2 className="text-3xl lg:text-[40px] leading-snug lg:leading-[40px] font-semibold">
              FREQUENTLY <br className="hidden lg:block" />
              ASKED QUESTIONS
            </h2>
          </div>

          {/* Right: Description */}
          <p className="text-sm md:text-base lg:text-[14px] lg:text-right text-[#F8F8F8] leading-relaxed lg:leading-normal">
            Curious about how our interior design process works, what to expect during a project, or how we approach residential and commercial spaces? We’ve answered the most common questions to help you feel confident every step of the way.
          </p>
        </div>

          {/* Right - Intro Text */}
        </div>

        {/* Bottom Section - FAQ and Images */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[70px]">
          {/* Left Column - FAQ Accordion */}
          <div className="flex flex-col justify-end lg:w-[70%]">
            <div className="border-t-[0.5px] border-[#FFFFFF]">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#FFFFFF]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex justify-between items-center py-4 lg:py-[20px] text-left focus:outline-none group
                      ${openAccordion === index ? "border-b mb-[20px] border-[#FFFFFF]" : ""}`}
                  >
                    <span className="text-[14px] font-medium">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div
                          className={`transform transition-transform duration-300 ${
                            openAccordion === index ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === index
                        ? "max-h-96 pb-[20px]"
                        : "max-h-0"
                    }`}
                  >
                    <p className="font-normal text-[#fff] text-[14px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex flex-col lg:w-[30%] space-y-6 lg:space-y-8 flex-1">
            {/* <div
            className="absolute inset-0 bg-no-repeat bg-center z-0"
            style={{
              backgroundImage: `url('/icons/home/testimonial-bg.svg')`,
              mixBlendMode: "luminosity",
            }}
          ></div> */}

            {/* Bottom Image */}
            <div className="aspect-[4/3] lg:h-[440px] bg-gray-800">
              <img
                src="/home/faq-img1.png"
                alt="Modern conference room with wooden table"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
