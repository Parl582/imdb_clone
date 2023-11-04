import MovieDetails from "@/components/movie-container/MovieDetails";
import { MDetailsType } from "@/types";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `IMDb | ${params.id}`,
    description: "this is user favorite Movie list Page",
  };
}

// get single movie details by its id
const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${params.id}&apikey=${process.env.API_KEY}`
  );
  if (!res) {
    return <div className="text-white text-2xl"> Something Went wrong </div>;
  }
  const data: MDetailsType = await res.json();
  return <MovieDetails data={data} />;
};

export default page;
