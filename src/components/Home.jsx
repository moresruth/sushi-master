import React from "react";
import styles, { layout } from "../styles";
import { imgHero } from "../assets";

const Home = () => {
  return (
    <section id="home" className={`${layout.section} sm:${layout.flexOnSM}`}>
      <div className="sm:w-3/5 px-6 pt-5 md:pt-[8rem]">
        <h2 className={`${styles.heading2}`}>Enjoy Delicious</h2>
        <h2 className={`${styles.heading2}`}>Japanesse Food</h2>
        <p className={`${styles.paragraph}`}>
          Enjoy a good dinner wih the best dishes in the market. Feel the taste
          of the most popular Japanese food from anywhere and anytime.
        </p>
        <a href="#login" className={`${styles.button} `}>
          Subscribe
        </a>
      </div>

      <div className={`${layout.HalfContainer} `}>
        <img src={imgHero} alt="" className="mt-[2rem]" />
      </div>
    </section>
  );
};

export default Home;
