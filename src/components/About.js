import React from "react";
import { about } from "../data";

function About() {
  return (
    <div className="flex flex-col justify-center items-center my-24">
      {/* header */}
      <h1 className="mb-4 text-xl  uppercase text-gray-600 font-semibold tracking-wider">
        How it works
      </h1>
      <p className="text-sm text-gray-500">
        Learn More about how our website works
      </p>
      {/* cards */}
      <div className="mt-16 flex w-1/2 space-x-4">
        {about.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center shadow-lg w-1/3 p-6 hover:bg-red-400 group rounded transition duration-500 ease-in-out"
          >
            <div className="bg-gray-100 p-5 rounded-full text-gray-700 text-xl group-hover:text-red-400">
              {item.icon}
            </div>
            <a
              href="#"
              className="capitalize font-bold text-gray-600 my-4 group-hover:text-white"
            >
              {item.name}
            </a>
            <p className="text-gray-500 text-center text-xs group-hover:text-white">
              {item.text}
            </p>
            <button className="border rounded text-sm px-3 py-1 mt-6 group-hover:bg-white group-hover:text-red-400 capitalize">
              read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
