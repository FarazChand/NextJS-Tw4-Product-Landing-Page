import React from "react";
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-gray-950 pt-16 pb-16">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-start gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {/* 1st Part */}
        <div>
          <div className="text-text-light-100 text-3xl font-bold">LOGO</div>
          <p className="mt-5 text-sm font-semibold text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dolorem blanditiis at fugit libero illum.
          </p>
          {/* social links */}
          <div className="text-text-light-100 mt-6 flex items-center space-x-4">
            <div className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-blue-700">
              <FaFacebookF />
            </div>
            <div className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-sky-500">
              <FaTwitter />
            </div>
            <div className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-pink-700">
              <FaDribbble />
            </div>
            <div className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-rose-700">
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* 2nd Part */}
        <div className="space-y-5">
          <h1 className="text-text-light-100 text-lg font-bold">Company</h1>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Legal Information
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Terms & Conditions
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Report Abuse
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Privacy Policy
          </p>
        </div>

        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-text-light-100 text-lg font-bold">Support</h1>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            About Us
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Services
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Ourt Customer
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Portfolio
          </p>
          <p className="cursor-pointer text-sm font-medium text-gray-300 hover:text-gray-400">
            Blogs
          </p>
        </div>

        {/* 4th Part */}
        <div>
          <h1 className="text-text-light-100 text-lg font-bold">
            Get In Touch
          </h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Mobile Number</h1>
            <h1 className="mt-1 text-base font-bold text-white">
              +134234 13424
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Address</h1>
            <h1 className="mt-1 text-base font-bold text-white">
              Toronto, Canada
            </h1>
          </div>
        </div>
      </div>
      {/* Bottom part */}
      <div className="mx-auto mt-8 flex w-[80%] flex-col items-center justify-between border-t pt-8 text-sm text-gray-600 md:flex-row">
        <p className="text-center md:text-left">
          Copyright 2026 Webdev. All rights reserved
        </p>
        <div className="mx-4 flex items-center space-x-4 md:mt-0">
          <span>Social: </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaFacebookF />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
