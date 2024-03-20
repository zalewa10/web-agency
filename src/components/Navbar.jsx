import React from "react";
import { navlinks } from "../constants";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="max-container">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-baseline gap-2">
          <img src="/hilink-logo.svg" alt="logo" width={80} height={80} />
        </div>
        <ul className="hidden h-full gap-12 lg:flex">
          {navlinks.map((link, i) => (
            <a
              href="/"
              key={i}
              className="font-semibold  text-gray-50 transition-all hover:text-color-zielony"
            >
              {link.title}
            </a>
          ))}
        </ul>
        <Button title="Contact us" color="fiolet" href="#newsletter" />
      </div>
    </nav>
  );
};

export default Navbar;
