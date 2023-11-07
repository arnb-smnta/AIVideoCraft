import React from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./reduxcomponents/appSlice";
import appstore from "./reduxcomponents/appstore";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuFunc = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <img
        src="https://static.vecteezy.com/system/resources/previews/010/896/688/original/menu-icon-sign-symbol-design-free-png.png"
        alt="Burger MEnu"
        className="col-span-1 h-8 cursor-pointer"
        onClick={toggleMenuFunc}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
        alt="Youtube -logo"
        className="col-span-2 h-8"
      />

      <div className="col-span-8 h-8">
        <SearchBar />
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/5569/5569626.png"
        alt="User Photo"
        className="col-span-1 pl-36 h-8"
      />
    </div>
  );
};

export default Header;
