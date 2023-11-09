import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "./reduxcomponents/appSlice";
import { useSearchParams } from "react-router-dom";

import CommentsContainer from "./CommentsContainer";
import { DummyComments } from "./utils/Helper";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    toggleMenuFunc();
  }, []);
  const toggleMenuFunc = () => {
    dispatch(closemenu());
  };
  return (
    <div className="w-full grid grid-flow-col ">
      <div className="col-span-6">
        <div className="w-full">
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex justify-between w-full">
          <div>
            <h1 className="p-4">Prime Video</h1>
            <button className="p-4">Subscribe</button>
          </div>
          <div className="pt-12">
            <button className="p-2">like</button>
            <button className="p-2">dislike</button>
            <button className="p-2">Share</button>
            <button className="p-2">Download</button>
            <button className="p-2">....</button>
          </div>
        </div>
        <div className="m-8">
          <CommentsContainer DummyComments={DummyComments} />
        </div>
      </div>
      <div className="bg-black text-yellow-600 col-span-6 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et
        facilis inventore at illo amet quos ad! Nisi, assumenda, odit debitis
        animi reiciendis consequuntur alias nesciunt corporis, quam eius soluta.
      </div>
    </div>
  );
};

export default WatchPage;
