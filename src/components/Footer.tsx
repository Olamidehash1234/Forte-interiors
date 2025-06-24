import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t-[1px] border-[#000000] text-[#3B241E] w-full text-base font-normal">
      <div className="px-4 lg:px-[80px] py-8 lg:py-[60px]">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-4
            lg:gap-12
            items-start
          "
        >
          {/* Logo and Brand */}
          <div className="flex flex-col items-center lg:items-start min-w-[200px] mb-8 lg:mb-0">
            <img
              src="/icons/footer/logo.svg"
              alt="Fort Interiors Logo"
              className="w-32 h-32 lg:h-auto lg:w-auto object-contain mb-2"
            />
          </div>

          {/* Center Links */}
          <div className="col-span-2 grid grid-cols-2 gap-8 gap-y-[50px] lg:flex lg:flex-row lg:gap-[100px] justify-center lg:col-span-2">
            {/* Quicklinks */}
            <div>
              <div className="font-[cormorant] text-[16px] font-semibold mb-2 lg:mb-[16px]">
                Quicklinks
              </div>
              <ul className="space-y-1 lg:space-y-[16px]">
                <li>
                  <Link
                    to="/about"
                    className="hover:underline text-[14px] lg:leading-[24px] text-[#000] underline-offset-[8px] hover:underline-[#EAD6BD] transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:underline text-[14px] lg:leading-[24px] text-[#000] underline-offset-[8px] hover:underline-[#EAD6BD] transition-colors duration-300"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:underline text-[14px] lg:leading-[24px] text-[#000] underline-offset-[8px] hover:underline-[#EAD6BD] transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:underline text-[14px] lg:leading-[24px] text-[#000] underline-offset-[8px] hover:underline-[#EAD6BD] transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <div className="font-[cormorant] text-[16px] font-semibold mb-2 lg:mb-[16px]">
                Follow Us
              </div>
              <ul className="space-y-1 lg:space-y-[16px]">
                <li>
                  <a
                    href="https://wa.me//+2348027779949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[14px] lg:leading-[24px] text-[#000] underline-offset-[8px] hover:underline-[#EAD6BD] transition-colors duration-300"
                  >
                   whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fortt_interiors?igsh=enZhNm1scjY2ODBv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[14px] lg:leading-[24px] text-[#000] underline-offset-[8px] hover:underline-[#EAD6BD] transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <div className="font-[cormorant] text-[16px] font-semibold mb-2 lg:mb-[16px]">
                Legal
              </div>
              <ul className="space-y-1 lg:space-y-[16px]">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:underline text-[14px] lg:leading-[24px] text-[#000] underline-offset-[8px] hover:underline-[#EAD6BD] transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-[14px] lg:leading-[24px] text-[#000]">
                  ©2025 Fort Interiors
                  <br />
                  All Rights Reserved
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col flex-1">
            <div className="font-[cormorant] font-normal text-[#000000] mb-4 text-left">
              Stay up to date with interior design tips
            </div>
            <form className="w-full flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent border-b border-[#3B241E] outline-none py-[10px] px-0 text-[#3B241E] lg:leading-[24px] placeholder:text-[#3B241E] text-[14px] w-full"
              />
              <button
                type="submit"
                className="bg-[#3B241E] text-white px-[14px] py-[10px] mt-2 w-full lg:w-[160px] text-[14px] font-normal"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
