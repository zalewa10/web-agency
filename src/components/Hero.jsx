import React from "react";
import { edit, idea, logo, vsc } from "../assets";
import Button from "./Button";
import Brands from "./Brands";

const Hero = () => {
  return (
    <section className="mx-5 py-20">
      <div className="relative">
        <div className="flex flex-col items-center relative">
          <div className="flex items-center gap-1 bg-white/10 p-2 mb-3 rounded-2xl">
            <img src={idea} alt="logo" width={16} height={16} />
            <p className="text-white/90 text-sm">
              Transforming Ideas Into Reality
            </p>
          </div>

          <h1 className="h1 text-white text-center">
            Crafting Digital Dreams: <br className="hidden md:block" />
            <span>
              {"{"}
              <span className="text-color-zielony italic">Web</span>
              {" }"}
            </span>{" "}
            Excellence Delivered!
          </h1>

          <p className="text-n-1/50 text-center max-w-xl py-5">
            Our agency helps businesses to grow their online presence by
            developing websites, apps and creating unique branding experiences
          </p>

          <div className="flex gap-5">
            <Button
              title="See more"
              href="#features"
              color="zielony"
              className="bg-color-zielony w-36 text-gray-900"
            />
            {/* <Button title="Our Portfolio" href="/" color="fiolet" /> */}
          </div>
        </div>

        <div className="min-h-[15vh] gradient relative rounded-b-3xl flex justify-center">
          <div className="absolute top-20 px-5 lg:px-20 w-full ">
            <img
              src={vsc}
              alt="edit"
              className="rounded-2xl border-[6px] border-violet-400/40 w-full max-w-4xl mx-auto"
            />
          </div>
        </div>

        <div className="mt-[25vh] sm:mt-[30vh] md:mt-[40vh]">
          <Brands />
        </div>
      </div>
    </section>
  );
};

export default Hero;
