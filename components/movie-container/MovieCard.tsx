"use client";
import React, { useState } from "react";
import { BookmarkCheck, Trash2 } from "lucide-react";
import { SearchData } from "@/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromFavList, addToFavList } from "../redux/favSlice";

import CommentModal from "./CommentModal";
import { Button } from "../ui/button";

interface Props extends SearchData {
  deleteBtn?: boolean;
}

const MovieCard = ({ Title, Year, imdbID, Poster, deleteBtn }: Props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [ratingValue, setRatingValue] = useState("0");
  const handleRating = (rate: string) => {
    setRatingValue(rate);
  };

  const handleAddFav = () => {
    dispatch(
      addToFavList({
        Title,
        Year,
        imdbID,
        Poster,
        comments: comment,
        rating: ratingValue,
      })
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleFavRemove = () => {
    dispatch(RemoveFromFavList(imdbID));
  };

  return (
    <div className="bg-headerbg w-full rounded-b-[5px]  overflow-hidden">
      <div className="w-full lg:h-80 h-60  cursor-pointer relative overflow-hidden">
        {Poster && Poster !== "N/A" ? (
          <Image
            src={Poster}
            alt="Poster"
            fill
            className="w-full h-full z-40  "
          />
        ) : (
          <Image
            src={"/noImage.png"}
            alt="Poster"
            fill
            className="w-full h-full "
          />
        )}
      </div>

      <div className="w-full bg-headerbg px-2 py-4 h-40  flex flex-col justify-between">
        <span className=" w-full m text-xs text-slate-400 md:text-sm">
          {Year}
        </span>
        <h1 className="text-white w-full  line-clamp-2 text-sm md:text-base">
          {Title}
        </h1>

        {/* button  */}

        {deleteBtn ? (
          <Button
            variant={"imdb"}
            className="flex gap-2 items-center w-full text-[#4c7fc0] font-semibold"
            onClick={handleFavRemove}
          >
            <Trash2 className=" text-xl  bg-transparent z-50" />
            Remove
          </Button>
        ) : (
          <CommentModal
            handleAddFav={handleAddFav}
            handleChange={handleChange}
            handleRating={handleRating}
            rating={ratingValue}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
