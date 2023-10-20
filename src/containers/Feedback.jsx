import React from "react";
import styles, { layout } from "../styles";
import testimonial from "../assets/testimonial.png";
import SectionTitle from "./../components/SectionTitle";
import { FeedbackCard } from "../components";
import data from "../constant/data";

const Feedback = () => {
  return (
    <section id="testimonial" className={`${styles.section}  bg-lightpink `}>
      <div
        className={`${layout.fullContainer} p-4 md:px-9  flex flex-col md:flex-row sm:flex-col md:pt-[10rem] `}
      >
        <div
          className={`md:w-2/5 bg-emerald-50] flex-col  ${styles.flexCenter} `}
        >
          <h1 className={`${styles.heading3}`}>
            What Our Customers Are Saying{" "}
          </h1>
          <div></div>
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
