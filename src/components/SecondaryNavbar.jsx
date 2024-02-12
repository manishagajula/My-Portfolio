import React, { useState } from "react";
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
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SecondaryNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300">
      <div>
        <img src={Logo} alt="Logopicture" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex gap-12 font-medium ">
        <li>
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="p-4 hover:underline hover:bg-indigo-600 hover:rounded hover:border-1 hover:p-4"
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li>
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="p-4 hover:underline hover:bg-indigo-600 hover:rounded hover:border-1 hover:p-4"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="p-4 hover:underline hover:bg-indigo-600 hover:rounded hover:border-1 hover:p-4"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/"
            smooth={true}
            duration={500}
            className=" p-4 hover:underline hover:bg-indigo-600 hover:rounded hover:border-1 hover:p-4"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link to="/projects" smooth={true} duration={500}>
            {" "}
            Projects{" "}
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
    </div>
  );
};

export default SecondaryNavbar;
