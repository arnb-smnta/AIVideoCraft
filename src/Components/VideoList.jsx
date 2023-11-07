import React, { useEffect } from "react";
import { ytLink } from "./utils/Constants";

const VideoList = () => {
  useEffect(() => {
    getvideos();
  }, []);
  const getvideos = async () => {
    const data = await fetch(ytLink);
    const json = await data.json;
    console.log(json);
  };
  return <div>VideoList</div>;
};

export default VideoList;
