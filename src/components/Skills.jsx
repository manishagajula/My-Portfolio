import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
// import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import PostMan from "../assets/postman.png";
import Redux from "../assets/redux.png";
import Git from "../assets/git.png";
import TypeScript from "../assets/typescript.png";
// import Mongo from "../assets/mongo.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

// https://lottie.host/13147acf-0d59-4860-bea2-48d8489c6bf6/VDvZ3MdVQM.json

// https://lottie.host/071f9983-aeed-4b07-9ff5-809099006dfa/zxziygajCO.json

// https://lottie.host/6dcf424e-d1dd-4cdd-878b-eb22a4849b7d/OLFYiGsuPs.json

// https://lottie.host/f3b6579d-c0a6-4df3-a88f-0edade3d6204/77D2hMmkAJ.json

// https://lottie.host/37efc9fc-bf66-4089-9a63-b1838991e086/C6DNXdo3JO.json

// https://lottie.host/1b8adc00-0f92-4c7c-862b-3e40d3dff6e3/7uHhRSH7GP.json

// https://lottie.host/c1067b13-8dfc-4138-9ed8-302e83d5b87e/afggqUGmWc.json

// https://lottie.host/5be2e8f7-6558-4cbb-a6cd-61a9096137fe/X3eIBmjlDm.json

// new

// https://lottie.host/404b4374-818c-42aa-adfc-569c4f9fe063/Z0DG4t0k6D.json

// https://lottie.host/632e0660-70fe-4581-acc8-0e0e840885ca/7dTQuUsEDr.json

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
const Skills = () => {
  return (
    <div
      name="skills"
      className="pt-2 pb-2 pl-28 pr-28 bg-[#07080a] text-gray-300"
    >
      {/* Container */}
      <div className="flex flex-row justify-start">
        {/* max-w-[1500px] */}
        {/* <div className="scale-x-50 scale-y-50"> */}
        <div className="mr-56  ">
          <Player
            autoplay
            loop
            src="https://lottie.host/3df77b41-e8ef-4a25-af22-3684fb934c58/Ex87uiqhzU.json"
            className="scale-x-105 scale-y-105 "
            style={{ height: "300px", width: "300px" }}
          />
        </div>
        {/* </div> */}
        <div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-indigo-600 ">
              Tech Stack
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500 pr-8 pl-8">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto text-white"
                src={GitHub}
                alt="HTML icon"
              />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
              <p className="my-4">NODE JS</p>
            </div>
            {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
            </div> */}
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
              <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={PostMan} alt="HTML icon" />
              <p className="my-4">PostMan</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Redux} alt="HTML icon" />
              <p className="my-4">Redux</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Git} alt="HTML icon" />
              <p className="my-4">Git</p>
            </div>
            <div className="shadow-md shadow-[#b3d0ed] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={TypeScript} alt="HTML icon" />
              <p className="my-4">Typescript</p>
            </div>
            {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
           </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
