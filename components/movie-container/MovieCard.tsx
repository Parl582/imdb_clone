"use client";
import React, { useState } from "react";
import { BookmarkCheck } from "lucide-react";
import { SearchData } from "@/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToFavList } from "../redux/favSlice";
import { RootState } from "../redux/store";
import CommentModal from "./CommentModal";

interface Props extends SearchData {
  deleteBtn?: boolean;
}

const MovieCard = ({ Title, Year, imdbID, Poster, deleteBtn }: Props) => {
  const dispatch = useDispatch();
  const getFav = useSelector((state: RootState) => state?.favorite.value);
  const [comment, setComment] = useState("");

  const addFav = () => {
    dispatch(addToFavList({ Title, Year, imdbID, Poster, comments: comment }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // console.log(comment);

  console.log(getFav);

  return (
    <>
      <div className="w-full xl:h-96 h-64 border cursor-pointer relative">
        {/* <BookmarkCheck
          className="absolute top-1 left-0 text-xl text-white bg-transparent z-50"
          onClick={addFav}
        /> */}
        {deleteBtn ? (
          " "
        ) : (
          <CommentModal addFav={addFav} handleChange={handleChange} />
        )}

        {Poster && Poster !== "N/A" ? (
          <Image
            src={Poster}
            alt="Poster"
            fill
            className="w-full h-full z-40 "
          />
        ) : (
          <Image
            src={"/noImage.png"}
            alt="Poster"
            fill
            className="w-full h-full"
          />
        )}
      </div>
    </>
  );
};

export default MovieCard;
