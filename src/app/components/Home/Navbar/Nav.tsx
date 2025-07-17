"use client";

import React, { useEffect, useState } from "react";
import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${
        navBg ? "bg-brand-100 shadow-md" : ""
      } transition-all duration-200 h-[12vh] z-[100] fixed w-full `}
    >
      <div className="flex items-center h-full justify-between w-[90%] sm:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="text-text-light-100 font-bold text-2xl sm:text-3xl">
          LOGO
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((navLink) => {
            return (
              <Link
                key={navLink.id}
                href={navLink.url}
                className="text-text-light-100 hover:text-text-hover-100"
              >
                {navLink.label}
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Buy Now Button */}
          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-main-button-100 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-main-button-200 ring-offset-main-button-300 hover:ring-offset-main-button-100 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <FaShoppingBag className="mr-3 w-5 h-5" />
              Buy Now
            </span>
          </a>
          {/* Theme switch button */}
          {/* {burger Menu} */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-text-light-100 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
