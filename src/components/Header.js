import React from "react";

function Header() {
  return (
    <main className="flex justify-center items-center">
      <div className="flex justify-between items-center w-5/6 py-8">
        <p className="text-3xl font-bold text-gray-700">
          Pink<span className="text-red-400">Star</span>
        </p>
        <nav>
          <ul className="flex justify-center items-center space-x-8 text-gray-400">
            <li className="header-list-items text-red-400">
              <a href="#">home</a>
            </li>
            <li className="header-list-items">
              <a href="#">how it works</a>
            </li>
            <li className="header-list-items">
              <a href="#">explore</a>
            </li>
            <li className="header-list-items">
              <a href="#">review</a>
            </li>
            <li className="header-list-items">
              <a href="#">blog</a>
            </li>
            <li className="header-list-items">
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Header;
