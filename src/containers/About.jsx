import React from "react";
import styles, { layout } from "../styles";
import imgAbout from "../assets/imgAbout.svg";
import { SectionTitle } from "../components";

const About = () => {
  return (
    <section id="about" className={`${layout.section}`}>
      <SectionTitle title="About" subtitle="私たちについて" />
      <div className="flex flex-wrap  mt-5">
        <div className="md:w-[325px] px-6 ">
          <h3 className={`${styles.heading3}  items-center `}>
            We Provide Healthy Food
          </h3>
          <p className={`${styles.paragraph} text-center `}>
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customer
          </p>
        </div>
        <div className="md:w-[500px] sm:w-[400px]   ">
          <img src={imgAbout} alt="" className={`${styles.flexCenter} `} />
        </div>
        <div className="md:w-[325px] px-6  items-center md:mt-[10rem]">
          <h3 className={`${styles.heading3} items-center`}>Our Mission</h3>
          <p className={`${styles.paragraph} text-center `}>
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customer
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
