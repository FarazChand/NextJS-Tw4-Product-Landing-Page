import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    // <section className="bg-brand-300 bg_clip relative flex h-screen w-full flex-col justify-center">
    <section className="relative flex h-screen w-full flex-col justify-center">
      <div className="bg-brand-300 bg_clip absolute inset-0 z-0"></div>

      <div className="z-10 mx-auto grid w-[90%] grid-cols-1 items-center gap-10 md:w-[80%] xl:grid-cols-2">
        {/* Text Content */}
        <div>
          {/* Heading */}
          <h1 className="text-text-light-100 mt-6 mb-6 text-3xl leading-[2.5rem] font-bold md:text-4xl md:leading-[3.5rem] lg:text-5xl">
            Superior sound, tangible quality
          </h1>
          {/* Description */}
          <p className="text-text-light-200 flex text-xs font-medium sm:text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
            blanditiis obcaecati aut. Vero explicabo assumenda, quis ab ad eius
            molestias doloribus porro ducimus ipsa officia dolorum ullam. Sunt,
            quod nam?
          </p>
          {/* Buttons */}
          <div className="mt-8 flex w-fit flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
            {/* 1st Button */}
            <a
              href="#_"
              className="group text-text-light-100 bg-main2-button-100 hover:from-main2-button-100 hover:to-main2-button-200 hover:ring-main2-button-200 relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:ring-2 hover:ring-offset-2"
            >
              <span className="ease bg-text-light-100 absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
              <span className="relative">Buy Now</span>
            </a>
            {/* 2nd Button */}
            <a
              href="#_"
              className="group text-text-light-100 bg-main-button-100 hover:from-main-button-100 hover:to-main-button-200 hover:ring-main-button-200 relative overflow-hidden rounded px-5 py-2.5 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:ring-2 hover:ring-offset-2"
            >
              <span className="ease bg-text-light-100 absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
              <span className="relative">Explore More</span>
            </a>
          </div>
        </div>
        {/* Image Content */}
        <div className="hidden xl:block">
          <Image
            src={"/images/hero.png"}
            alt="image"
            width={380}
            height={380}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
