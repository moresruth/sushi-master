import React from "react";
import salmontemaki from "../assets/salmontemaki.svg";
import styles from "../styles";
import { BiShoppingBag } from "react-icons/bi";

const ProductCard = ({ imgUrl, name, price, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-[280px] md:w-[400px]  bg-secondary rounded-xl shadow-lg mt-[5rem] mx-3 pb-4 items-center ">
      <div className={`${styles.flexCenter} ${styles.flexCol} relative `}>
        <img
          src={imgUrl}
          alt=""
          className=" w-[300px] md:w-[340px] transition duration-150 cursor-pointer -mt-[2.5rem] hover:-translate-y-6 ease-in-out"
        />
        <h3 className={`${styles.heading4} py-3`}>{name}i</h3>
        <p className={`${styles.paragraph}`}>{description}</p>
        <div className={`${styles.flexCenter} ${styles.button} mb-3`}>
          <a href="#">Buy Now</a>
          <span className="pl-3">
            <BiShoppingBag />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
