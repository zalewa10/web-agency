import React from "react";
import { tlo } from "../assets/index";

const Newsletter = () => {
  return (
    <section className="py-40 bg-bg-tlo relative" id="newsletter">
      <img src={tlo} alt="tlo" className="absolute top-2 opacity-45" />

      <div className="relative  p-5">
        <h3 className="h3 font-semibold text-center max-w-2xl mx-auto text-white">
          Stay in touch with latest news!
        </h3>
        <p className="text-[#A5A5A5] text-center max-w-lg py-5 mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sapiente
          id veritatis rem incidunt excepturi.
        </p>
        <div className="flex justify-center items-center w-full mt-10 ">
          <div className="flex border-2 border-gray-700 rounded-md shadow-lg">
            <input
              type="text"
              className="bg-transparent p-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-color-zielony focus:border-transparent"
              placeholder="Your E-mail"
            />
            <button className="bg-color-zielony text-white font-bold py-2 px-4 text-sm md:text-base rounded-lg  m-2 hover:bg-color-fiolet transition ease-in-out">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
