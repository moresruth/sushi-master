import React from "react";
import styles from "../styles";

const Menu = ({ title, price }) => {
  return (
    <>
      <div className="flex items-center md:mx-12">
        <p className={`${styles.paragraph} flex-1`}>{title}</p>
        <div className="w-[50px] h-[1px] bg-amber-950 mx-[1rem]" />
        <p className={`${styles.paragraph}`}>{price}</p>
      </div>
    </>
  );
};

export default Menu;
