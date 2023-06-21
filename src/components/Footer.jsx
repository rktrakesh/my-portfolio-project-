import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-14 text-gray-200">
      <div>
        <h1 className="w-full text-3xl font-bold text-orange-600 mx-auto flex justify-center text-center">
          RKT Rakesh
        </h1>
        <p className="text-sm mx-auto flex justify-center text-center py-10 px-10">
          As a Backend Developer, I am managing the exchange of data between the
          server and the users. Focusing on the development of all server-side
          logic, maintenance, and ensuring high performance and responsiveness.
        </p>
        <div className="flex justify-between items-center w-[20%] mx-auto">
          <FaTwitter className="hover:scale-150 duration-300" />
          <FaInstagram className="hover:scale-150 duration-300" />
          <FaGithub className="hover:scale-150 duration-300" />
          <BsFacebook className="hover:scale-150 duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
