import React from "react";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <section className="pt-16 pb-16">
      <h1 className="dark:text-text-light-100 text-text-dark-400 text-center text-2xl font-bold sm:text-3xl">
        10k+ Customers trust us
      </h1>
      <span className="bg-brand-200 mx-auto mt-3 block h-1 w-16"></span>
      <div className="mx-auto mt-16 w-[90%] sm:w-[80%] lg:w-[60%]">
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Review;
