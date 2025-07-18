import React from "react";
import { BsQuote } from "react-icons/bs";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div>
      <BsQuote className="text-brand-400 h-14 w-14" />
      <p className="text-text-dark-400 dark:text-text-light-200 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolor
        vel libero amet reiciendis nam iure. Obcaecati ab doloribus quibusdam
        nihil magnam est molestias amet deleniti ullam labore eius, ut, nisi
        dolores at repudiandae non? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde, placeat.
      </p>
      <div className="mt-6">
        <Image
          src={image}
          alt="image"
          width={100}
          height={100}
          className="mx-auto rounded-full object-center"
        />
        <h1 className="mt-4 text-center text-lg font-bold">{name}</h1>
        <h1 className="text-text-dark-300 text-center">{role}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
