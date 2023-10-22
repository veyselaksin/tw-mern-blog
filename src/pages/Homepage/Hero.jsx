import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { hero, images } from "../../constants";

function Hero() {
  return (
    <section className="section-container items-center flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col mt-10 lg:w-1/2">
        <h1 className="text-dark-soft text-3xl font-bold text-center md:text-5xl lg:text-left lg:max-w-[33.75rem]">
          Read the most interesting article
        </h1>
        <p className="text-dark-light text-xl text-center lg:text-left mt-4 md:text-2xl lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia, quidem, quia, quod voluptate doloribus natus doloremque
          voluptatibus quas quos quae? Quisquam, quod. Quisquam, quod.
        </p>

        <div className="flex flex-col gap-y-2.5 mt-10 relative">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              type="text"
              placeholder="Search"
              className="text-bold placeholder:font-bold placeholder-[#959EAD] pl-10 py-3 rounded-md w-full font-bold text-dark-soft shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            />
          </div>
          <button className="bg-primary text-white rounded-md font-bold px-5 py-3 md:absolute right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex flex-col lg:flex-row mt-[1.5rem] lg:flex-nowrap">
          <span className="text-dark-light italic lg:mr-[1rem]">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-[1rem] mt-3 lg:mt-0 items-center">
            {hero.popular_tags.map((tag, index) => (
              <li
                key={index}
                className="bg-primary/10 py-1.5 px-3 rounded-md font-semibold text-primary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block w-1/2">
        <img src={images.HeroImage} alt="hero-image" className="w-full" />
      </div>
    </section>
  );
}

export default Hero;
