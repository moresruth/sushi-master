import React from "react";
import styles, { layout } from "../styles";

const Home = () => {
  return (
    <section id="about" className={`${layout.section} sm:${layout.flexOnSM}`}>
      <div className={`${layout.HalfContainer} ${styles.flexCenter}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          numquam, illo ut aliquid quo quidem impedit sapiente adipisci placeat
          tenetur.
        </p>
      </div>
      <div className={`${layout.HalfContainer} sm:mt-[5rem]`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          molestias repellendus fugit quas numquam dicta voluptates maiores eos?
          Alias eligendi vitae omnis soluta ex molestias nostrum, recusandae
          consequuntur! Tenetur, nulla.
        </p>
      </div>
    </section>
    // <section
    //   id="home"
    //   className={`${layout.section}  ${styles.flexRow}} relative`}
    // >
    //   <img
    //     src={imgHeroBG}
    //     className="hidden sm:flex absolute z-[0] bg-lightpink w-[360px] h-[753px] sm:left-[30rem] sm:-top-[6rem] md:left-[53rem] md:-top-[6rem]"
    //   />

    //   <div className="sm:w-3/5 px-6 pt-5 md:pt-[8rem]">
    //     <h2 className={`${styles.heading2}`}>Enjoy Delicious</h2>
    //     <h2 className={`${styles.heading2}`}>Japanesse Food</h2>
    //     <p className={`${styles.paragraph}`}>
    //       Enjoy a good dinner wih the best dishes in the market. Feel the taste
    //       of the most popular Japanese food from anywhere and anytime.
    //     </p>
    //     <a href="#login" className={`${styles.button} `}>
    //       Subscribe
    //     </a>
    //   </div>
    //   <div className="sm:w-2/5 relative">
    //     <img src={imgHero} alt="" className="absolute z-[5] w-[100%] s" />
    //   </div>
    // </section>
  );
};

export default Home;
