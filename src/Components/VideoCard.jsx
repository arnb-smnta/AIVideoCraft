import React from "react";

const VideoCard = ({ movie }) => {
  const { snippet, statistics } = movie;
  const { title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <div>
        <img src={thumbnails.medium.url} alt="" />
      </div>
      <div>
        <h1 className="font-bold">{title}</h1>
        <h2>{snippet.channelTitle}</h2>
        <h3>{statistics.viewCount} views</h3>
      </div>
    </div>
  );
};

export default VideoCard;
