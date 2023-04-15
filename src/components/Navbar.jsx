import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-center items-center max-w-[1240px] h-24 mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-orange-600">RKT Rakesh</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Skills</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#111111] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-orange-600 m-4">
          RKT Rakesh
        </h1>
        <ul className="uppercase p-3">
          <li className="p-4 cursor-pointer border-b border-b-gray-600">
            Home
          </li>
          <li className="p-4 cursor-pointer border-b border-b-gray-600">
            Skills
          </li>
          <li className="p-4 cursor-pointer border-b border-b-gray-600">
            About
          </li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
