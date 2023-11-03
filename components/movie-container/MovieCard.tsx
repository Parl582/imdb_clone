"use client";
import React, { useState } from "react";
import { BookmarkCheck, Link, Trash2 } from "lucide-react";
import { SearchData } from "@/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromFavList, addToFavList } from "../redux/favSlice";

import CommentModal from "./CommentModal";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { RootState } from "../redux/store";

interface Props extends SearchData {
  deleteBtn?: boolean;
}

const MovieCard = ({ Title, Year, imdbID, Poster, deleteBtn }: Props) => {
  const Router = useRouter();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const handleRating = (rate: string) => {
    setRatingValue(rate);
  };

  const favListItem = useSelector((state: RootState) => state.favorite?.value);

  let alreadyInFavList = favListItem.some((elm) => elm.imdbID == imdbID);
  console.log(alreadyInFavList);

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
    <div className="bg-headerbg w-full rounded-b-[4px]  overflow-hidden">
      <div
        className="w-full lg:h-72 h-52  cursor-pointer relative overflow-hidden"
        onClick={() => Router.push(`/${imdbID}`)}
      >
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

      <div className="w-full bg-headerbg md:px-2 px-1 py-4 md:h-40 h-32  flex flex-col justify-between">
        <span className=" w-full m text-xs text-slate-400 md:text-sm">
          {Year}
        </span>
        <h1 className="text-white w-full  line-clamp-2 text-xs md:text-base">
          {Title}
        </h1>

        {/* button  */}

        {alreadyInFavList ? (
          <Button
            variant={"imdb"}
            className={`flex gap-2 items-center w-full ${
              deleteBtn ? "text-red-500" : "text-[#4c7fc0] bg-yellow-400"
            } font-semibold `}
            onClick={handleFavRemove}
          >
            {deleteBtn ? (
              <>
                <Trash2 className=" text-xl  bg-transparent z-50" />
                Remove
              </>
            ) : (
              "Add to favorite"
            )}
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
