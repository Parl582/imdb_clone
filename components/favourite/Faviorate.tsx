"use client";
import React, { ReactNode, useState } from "react";
import MovieCard from "@/components/movie-container/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Favorite = () => {
  const [showMore, setShowMore] = useState(true);
  const favoriteMovies = useSelector(
    (state: RootState) => state.favorite.value
  );

  //   const Comment = ({ text }: { text: string }) => {
  //     const [showMore, setShowMore] = useState(30);
  //     const renderData =
  //       text.length > 30 ? (
  //         <p>
  //           {text.slice(0, showMore)}
  //           <span onClick={() => setShowMore(text.length)}>..show more</span>
  //         </p>
  //       ) : (
  //         ""
  //       );
  //     return (
  //       <>
  //         <p>{renderData}</p>
  //       </>
  //     );
  //   };

  return (
    <div className="w-full flex flex-wrap">
      {favoriteMovies?.map((elm) => (
        <div className="w-1/2 md:w-1/4 lg:w-1/5 p-2" key={elm.imdbID}>
          <MovieCard deleteBtn={true} {...elm} />
          <h1 className="text-white line-clamp-2"> {elm.Title} </h1>
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
