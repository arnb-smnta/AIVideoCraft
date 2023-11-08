import React, { useEffect, useState } from "react";
import { ytLink } from "./utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoList = () => {
  const [movies, setmovies] = useState(null);
  useEffect(() => {
    getvideos();
  }, []);
  const dispatch = useDispatch();
  const getvideos = async () => {
    const data = await fetch(ytLink);
    const json = await data.json();

    setmovies(json.items);
  };

  if (!movies) return null;
  return (
    <div>
      <div className="flex flex-wrap">
        {movies.map((movie) => (
          <Link to={"/watch?v=" + movie.id} key={movie.id}>
            {" "}
            <VideoCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
