// import { imgHero } from "../assets";

import { imgHero } from "../assets";

const Home = () => {
  return (
    <section
      id="home"
      className="container mx-auto  mt-[3.5rem] pt-[3.5rem] min-h-screen flex flex-col sm:flex-row"
    >
      <div className="sm:w-3/5 px-6 pt-5 md:pt-[8rem]">
        <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-7xl py-2">
          Enjoy Delicious
        </h2>
        <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-7xl py-2">
          Japanesse Food
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[25px] py-4">
          Enjoy a good dinner wih the best dishes in the market. Feel the taste
          of the most popular Japanese food from anywhere and anytime.
        </p>
        <a
          href="#login"
          className="font-poppins  font-semibold bg-amber-950 border-[1px] border-amber-950 px-4 py-2 rounded-[25px] text-white cursor-pointer transition ease-in-out hover:bg-white hover:text-amber-950"
        >
          Subscribe
        </a>
      </div>

      <img
        src={imgHero}
        alt=""
        className="mt-[2rem] sm:w-[50%] w-[90%] ml-[1.5rem] sm:flex-1 px-6 py-6"
      />

      {/* <div className="sm:w-1/2  px-6 py-6">
        <img src={imgHero} alt="" className="mt-[2rem]" />
      </div> */}
    </section>
  );
};

export default Home;
