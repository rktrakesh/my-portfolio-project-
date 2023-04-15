import React from "react";
import code from "../images/code.jpg";

const Analytics = () => {
  return (
    <div className="bg-white justify-center items-center text-center mt-44 py-14">
      <div className="max-w-[1240px] grid lg:grid-cols-2 mx-auto">
        <img
          className="justify-center items-center mx-auto py-8"
          src={code}
          alt=""
        />
        <div className="text-black text-left m-auto p-4">
          <p className="text-orange-600 md:text-lg lg:text-xl font-bold py-3">
            Java Backend Developer
          </p>
          <h1 className="font-bold md:text-2xl lg:text-3xl text-lg py-3">
            Develop Backend using RESTful API
          </h1>
          <p className="py-3 pb-7 md:text-lg">
            Software developer with a proven ability to solve problems
            efficiently and collaborate with teams to deliver timely
            high-quality creative solutions. Experience in developing
            applications using MVC architecture and Testing web services using
            POSTMAN
          </p>
          <button className="bg-black text-orange-600 font-medium font-serif py-[7px] px-9 mx-auto flex justify-center items-center rounded-lg md:mx-0 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
