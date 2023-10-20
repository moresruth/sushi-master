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

    // <div className="">
    //   <div className="flex items-center">
    //   </div>
    // </div>
    // <div className="px-6 md:px-4">
    //   <div className=" flex flex-col">
    //     {/* <h1 className="font-bold font-playfair">TEMAKI AND MAKI</h1> */}

    //   </div>
    // </div>
  );
};

export default Menu;
// width: 90px;
// height: 1px;
// background: var(--brown-color);
// margin: 0 1rem;
