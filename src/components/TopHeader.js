import React from "react";
import { BsSearch } from "react-icons/bs";

function TopHeader() {
  return (
    <main className="flex justify-between border-b border-gray-100 mt-10">
      <div className="flex justify-between align-middle">
        <div className="top-header-select">
          <select className="top-header-options">
            <option value="en">en</option>
            <option value="lt">lt</option>
            <option value="sp">es</option>
          </select>
        </div>
        <div className="top-header-select">
          <select className="top-header-options">
            <option value="usd">usd</option>
            <option value="eur">eur</option>
            <option value="gbp">gbp</option>
          </select>
        </div>
        <div className="flex justify-center items-center  px-4 text-gray-500 text-sm border-r border-gray-100 cursor-pointer">
          <BsSearch />
        </div>
      </div>
      <div className="flex justify-between align-middle space-x-4 text-gray-500 capitalize">
        <div className="top-header-contact ">+123 456 7890</div>
        <div className="top-header-contact cursor-pointer hover:text-red-400">
          sign in
        </div>
        <div className="top-header-contact cursor-pointer hover:text-red-400">
          register
        </div>
      </div>
    </main>
  );
}

export default TopHeader;
