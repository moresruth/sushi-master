import React, { useState } from "react";
import styles from "../styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full backdrop-blur-sm bg-white/28 px-6 fixed z-[99]">
      <div className="container mx-auto justify-between flex py-4 items-center">
        <a
          href="#home"
          className="font-playfair font-bold text-2xl sm:text-4xl "
        >
          SUSHIMASTER
        </a>
        <ul className="hidden md:flex justify-between items-center">
          {["home", "about", "products", "testimonial"].map((item) => (
            <li
              className="font-poppins font-semibold text-base sm:px-4 md:px-9 capitalize hover:text-amber-950"
              key={`link-${item}`}
            >
              <a href={`#${item}`} className="">
                {item}
              </a>
            </li>
          ))}
          <a href="#newsletter" className={`${styles.button} `}>
            Subscribe
          </a>
        </ul>

        <div className="md:hidden flex">
          <GiHamburgerMenu
            className="text-amber-950 text-[20px]"
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="p-2 bg-lightpink absolute  top-3 right-0 mx-4 my-2 min-w-[100px] rounded-sm ">
              <AiOutlineCloseSquare
                className="text-amber-950 text-[20px] ml-[11rem]"
                onClick={() => setToggleMenu(false)}
              />

              <ul className="list-none flex justify-end p-2 mx-auto flex-col flex-1 capitalize font-poppins font-normal hover:text-white ">
                {["home", "about", "products", "testimonial"].map((item) => (
                  <li key={item} className="py-2">
                    <a href={`#${item}`} onClick={() => setToggleMenu(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
