import React from "react";
import styles, { layout } from "../styles";
import temaki from "../assets/temaki.svg";
import maki from "../assets/maki.svg";
import { Menu } from "../components";
import data from "../constant/data";

const TodaysMenu = () => {
  return (
    <section id="todaysmenu" className={`${layout.section} `}>
      <div className={` flex flex-col-reverse sm:flex-row`}>
        <div className={`${layout.HalfContainer} `}>
          <h1 className={`${styles.heading4} py-5`}>Today's Special Sushi</h1>
          <img src={temaki} alt="" className="pt-5" />
        </div>
        <div className={`${layout.HalfContainer} ${styles.flexCol} bg-red-300`}>
          <h1 className={`${styles.flexCenter} ${styles.heading4} py-5`}>
            TEMAKI & NIGIRI
          </h1>
          {data.temaki.map((temaki, index) => (
            <Menu
              key={temaki.title + index}
              title={temaki.title}
              price={temaki.price}
            />
          ))}
        </div>
      </div>

      {/* ===================== */}
      <div className={` flex flex-col sm:flex-row`}>
        <div className={`${layout.HalfContainer} bg-red-300`}>
          <h1 className={`${styles.flexCenter} ${styles.heading4} py-5`}>
            MAKI & URAMAKI
          </h1>
          {data.uramaki.map((uramaki, index) => (
            <Menu
              key={uramaki.title + index}
              title={uramaki.title}
              price={uramaki.price}
            />
          ))}
        </div>
        <div className={`${layout.HalfContainer} `}>
          <h1 className={`${styles.heading4} py-5`}>Today's Special Sushi</h1>
          <img src={maki} alt="" className="pt-5" />
        </div>
      </div>
    </section>
  );
};

export default TodaysMenu;
