import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import emoji from "react-easy-emoji";
import "../App.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
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

// https://lottie.host/404b4374-818c-42aa-adfc-569c4f9fe063/Z0DG4t0k6D.json

//https://lottie.host/632e0660-70fe-4581-acc8-0e0e840885ca/7dTQuUsEDr.json

// https://lottie.host/3c0558a0-56d3-4008-b763-5444cdf93801/rwP0YnXQ9D.json

// https://lottie.host/911ff1b4-6736-4537-a3d0-eacd282e9960/vlDSV5uLo9.json

// https://lottie.host/36f4ade8-c001-4da7-b14c-544f9f03dfba/1R5wTzYhMx.json

// https://lottie.host/3cd16a69-8082-4a67-bddc-89ba5435a72b/1oi0bufKPZ.json

// https://lottie.host/1f7c6776-3203-4356-ac03-1985d41c7042/G3OfnAnz28.json

// https://lottie.host/3df77b41-e8ef-4a25-af22-3684fb934c58/Ex87uiqhzU.json

// https://lottie.host/52b05bc1-8591-4a7a-a578-ace67f2f43ee/D82Jiucpee.json

// https://lottie.host/48d8cf18-a44b-474f-860a-0f95f10b64f5/G8OcUo30sg.json

// https://lottie.host/2001f9a3-85ac-4288-b59f-c82d8ba6958f/SBrcRxgXHF.json

// https://lottie.host/39f463ba-ca87-4bcd-b5fa-977cf1aae77d/q4t8zeGiMN.json

// https://lottie.host/55bfe6e9-d49b-4d9f-90fb-b63e124f498c/KB9Y4dAHKJ.json

const Home = () => {
  return (
    <div
      name="home"
      className="w-full
      bg-[#07080a]"
    >
      {/*  */}
      {/* Container */}
      <div className="  flex flex-row justify-start">
        {/* max-w-[1000px] */}
        <div className=" pl-20 flex flex-col justify-center">
          <div>
            <div className="pt-24">
              <h1 className="text-indigo-50 text-4xl sm:text-7xl font-medium text-[#ccd6f6] font-sans pb-4">
                Hey, I'm Manisha{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
                {/* <span  sticky z-10"></span> */}
              </h1>

              {/* </div> */}
              {/* <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"> */}
              {/* hshskssjsk */}
              {/* </h1> */}
              {/* <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> */}
              {/* I'm a Frontend Developer. */}
              {/* </h2> */}
              {/* <div > */}
              {/* max-w-[500px] */}
            </div>
            <div>
              <p className="text-[#ced1da] py-4 max-w-[900px] text-3xl">
                I'm a full stack Web Developer, skilled in Front End
                Development. I enjoy building great stuff using REACTJS, REDUX,
                HTML CSS, TAILWIND CSS, TYPESCRIPT. Also, a keen learner and
                would like to continue learning throughout the life. Currently,
                focused on building full-stack responsive web applications with
                exceptional digital experiences for the society.
              </p>
            </div>
          </div>
          {/* </div> */}

          <div className="pt-4">
            <div className="flex flex-row gap-4">
              <button className="text-white group border-2 px-6 py-3 my-2 rounded flex items-center hover:bg-indigo-600 hover:border-indigo-600">
                <a href="#my-work">View Work</a>
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
              <button className="text-white group border-2 px-6 py-3 my-2 rounded flex items-center hover:bg-indigo-600 hover:border-indigo-600">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/19YWeVN8kJGaxgNcDf_Dou10F6yOGiMcx/view?usp=sharing"
                  rel="noreferrer"
                >
                  {" "}
                  Resume{" "}
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* <div> */}
        <Player
          autoplay
          loop
          src="https://lottie.host/911ff1b4-6736-4537-a3d0-eacd282e9960/vlDSV5uLo9.json
            "
          // style={{ height: "300px", width: "300px" }}
          className="scale-50 sticky top-0 "
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
