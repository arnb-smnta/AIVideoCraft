import React from "react";
import ButtonCard from "./ButtonCard";

const ButtonList = () => {
  const names = [
    "Kapil Sharma",
    "ShareMarket",
    "React-code",
    "Microsoft",
    "Gsoc",
    "HactoberFest",
  ];

  return (
    <div>
      <div className="flex">
        {names.map((name) => (
          <ButtonCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
