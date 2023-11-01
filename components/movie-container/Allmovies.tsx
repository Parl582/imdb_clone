import React from "react";
import MovieCard from "./MovieCard";
import { SearchData } from "@/types";
import Pagination from "./Pagination";

type dataTypes = {
  Search: SearchData[];
  totalResults: string;
};

const Allmovies = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams?.page === "string" ? Number(searchParams?.page) : 1;
  const search = searchParams?.search ?? "Batman";

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=3bfe041&s=${search}&page=${page}`
  );
  if (!res) {
    return <div>No Data</div>;
  }

  const data: dataTypes = await res.json();
  const totalItem = data.totalResults;
  const ItemPerPage = data?.Search?.length;

  console.log(data);
  return (
    <div className="w-full px-4 md:px-11 flex flex-wrap">
      {data?.Search?.map((elm) => (
        <div className="w-1/3 md:w-1/5 lg:w-1/6 p-2 " key={elm.imdbID}>
          <MovieCard {...elm} />
        </div>
      ))}
      <Pagination
        total={totalItem}
        ItemPerPage={ItemPerPage}
        search={search}
        page={page}
      />
    </div>
  );
};

export default Allmovies;
