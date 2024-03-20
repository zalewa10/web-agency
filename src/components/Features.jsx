import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="" id="features">
      <div className="py-10">
        <p className="h1 font-semibold text-center  text-white">
          Advanced{" "}
          <span className="text-color-zielony italic "> technology </span>{" "}
          <br className="md:hidden" />
          at your fingertips
        </p>
      </div>
      <FeatureCard />
    </section>
  );
};

export default Features;
