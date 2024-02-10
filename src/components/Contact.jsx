import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className=" text-center bg-[#07080a] pt-10 pb-20">
      {/* <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      > */}
      <div className="pb-8 ">
        <div className="flex flex-row gap-2 justify-center">
          {" "}
          <p className="text-5xl font-bold inline border-b-4 border-indigo-600 text-gray-300">
            Contact
          </p>
          <div className="text-red-600 text-4xl font-bold">
            <FaPhoneAlt />
          </div>
        </div>
        <p className="text-gray-300 py-4 text-2xl">
          <p className="pt-4">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </p>
          <p className="pt-2">+91-9867595759 </p>
          <h1 className="pt-2">
            {" "}
            <a href>manishagajula@gmail.com </a>
          </h1>
        </p>
      </div>
      <div className=" ">
        <ul className="flex flex-row gap-2 items-center justify-center">
          <li>
            <a
              href="https://www.linkedin.com/in/manishagajula/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={40}
                className="rounded-lg
              bg-zinc-800
              text-gray-300
              p-1
              mx-1
              text-2xl
              ring-zinc-500
              hover:ring-2
              transition-all
              duration-200"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/manishagajula"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={40}
                className="rounded-lg
              bg-zinc-800
              text-gray-300
              p-1
              mx-1
              text-2xl
              ring-zinc-500
              hover:ring-2
              transition-all
              duration-200"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:manishagajula@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail
                size={40}
                className="rounded-lg
              bg-zinc-800
              text-gray-300
              p-1
              mx-1
              text-2xl
              ring-zinc-500
              hover:ring-2
              transition-all
              duration-200"
              />
            </a>
          </li>
          <li>
            <a href="/" target="_black" rel="noreferrer">
              <BsFillPersonLinesFill
                size={40}
                className="rounded-lg
              bg-zinc-800
              text-gray-300
              p-1
              mx-1
              text-2xl
              ring-zinc-500
              hover:ring-2
              transition-all
              duration-200"
              />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-gray-300 pt-4">
        made with and ReactJS
        <p>© 2024 Manisha Gajula</p>
      </p>
    </div>
  );
};

// +91-8975751438

// kesarwani.neha9@gmail.com

export default Contact;
