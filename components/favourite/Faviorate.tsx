"use client";
import React, { ReactNode, useState } from "react";
import MovieCard from "@/components/movie-container/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Rating from "../movie-container/Rating";
import CommentSection from "./CommentSection";

const Favorite = () => {
  const handleRating = () => {};

  // get all user favorite movie from redux store
  const favoriteMovies = useSelector(
    (state: RootState) => state.favorite.value
  );

  if (favoriteMovies.length === 0) {
    return (
      <div className="flex w-full items-center justify-center h-[50vh]">
        <h1 className="text-2xl lg:text-3xl text-zinc-600">No favorites yet</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap px-2 lg:px-20 md:px-11 py-7">
      {favoriteMovies?.map((elm) => (
        <div className="w-1/3 md:w-1/4 lg:w-1/6 p-2" key={elm.imdbID}>
          {/* movie card  */}
          <MovieCard deleteBtn={true} {...elm} />
          {/* user rating section  */}
          {elm.rating && (
            <div className="text-blue-300  text-xs">
              <h1 className=" font-semibold pt-3 text-blue-400">Rating</h1>
              <Rating rating={elm.rating} handleRating={handleRating} />{" "}
            </div>
          )}
          {/* user comment section  */}
          {elm.comments && <CommentSection comments={elm.comments} />}
        </div>
      ))}
    </div>
  );
};

export default Favorite;
