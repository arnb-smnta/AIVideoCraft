import React from "react";
import Commentsskeleton from "./Commentsskeleton";

const CommentList = ({ Dummycomments }) => {
  return Dummycomments.map((c) => (
    <div>
      <div>
        <Commentsskeleton Dummycomments={c} />
      </div>
      <div className="pl-5 border border-l-black">
        <CommentList Dummycomments={c.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
