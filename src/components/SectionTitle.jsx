import React from "react";
import styles from "../styles";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className={`pt-[5rem] ${styles.flexCenter} ${styles.flexCol}`}>
      <p className={`${styles.title} ${styles.flexCenter}`}>{title}</p>
      <p className="text-base font-poppins font-semibold text-black">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
