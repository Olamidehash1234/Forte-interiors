import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const ConsultationHero = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section className="w-full py-[40px] px-[16px] lg:py-[60px] lg:px-[80px] bg-white">
      <div className="">
        <div
          className="relative w-full rounded-none overflow-hidden"
          style={{
            minHeight: "300px",
            height: "300px",
          }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              minHeight: "300px",
              backgroundImage: "url('https://res.cloudinary.com/dzwv3fba5/image/upload/v1750855309/faq-img_x22njf.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for darkening */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-12 sm:py-16">
              <h2 className="text-white text-center font-serif font-normal text-[20px] lg:text-[40px] leading-tight mb-[20px]">
                LET’S CREATE SOMETHING BEAUTIFUL FOR <br className="hidden md:block" />
                YOUR NEXT PROJECT
              </h2>
              <button
                data-cal-namespace="30min"
                data-cal-link="fortinteriors/30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="border border-white text-white px-6 py-2 rounded-none text-base font-normal transition-colors duration-200 hover:bg-white hover:text-[#3B241E]"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;
