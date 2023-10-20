import React from "react";

import styles from "../styles";

const FeedbackCard = ({ profile, name, rating, comment }) => {
  return (
    <div className="flex flex-col my-6 px-6 sm:mx-4 md:p-6 bg-secondary rounded-lg shadow-lg">
      <div className="flex items-center ">
        <img src={profile} alt="" className="py-4 sm:py-0" />
        <div className="flex-col items-center">
          <p className={`${styles.h4} py-2 px-2`}>{name}</p>
          <div className="flex px-2 py-1">
            <img src={rating} alt="" />
          </div>
        </div>
      </div>
      <div>
        <p className={`${styles.paragraph}`}>{comment}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
