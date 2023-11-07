import React from "react";

const ButtonCard = ({ name }) => {
  return (
    <div>
      <button className="rounded-lg px-5 py-2 m-2 bg-gray-200"> {name}</button>
    </div>
  );
};

export default ButtonCard;
