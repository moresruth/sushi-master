import React from "react";
import styles, { layout } from "../styles";
import imgfooter01 from "../assets/newsletter01.png";
import imgfooter02 from "../assets/newsletter02.png";

const Newsletter = () => {
  return (
    <section className={`${layout.section} mb-[5rem]`}>
      <div
        id="newsletter"
        className={`${styles.flexRow} ${styles.flexCenter} relative h-[379px] bg-lightpink rounded-2xl my-5`}
      >
        <div className="absolute -left-[0rem] bottom-[0rem]">
          <img src={imgfooter01} alt="" className="w-[100px] sm:w-[200px]" />
        </div>
        <div className={`${styles.flexCol} py-12 px-2`}>
          <h1 className={`${styles.title}`}>Subscribe To Our Newsletter</h1>
          <div>
            <p className={`${styles.paragraph} text-center`}>
              Get Offers Straight to Your Inbox <br /> And Never Miss Our Latest
              Updates
            </p>
          </div>
          <form className="flex justify-between rounded-[4rem] bg-lightpink border-2 border-amber-950">
            <input
              type="email"
              placeholder="Enter email"
              className="w-[130px] md:w-[250px] rounded-[4rem] px-1 bg-transparent ring-0 mr-2 outline-none text-amber-950"
            />
            <a href="#login" className={`${styles.button}`}>
              Subscribe
            </a>
          </form>
        </div>
        <div className="absolute -top-[0rem] right-[0rem]">
          <img src={imgfooter02} alt="" className="w-[100px] sm:w-[200px]" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
