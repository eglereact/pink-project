import React from "react";
import { BsCrosshair, BsListStars, BsSearch } from "react-icons/bs";
import { destinations } from "../data";

function Banner() {
  return (
    <div className="h-[800px] bg-image bg-no-repeat mb-32">
      <div className="flex flex-col h-full justify-center items-center">
        <h1 className="text-white text-4xl font-bold uppercase tracking-widest py-6 w-1/2 text-center">
          best place to find and explore that all you need
        </h1>
        <p className="text-white font-semibold">
          Find Best Place, Restaurant, Hotel, Real State and many more think in
          just One click
        </p>
        <form className="flex my-10">
          <div className="flex justify-center items-center bg-white p-5 rounded-l">
            <h3 className="text-gray-800 font-semibold pr-2">What?</h3>
            <input
              className="outline-none w-[260px]"
              placeholder="Ex. Place, Restaurant, Food, Car"
            />
            <BsListStars className="text-gray-800 font-semibold pl-2 text-3xl" />
          </div>
          <div className="flex justify-center items-center bg-white p-5 rounded-r">
            <h3 className="text-gray-800 font-semibold pr-2">Location</h3>
            <input
              className="outline-none w-[260px]"
              placeholder="Ex. London, New York, Rome"
            />
            <BsCrosshair className="text-gray-800 font-semibold pl-2 text-2xl" />
          </div>
          <button className="flex justify-center items-center bg-red-400 rounded text-white px-8 ml-4 transition duration-300 ease-in-out hover:bg-red-500">
            Search <BsSearch className="ml-2" />
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center -m-20 space-x-6">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="bg-white h-36 w-40 shadow-xl rounded flex flex-col justify-center items-center space-y-1"
          >
            <span className="text-2xl">{item.icon}</span>
            <h1 className="font-semibold capitalize">{item.name}</h1>
            <p className="text-gray-500 text-xs">{item.number} listings</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
