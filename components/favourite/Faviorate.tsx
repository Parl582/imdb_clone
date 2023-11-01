"use client";
import React from "react";
import MovieCard from "@/components/movie-container/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Favorite = () => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.favorite.value
  );

  console.log(favoriteMovies);
  return (
    <div className="w-full flex flex-wrap">
      {favoriteMovies?.map((elm) => (
        <div className="w-1/2 md:w-1/4 lg:w-1/5 p-2" key={elm.imdbID}>
          <MovieCard deleteBtn={true} {...elm} />
        </div>
      ))}
    </div>
  );
};

export default Favorite;
