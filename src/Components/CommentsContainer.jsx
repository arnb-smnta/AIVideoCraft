import React from "react";
import CommentList from "./CommentList";

const CommentsContainer = ({ DummyComments }) => {
  return (
    <div className="w-72rem">
      <CommentList Dummycomments={DummyComments} />
    </div>
  );
};

export default CommentsContainer;
