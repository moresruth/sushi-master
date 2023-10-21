import React from "react";
import styles from "../styles";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className={`mt-[2rem] ${styles.flexCenter} ${styles.flexCol}`}>
      <p className={`${styles.title} ${styles.flexCenter}`}>{title}</p>
      <p className="text-base font-poppins font-semibold text-black">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
