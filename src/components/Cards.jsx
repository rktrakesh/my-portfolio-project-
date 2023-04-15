import React from "react";
import Java from "../images/java.png";
import Javascript from "../images/javascript.png";
import Sql from "../images/sql.png";

const Cards = () => {
  return (
    <div className="w-full px-4 py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="w-full flex flex-col my-4 p-4 shadow-xl hover:scale-105 duration-300">
          <img
            className="w-16 mx-auto mt-[3rem] bg-white"
            src={Java}
            alt="img"
          />
          <h1 className="font-bold md:text-2xl text-lg mx-auto justify-center text-center py-7">
            JAVA
          </h1>
          <p className="font-bold md:text-3xl text-2xl mx-auto justify-center text-center pb-6">
            Skills
          </p>
          <div>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              Develope back-end using java
            </p>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              Hibernate/JPA
            </p>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              Micro-service & Web-services
            </p>
          </div>
          <button className="bg-black text-orange-600 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 cursor-pointer flex items-center justify-center">
            Enter
          </button>
        </div>

        <div className="w-full md:my-0 flex flex-col my-4 p-4 shadow-xl hover:scale-105 duration-300">
          <img
            className="w-16 mx-auto mt-[3rem] bg-white"
            src={Javascript}
            alt="img"
          />
          <h1 className="font-bold md:text-2xl text-lg mx-auto justify-center text-center py-7">
            JavaScript
          </h1>
          <p className="font-bold md:text-3xl text-2xl mx-auto justify-center text-center pb-6">
            Skills
          </p>
          <div>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              Develope frontend using React JS
            </p>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              HTML
            </p>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              tailwind css
            </p>
          </div>
          <button className="bg-orange-600 text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 cursor-pointer flex items-center justify-center">
            Enter
          </button>
        </div>

        <div className="w-full flex flex-col my-4 p-4 shadow-xl hover:scale-105 duration-300">
          <img
            className="w-16 mx-auto mt-[3rem] bg-white"
            src={Sql}
            alt="img"
          />
          <h1 className="font-bold md:text-2xl text-lg mx-auto justify-center text-center py-7">
            Sql
          </h1>
          <p className="font-bold md:text-3xl text-2xl mx-auto justify-center text-center pb-6">
            Skills
          </p>
          <div>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              Managing data using DB
            </p>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              MySQL
            </p>
            <p className="md:text-lg mx-auto justify-center text-center py-3 border border-b px-2">
              Using Hibernate
            </p>
          </div>
          <button className="bg-black text-orange-600 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3 cursor-pointer flex items-center justify-center">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
