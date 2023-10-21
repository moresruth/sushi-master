import React from "react";
import styles, { layout } from "../styles";
import { BsLinkedin, BsGithub, BsBehance } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={`${layout.fullContainer} ${styles.flexCol} `}>
      <div
        className={`${styles.flexCenter} ${styles.paragraph} py-[1px] px-6 border-t-[1px] border-amber-950`}
      />
      <div
        className={`${styles.justifyBetween} ${styles.flexRow} py-3 ${styles.flexCenter} `}
      >
        <a
          href="#home"
          className="font-playfair font-bold text-2xl sm:text-4xl "
        >
          SUSHIMASTER
        </a>
        <div className={`${styles.justifyBetween} py-6 mx-12`}>
          <ul className="flex flex-col sm:flex-row justify-between items-center">
            {["home", "about", "products", "testimonial"].map((item) => (
              <li
                className="py-3 font-poppins font-semibold text-base sm:px-4 md:px-9 capitalize hover:text-amber-950"
                key={`link-${item}`}
              >
                <a href={`#${item}`} className="">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.justifyBetween} py-6 mx-12`}>
          <div className="bg-amber-950 mx-2 flex items-center justify-center w-[50px] h-[50px] rounded-full">
            <a href="#" target="_blank">
              <FaFacebook className="text-[25px]  text-white   hover:text-lightpink" />
            </a>
          </div>

          <div className="bg-amber-950 mx-2  flex items-center justify-center w-[50px] h-[50px] rounded-full">
            <a href="#">
              <FaTwitter className="text-[25px]  text-white   hover:text-lightpink" />
            </a>
          </div>
          <div className="bg-amber-950 mx-2  flex items-center justify-center w-[50px] h-[50px] rounded-full">
            <a href="#">
              <FaDiscord className="text-[25px]  text-white   hover:text-lightpink" />
            </a>
          </div>
          <div className="bg-amber-950 mx-2 flex items-center justify-center w-[50px] h-[50px] rounded-full">
            <a href="#">
              <BsLinkedin className="text-[25px]  text-white   hover:text-lightpink" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.flexCenter} ${styles.paragraph} py-4 px-6 border-t-[1px] border-amber-950`}
      >
        Designed and built by Ruth Mores
      </div>
    </section>
  );
};

export default Footer;
