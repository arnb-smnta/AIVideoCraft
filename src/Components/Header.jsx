import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./reduxcomponents/appSlice";
import { Link } from "react-router-dom";
import { ytSearchLink } from "./utils/Constants";
import { updateSuggestions } from "./reduxcomponents/searchsuggestionslice";

const Header = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((appstore) => appstore.search);
  const [querystring, setquerystring] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [suggestiontoggle, setsuggestiontoggle] = useState(false);
  const togglesuggestion = (e) => {
    setsuggestiontoggle(e);
  };
  useEffect(() => {
    const timing = setTimeout(() => {
      if (searchResults[querystring]) {
        setsuggestion(searchResults[querystring]);
      } else {
        searchresults();
      }
    }, 200);

    return () => {
      clearTimeout(timing);
    };
  }, [querystring]);

  const searchresults = async () => {
    console.log("api fetch -" + querystring);
    const data = await fetch(ytSearchLink + querystring);
    const json = await data.json();
    console.log(json[1]);
    setsuggestion(json[1]);
    console.log({ [querystring]: json[1] });

    dispatch(updateSuggestions({ [querystring]: json[1] }));
  };

  const changequerystring = (e) => {
    setquerystring(e.target.value);
  };

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

      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="Youtube -logo"
          className="col-span-2 h-8"
        />
      </a>

      <div className="col-span-8 h-8">
        <SearchBar
          querystring={querystring}
          changequerystring={changequerystring}
          suggestion={suggestion}
          suggestiontoggle={suggestiontoggle}
          togglesuggestion={togglesuggestion}
        />
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
