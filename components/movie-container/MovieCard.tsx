import React from "react";
import { BookmarkCheck } from "lucide-react";
import { SearchData } from "@/types";
import Image from "next/image";

const MovieCard = ({ Title, Year, imdbID, Poster }: SearchData) => {
  return (
    <div className="w-full xl:h-96 h-64 border cursor-pointer relative">
      <BookmarkCheck className="absolute top-1 left-0 text-xl text-white bg-transparent z-50" />

      {Poster && Poster !== "N/A" ? (
        <Image src={Poster} alt="Poster" fill className="w-full h-full z-40 " />
      ) : (
        <Image
          src={"/noImage.png"}
          alt="Poster"
          fill
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default MovieCard;
