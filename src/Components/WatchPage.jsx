import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "./reduxcomponents/appSlice";
import { useSearchParams } from "react-router-dom";

import CommentsContainer from "./CommentsContainer";
import { DummyComments } from "./utils/Helper";
import LiveChat from "./LiveChat";

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
    <div className=" grid grid-flow-col w-full">
      <div className="bg-yellow-600 w-[63rem]">
        <div className="">
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
        <div className="flex justify-between ">
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
      <div className=" text-yellow-600 m-2">
        <div className="h-[37rem] w-[22rem] border border-gray-500 p-2">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
