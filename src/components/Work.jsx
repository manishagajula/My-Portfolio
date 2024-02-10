import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="work"
      className="w-full h-full pt-1 pb-4  text-gray-300 bg-[#07080a]"
      id="my-work"
    >
      <div className="max-w-[1500px] flex flex-col justify-center h-full">
        <div className=" pl-20">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-indigo-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-10 mr-10 pl-20">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              // style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96
              flex justify-center text-center items-start mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black"
            >
              {/* content-div */}
              {/* Hover effect for images */}
              <div>
                <h3>
                  <img src={item.image} alt={"projectImage"} />
                </h3>
                <div className="pt-4">
                  <h2 className="text-4xl font-bold">{item.name}</h2>
                  <div className="pt-4">
                    <p>{item.description}</p>
                  </div>
                </div>
                <h2 className="text-lg font-bold pt-4">
                  Tech Stack: {item.TechStack}
                </h2>
                <div className="flex flex-row gap-20 justify-center pt-4">
                  <button className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700">
                    {" "}
                    <a href={item.live}>Live</a>{" "}
                  </button>
                  <button className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700">
                    {" "}
                    <a href={item.github} target="_blank">
                      Github
                    </a>{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* <div>
<span className="text-2xl font-extrabold bg-black text-white border-slate-200 rounded text-center">
  {item.name}
</span>
<div className="pt-8 text-center ">

  <a href="/" target="_blank">
    <button
      className="text-center rounded-lg px-4 py-3 m-2
       bg-black text-white font-bold text-lg"
    >
      Code
    </button>
  </a>

  <a href="/" target="_blank">
    <button
      className="text-center rounded-lg px-4 py-3 m-2
       bg-black text-white font-bold text-lg"
    >
      Live
    </button>
  </a>
</div>
</div> */
}
