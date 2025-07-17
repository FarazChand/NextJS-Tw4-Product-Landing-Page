import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
};

const About = ({ imageOrder, textOrder, title, linkText }: Props) => {
  return (
    <section className="pt-16 pb-16">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text content */}
        <div className={`${textOrder}`}>
          {/* Title */}
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h1>
          {/* list */}
          <div className="mt-8">
            <div className="mb-6 flex items-center space-x-4">
              <div className="bg-brand-200 text-text-light-100 flex h-6 w-6 flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-text-dark-300 dark:text-text-light-200 text-sm sm:text-base">
                High-Resolution Audio compatible
              </p>
            </div>
            <div className="mb-6 flex items-center space-x-4">
              <div className="bg-brand-200 text-text-light-100 flex h-6 w-6 flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-text-dark-300 dark:text-text-light-200 text-sm sm:text-base">
                High quality wireless audio with BLUETOOTH and LDAC technology
              </p>
            </div>
            <div className="mb-6 flex items-center space-x-4">
              <div className="bg-brand-200 text-text-light-100 flex h-6 w-6 flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-text-dark-300 dark:text-text-light-200 text-sm sm:text-base">
                Smart listening experience by Adaptive Sound Control
              </p>
            </div>
            <div className="mb-6 flex items-center space-x-4">
              <div className="bg-brand-200 text-text-light-100 flex h-6 w-6 flex-col items-center justify-center rounded-full">
                <FaCheck />
              </div>
              <p className="text-text-dark-300 dark:text-text-light-200 text-sm sm:text-base">
                Ergonomic, enfolding design earpads
              </p>
            </div>
            {/* Link */}
            <p className="w-fit cursor-pointer font-semibold text-pink-600 hover:underline">
              Learn more
            </p>
          </div>
        </div>

        {/* Image content */}
        <div className={`${imageOrder}`}>
          <Image src="/images/h1.png" alt="image" width={380} height={380} />
        </div>
      </div>
    </section>
  );
};

export default About;
