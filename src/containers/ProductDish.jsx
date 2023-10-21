import React from "react";
import styles, { layout } from "../styles";
import { ProductCard, SectionTitle } from "../components";
import data from "../constant/data";

const ProductDish = () => {
  return (
    <section id="products" className={`${layout.section} mb-[5rem]`}>
      <SectionTitle title="Popular Dishes" subtitle="人気の料理" />
      <div className={` ${styles.flexCenter} flex flex-col sm:flex-row px-6`}>
        {data.products.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ProductDish;
