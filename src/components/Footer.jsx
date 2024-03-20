import { navlinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-contianer m-5 rounded-xl min-h-[10vh] bg-[#1A202C]">
      <div className="p-5 flex justify-between items-start">
        <img src="/hilink-logo.svg" alt="logo" width={60} height={60} />
        <ul className="grid grid-cols-3 md:flex  md:flex-row gap-5 ">
          {navlinks.map((link, i) => (
            <a
              href="/"
              key={i}
              className="font-light text-xs md:text-sm  text-gray-50 transition-all hover:text-color-zielony"
            >
              {link.title}
            </a>
          ))}
        </ul>
      </div>
      <div className="border border-color-zielony opacity-50" />
      <p className="text-xs md:regular-14 w-full text-center text-gray-200 p-3">
        2023 Hilink | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
