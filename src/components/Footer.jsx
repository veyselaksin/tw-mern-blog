import React from "react";
import { images } from "../constants";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconHeartFilled,
} from "@tabler/icons-react";

function Footer() {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 md:grid-cols-12 px-[1rem] py-[2rem] gap-y-10 gap-x-5">
        <div className="col-span-5 md:col-span-4">
          <h3 className="text-dark-light font-bold">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/landingpage">Landingpage</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/documentation">Documentation</a>
            </li>
            <li>
              <a href="/referral-program">Referral Program</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 md:col-span-4">
          <h3 className="text-dark-light font-bold">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/documentation">Documentation</a>
            </li>
            <li>
              <a href="/design">Design</a>
            </li>
            <li>
              <a href="/themes">Themes</a>
            </li>
            <li>
              <a href="/illutstrations">Illustrations</a>
            </li>
            <li>
              <a href="/ui-kit">UI Kit</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 md:col-span-4 md:col-start-5">
          <h3 className="text-dark-light font-bold">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5 md:col-span-4">
          <h3 className="text-dark-light font-bold">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/documentation">Documentation</a>
            </li>
            <li>
              <a href="/licence">Licence</a>
            </li>
            <li>
              <a href="/changelog">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4">
          <img
            src={images.Logo}
            alt="logo"
            className="mx-auto brightness-0 invert"
          />
          <p className="text-dark-light mt-[1rem] text-center">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex flex-row gap-3 mt-3 justify-center">
            <li className="bg-primary p-[16px] rounded-full text-white hover:bg-white hover:text-primary transition-colors duration-200">
              <a href="/facebook">
                <IconBrandFacebook />
              </a>
            </li>
            <li className="bg-black p-[16px] rounded-full text-white hover:bg-white hover:text-black transition-colors duration-200">
              <a href="/twitter">
                <IconBrandX />
              </a>
            </li>
            <li className="bg-gradient-to-r p-[16px] from-[#833ab4] to-[#e1306c] text-white rounded-full hover:from-white hover:to-white hover:text-[#833ab4] transition-colors duration-200">
              <a href="/instagram">
                <IconBrandInstagram />
              </a>
            </li>
            <li className="bg-primary p-[16px] rounded-full text-white hover:bg-white hover:text-primary transition-colors duration-200">
              <a href="/linkedin">
                <IconBrandLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex md:flex-col md:items-center md:col-span-12 ">
          <div className="bg-primary text-white p-[16px] rounded-full mx-auto">
            <IconHeartFilled />
          </div>
          <p className="text-dark-light text-center mt-[.5rem] italic font-bold">
            Copyright © 2023. veyselaksin with love.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
