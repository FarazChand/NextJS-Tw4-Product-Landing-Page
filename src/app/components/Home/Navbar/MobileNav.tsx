import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  closeNav: () => void;
  showNav: boolean;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navToggled = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`${navToggled} fixed inset-0 transform transition-all duration-500 z-[1002] bg-surface opacity-70 w-full h-screen`}
      ></div>

      {/* navlinks */}
      <div
        className={`${navToggled} text-text-light-100 fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-60% bg-brand-200 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="text-text-light-100 w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-text-light-100 sm:text-[30px]"
            >
              {link.label}
            </Link>
          );
        })}
        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8"
        />
      </div>
    </div>
  );
};

export default MobileNav;
