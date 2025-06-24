import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isBlog = location.pathname.startsWith("/blog");
  const isProjectCase = location.pathname.startsWith("/project-case");

  const navLinks = [
    { label: "About Us", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="w-full absolute lg:max-w-[1800px] mx-auto z-50 bg-transparent text-white">
      <div className="flex items-center justify-between px-[16px] py-[10px] lg:py-0 lg:px-[80px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/navbar/logo.svg" alt="Logo" className="w-16 h-16 lg:w-[99.56px] lg:h-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-[34px] text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`hover:underline hover:decoration-from-font hover:decoration-[1.5px] text-[14px] font-medium underline-offset-[10px] hover:decoration-[#EAD6BD] ${(isBlog || isProjectCase)? 'text-black' : 'text-[#fff]'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white bg-[#FFF] p-[5px] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <img src="/navbar/close.png" /> : <img src="/navbar/menu.png" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`
            lg:hidden
            fixed left-0 right-0 top-[78px] bottom-0
            ${isBlog ? 'bg-[#3B241E] text-white' : 'bg-[#3B241E] bg-opacity-100'}
            px-[16px] pt-8 pb-8 space-y-[30px] text-sm
            z-40
            transition-transform duration-300 ease-in-out
            transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`block border-b border-[#FFF] pb-[30px] ${isBlog ? 'text-white' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
