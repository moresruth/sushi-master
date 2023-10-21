// import { imgHero } from "../assets";

import imgHero from "../assets/imgHero.svg";
import styles, { layout } from "../styles";

const Home = () => {
  return (
    <section
      id="home"
      className={`${layout.section} flex flex-col sm:flex-row`}
    >
      <div className="sm:w-3/5  pt-5 md:pt-[8rem]">
        <h2 className={`${styles.heading2} mt-[2rem]`}>
          Enjoy Delicious <br />
          Japanesse Food
        </h2>

        <p className={`${styles.paragraph} py-5`}>
          Enjoy a good dinner wih the best dishes in the market. Feel the taste
          of the most popular Japanese food from anywhere and anytime.
        </p>
        <a href="#about" className={`${styles.button}`}>
          Learn More
        </a>
      </div>

      <div className={`${layout.HalfContainer}`}>
        <img src={imgHero} alt="" className="mt-[2rem]" />
      </div>
    </section>
  );
};

export default Home;
