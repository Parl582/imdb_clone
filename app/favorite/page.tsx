import Favorite from "@/components/favourite/Faviorate";
import Allmovies from "@/components/movie-container/Allmovies";
import MovieCard from "@/components/movie-container/MovieCard";
import React from "react";

const page = () => {
  return (
    <div className="bg-black min-h-[calc(100vh-60px)]">
      <Favorite />
    </div>
  );
};

export default page;
