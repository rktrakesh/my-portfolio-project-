import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-24 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 mb-6">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2">
            Want to work with me?
          </h1>
          <p>You can contact me by sending emails! Let's do this.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row w-full items-center justify-between">
            <input
              className="p-3 flex w-full rounded-lg text-black"
              type="email"
              placeholder="Enter email address"
            />
            <button className="bg-orange-600 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
