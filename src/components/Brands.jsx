import React from "react";
import { companyLogos } from "../constants";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="flex justify-center items-center flex-col py-10">
      <h5 className="mb-6 text-center text-n-1/50">
        Helped people create beautiful content at
      </h5>
      <Marquee>
        <div className="hide-scrollbar flex w-full items-center justify-start gap-20 overflow-x-auto mr-20">
          {companyLogos.map((logo, index) => (
            <>
              <img key={index} src={logo} alt={logo} />
            </>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
