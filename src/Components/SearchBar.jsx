import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input type="text" className="w-3/4 border border-black rounded-l-full" />
      <button className="border border-black rounded-r-full">Search</button>
    </div>
  );
};

export default SearchBar;
