import React from "react";
import styles, { layout } from "../styles";
import imgfooter01 from "../assets/newsletter01.png";
import imgfooter02 from "../assets/newsletter02.png";

const Newsletter = () => {
  return (
    <section id="newsletter" className="my-[5rem]">
      <div className={`${layout.fullContainer} my-5   `}>
        <div
          className={`flex flex-col sm:flex-row items-center  rounded-[1rem] md:mx-[2.5rem] bg-lightpink`}
        >
          {/* item 1 */}
          <div className="mt-[4rem] -left-[0rem] top-[3rem]  sm:top-[0rem] relative">
            <img
              src={imgfooter01}
              alt=""
              className="hidden sm:flex relative -left-[0rem] top-[3.5rem] sm:top-[1rem] "
            />
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center w-[260px] md:w-[900px] pb-5 md:my-[4rem]">
            <h1 className="font-playfair font-semibold text-[32px] text-center px-2">
              Subscribe To Our Newsletter
            </h1>
            <div>
              <p className="py-4 px-2 text-center font-normal">
                Get Offers Straight to Your Inbox <br /> And Never Miss Our
                Latest Updates
              </p>
            </div>
            <form className="flex rounded-[4rem] bg-lightpink border-2 border-amber-950">
              <input
                type="email"
                placeholder="Enter email"
                className="w-[130px] md:w-[250px] rounded-[4rem] px-1 bg-transparent ring-0 mr-2 outline-none text-amber-950"
              />
              <a
                href="#login"
                className="font-poppins  font-semibold bg-amber-950 border-[2px] border-amber-950 px-4 py-2 rounded-[25px] text-white cursor-pointer transition ease-in-out hover:bg-white hover:text-amber-950"
              >
                Subscribe
              </a>
            </form>
          </div>

          {/* item3 */}
          <div>
            <img src={imgfooter02} alt="" className="hidden sm:flex" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
