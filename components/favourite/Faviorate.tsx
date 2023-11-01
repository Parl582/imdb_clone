"use client";
import React, { ReactNode, useState } from "react";
import MovieCard from "@/components/movie-container/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Rating from "../movie-container/Rating";

const Favorite = () => {
  const [showMore, setShowMore] = useState(true);
  const handleRating = () => {};
  const favoriteMovies = useSelector(
    (state: RootState) => state.favorite.value
  );

  return (
    <div className="w-full flex flex-wrap px-2 lg:px-20 md:px-11 py-7">
      {favoriteMovies?.map((elm) => (
        <div className="w-1/2 md:w-1/4 lg:w-1/5 p-2" key={elm.imdbID}>
          <MovieCard deleteBtn={true} {...elm} />

          {elm.rating && (
            <div className="text-blue-300 flex text-sm items-center gap-2">
              <span className=" font-semibold pt-3 text-blue-400">Rating</span>
              <Rating rating={elm.rating} handleRating={handleRating} />{" "}
            </div>
          )}

          {elm.comments && (
            <div className="text-white ">
              <h2 className="font-semibold pt-3 text-yellow-400">Comments :</h2>
              <p className="text-zinc-300 text-xs">
                {showMore ? elm?.comments?.slice(0, 60) : elm?.comments}
                {elm.comments.length > 30 ? (
                  <span
                    className="text-xs cursor-pointer text-blue-500 px-2"
                    onClick={() => setShowMore((prev) => !prev)}
                  >
                    {showMore ? "...read more" : "hide"}
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Favorite;
