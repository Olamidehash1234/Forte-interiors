import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#3B241E] text-white py-[40px] px-[16px] pb-[40px] lg:pb-[52px] lg:pt-[80px] lg:px-[80px]">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-[40px] lg:leading-[40px] font-semibold uppercase font-bold mb-4 lg:mb-[40px]">
            Contact Informations
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[160px]">
            <div>
              <p className="text-sm text-[#FFF] lg:text-[12px] leading-normal mb-2 lg:mb-[10px] font-medium uppercase">
                Call Us :
              </p>
              <ul className="list-disc font-normal text-[14px] leading-normal list-inside lg:ml-[4px] text-white text-sm">
                <li><a href="tel:+2348027779949" className="hover:underline hover:underline-offset-[4px]">+2348027779949</a></li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <p className="text-sm text-[#FFF] lg:text-[12px] leading-normal mb-2 lg:mb-[10px] uppercase">
                We Are Located At:
              </p>
              <ul className="list-disc text-[14px] leading-normal list-inside lg:ml-[4px] text-white text-sm">
                <li>
                  <a
                    href="https://www.google.com/maps?q=6b+Ogidi+Crescent,+Christ+Avenue,+Lekki+Phase+1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:underline-offset-[4px]"
                  >
                    6b Ogidi Crescent, Christ Avenue, Lekki Phase 1
                  </a>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-[#FFF] lg:text-[12px] leading-normal mb-2 lg:mb-[10px] uppercase">
                Reach Out to Us via Mail:
              </p>
              <ul className="list-disc text-[14px] leading-normal list-inside lg:ml-[4px] text-white text-sm">
                <li>
                  <a
                    href="mailto:info@forttinteriors.com"
                    className="hover:underline hover:underline-offset-[4px]"
                  >
                    info@forttinteriors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:block h-auto w-auto">
          <img src="/icons/contact/call.svg" alt="call button" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
