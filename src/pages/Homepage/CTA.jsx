import React from "react";
import { images } from "../../constants";

function CTA() {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-1px md:translate-y-2 lg:translate-y-3"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>

      <section className="relative bg-dark-hard px-5">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white mt-[1rem] font-bold text-center">
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className="mt-[1rem] mx-auto md:flex md:items-center md:space-x-[1rem] space-y-[1rem] md:space-y-0">
              <input
                type="text"
                placeholder="Your Email"
                className="px-[1rem] py-[.5rem] rounded-md w-full text-dark-light shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] placeholder:text-dark-light"
              />
              <button className="px-[1rem] py-[.5rem] font-bold bg-primary text-white col-span-12 w-full md:w-1/2 rounded-lg border border-primary hover:bg-white hover:text-primary transition-colors  duration-200">
                Get Started
              </button>
            </div>
            <div className="mt-[1rem]">
              <p className="text-dark-light">
                <i className="font-bold text-[#B3BAC5]">
                  Get a response tomorrow
                </i>{" "}
                if you submit by 9pm today. If we received after 9pm will get a
                reponse the following day.
              </p>
            </div>
          </div>
          <div className="md:col-span-12 lg:col-span-6 hidden md:block md:order-first lg:order-2">
            <img src={images.CTACard} alt="cta-card" />
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
