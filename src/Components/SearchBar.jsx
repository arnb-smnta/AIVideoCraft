import React, { useState } from "react";

const SearchBar = ({
  querystring,
  changequerystring,
  suggestion,
  suggestiontoggle,
  togglesuggestion,
}) => {
  return (
    <div className="flex justify-center">
      <div className="">
        <div>
          <input
            type="text"
            className="w-3/4 border border-black rounded-l-full"
            value={querystring}
            onChange={(e) => changequerystring(e)}
            onFocus={() => togglesuggestion(true)}
            onBlur={() => togglesuggestion(false)}
          />
          <button className="border border-black rounded-r-full">Search</button>
        </div>
        {suggestiontoggle ? (
          <div className="absolute bg-gray-50 w-[14rem] rounded-lg border border-gray">
            <ul>
              {suggestion.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
