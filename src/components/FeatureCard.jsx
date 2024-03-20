import { features } from "../constants";
import Button from "./Button";

const FeatureCard = () => {
  return (
    <div>
      {features.map((card, id) => (
        <div
          className={`flex flex-col justify-center items-center gap-10 md:flex-row p-10 ${
            id === 1 && "md:flex-row-reverse"
          }`}
        >
          <div className={`flex flex-col gap-2`}>
            <p className="uppercase text-sm lg:text-lg text-n-13 font-bold">
              {card.title}
            </p>
            <p className="text-2xl lg:text-4xl text-white font-semibold py-2">
              {card.text}
            </p>
            <p className="text-[#D7DEDC] leading-5 text-sm lg:text-lg max-w-xl">
              {card.subtext}
            </p>
            <Button
              title="Learn more"
              color="fiolet"
              href="/"
              className="bg-color-fiolet mt-3"
            />
          </div>

          <img
            src={card.img}
            alt={card.title}
            width={570}
            height={570}
            className="md:max-w-[40%]"
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
