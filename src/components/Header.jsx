import React, { useState } from "react";
import { images, header } from "../constants";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";

function NavItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown(!dropdown);
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a
            className="px-1 flex flex-row items-center gap-[.3rem]"
            href={item.path}
          >
            {item.name}
          </a>
          <span className="text-white lg:text-primary absolute transition-all duration-500 right-0 top-0 opacity-0 group-hover:right-[100%] group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-1 flex flex-row items-center gap-[.3rem]"
            onClick={toggleDropdownHandler}
          >
            {item.name} <IconChevronDown size="1rem" fontWeight={800} />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-full lg:group-hover:block lg:w-max`}
          >
            <ul className="flex flex-col lg:border lg:border-solid lg:border-[#959EAD] rounded-md lg:shadow-lg overflow-hidden bg-dark-soft lg:bg-white">
              {item.items.map((subItem, index) => (
                <li
                  key={index}
                  className="hover:bg-dark-soft hover:text-white w-full px-[1.2rem] py-[.6rem]"
                >
                  <a href={subItem.path}>{subItem.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

function Header() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="section-container items-center flex justify-between">
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div className={"z-50 lg:hidden"}>
          {isShow ? (
            <IconX
              className="text-primary cursor-pointer"
              size="1.5rem"
              onClick={handleShow}
            />
          ) : (
            <IconMenu2
              className="text-primary cursor-pointer"
              size="1.5rem"
              onClick={handleShow}
            />
          )}
        </div>
        <div
          className={`${
            isShow ? "right-0" : "-right-full"
          } transition-all duration-300 bg-dark-hard lg:bg-transparent z-49 flex flex-col lg:flex-row w-full lg:w-auto justify-center lg:justify-end fixed -top-0 -bottom-0 -right-full lg:static gap-x-[2rem] items-center mt-[3.5rem] lg:mt-0`}
        >
          <ul className="text-white lg:text-dark-soft font-semibold flex flex-col lg:flex-row gap-x-[1rem] items-center">
            {header.nav_links.map((item, index) => (
              <NavItem item={item} key={index} />
            ))}
          </ul>

          <button className="border-2 border-solid border-white lg:border-primary text-white lg:text-primary px-[1rem] py-[.5rem] font-semibold rounded-full hover:bg-white hover:text-primary lg:hover:bg-primary lg:hover:text-white mt-[.5rem] lg:mt-0 transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
