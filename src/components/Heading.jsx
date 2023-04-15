import React from "react";
import Typed from "react-typed";

const Heading = () => {
  return (
    <div className="text-white  max-w-[680px] flex-col justify-center items-center text-center mt-40 mx-auto">
      <p className="text-orange-600 md:text-xl lg:text-2xl text lg py-3 uppercase font-serif font-bold">
        Web APP Developer
      </p>
      <h1 className="font-bold md:text-3xl lg:text-4xl text-2xl py-4">
        Develope Backend using RESTful API
      </h1>
      <div className="flex mx-auto justify-center text-center">
        <p className="font-bold md:text-lg lg:text-xl text-sm py-3 pr-1">
          Tool and technology used to develope the project
        </p>
        <Typed
          className="font-bold text-orange-600 md:text-lg lg:text-xl text-sm py-3"
          strings={["React JS", "tailwind css", "VS code"]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </div>
      <button className="bg-orange-600 text-black font-bold font-serif mt-5 py-[7px] px-9 rounded-lg cursor-pointer">
        Get Started
      </button>
    </div>
  );
};

export default Heading;
