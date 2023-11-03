import MovieDetails from "@/components/movie-details/MovieDetails";
import { MDetailsType } from "@/types";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${params.id}&apikey=3bfe041`
  );
  if (!res) {
    return <div className="text-white text-2xl"> Something Went wrong </div>;
  }
  const data: MDetailsType = await res.json();
  return <MovieDetails data={data} />;
};

export default page;
