import React from "react";
import styles, { layout } from "../styles";
import testimonial from "../assets/testimonial.png";
import { FeedbackCard } from "../components";
import data from "../constant/data";

const Feedback = () => {
  return (
    <section id="testimonial" className="bg-lightpink">
      <div
        className={`${layout.section} p-4 md:px-9  flex flex-col md:flex-row md:pt-[10rem] `}
      >
        <div className={`md:w-2/5  flex-col  ${styles.flexCenter} `}>
          <h1 className={`${styles.title} text-center pb-5 `}>
            What Our Customers Are Saying{" "}
          </h1>

          <img src={testimonial} alt="image" className="md:mt-5" />
        </div>

        <div className="md:w-3/5 ">
          {data.feedbacks.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
