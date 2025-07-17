import React from "react";

import { FaFingerprint } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md";

const featureData = [
  {
    title: "Touch to buy",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores debitis voluptate illum?",
    icon: <MdOutlineTouchApp className="text-brand-200 mx-auto h-12 w-12" />,
  },
  {
    title: "Secure Data",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores debitis voluptate illum?",
    icon: <FaFingerprint className="text-brand-200 mx-auto h-12 w-12" />,
  },
  {
    title: "Instant Chat",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores debitis voluptate illum?",
    icon: <HiOutlineChat className="text-brand-200 mx-auto h-12 w-12" />,
  },
  {
    title: "Live Notification",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores debitis voluptate illum?",
    icon: <MdNotifications className="text-brand-200 mx-auto h-12 w-12" />,
    // icon: <HiOutlineChat className="text-brand-200 mx-auto h-12 w-12" />,
  },
  {
    title: "Wifi Support",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores debitis voluptate illum?",
    icon: <IoWifiOutline className="text-brand-200 mx-auto h-12 w-12" />,
  },
  {
    title: "App Watch",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores debitis voluptate illum?",
    icon: <IoAppsOutline className="text-brand-200 mx-auto h-12 w-12" />,
  },
];

const Features = () => {
  return (
    <section className="pt-16 pb-16">
      <div className="mx-auto grid w-[80%] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featureData.map((feature, index) => {
          return (
            <div key={index} className="mx-auto text-center">
              <div className="mx-auto text-center">{feature.icon}</div>

              <h1 className="text-text-dark-200 dark:text-text-light-100 mt-4 text-lg font-semibold">
                {feature.title}
              </h1>
              <p className="text-text-dark-300 dark:text-text-light-200 mt-4 text-sm">
                {" "}
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
