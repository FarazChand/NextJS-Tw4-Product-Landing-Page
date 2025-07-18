"use client";

import React, { ReactHTMLElement, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
  };

  return (
    <section className="pt-16 pb-16">
      <h1 className="dark:text-text-light-100 text-text-dark-200 text-center text-2xl font-bold sm:text-3xl">
        Get In Touch
      </h1>
      <span className="bg-brand-300 mx-auto mt-3 block h-1 w-16"></span>
      <p className="text-text-dark-300 dark:text-text-light-200 mt-4 text-center text-sm sm:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
        inventore, assumenda earum.
      </p>
      <p className="text-text-dark-300 dark:text-text-light-200 text-center text-sm sm:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>

      {/* <form className="mx-auto mt-16 grid w-[90%] grid-cols-1 items-center gap-6 sm:w-[80%] lg:w-[60%] lg:grid-cols-2"> */}
      <form onSubmit={handleSumbit}>
        <div className="mx-auto mt-16 grid w-[90%] grid-cols-1 items-center gap-6 sm:w-[80%] lg:w-[60%] lg:grid-cols-2">
          <div className="h-full">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="Name"
              className="mb-4 block w-full rounded-md bg-gray-200 px-6 py-3.5 text-black shadow-md outline-none"
            />
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Email"
              className="mb-4 block w-full rounded-md bg-gray-200 px-6 py-3.5 text-black shadow-md outline-none"
            />

            <label className="sr-only" htmlFor="subject">
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              id="subject"
              type="text"
              placeholder="Subject"
              className="block w-full rounded-md bg-gray-200 px-6 py-3.5 text-black shadow-md outline-none"
            />
          </div>
          <div className="h-full">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              placeholder="message"
              className="mb-4 block h-full w-full rounded-md bg-gray-200 px-6 py-3.5 text-black shadow-md outline-none"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-text-light-100 mx-auto mt-8 flex cursor-pointer items-center gap-2 rounded-md bg-pink-800 px-6 py-4 shadow-md transition hover:bg-pink-900"
        >
          <FaPaperPlane size={18} /> Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
