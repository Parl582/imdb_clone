"use client";
import React, { useState } from "react";
import { BookmarkCheck, Trash2 } from "lucide-react";
import { SearchData } from "@/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromFavList, addToFavList } from "../redux/favSlice";

import CommentModal from "./CommentModal";

interface Props extends SearchData {
  deleteBtn?: boolean;
}

const MovieCard = ({ Title, Year, imdbID, Poster, deleteBtn }: Props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleAddFav = () => {
    dispatch(addToFavList({ Title, Year, imdbID, Poster, comments: comment }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleFavRemove = () => {
    dispatch(RemoveFromFavList(imdbID));
  };

  return (
    <>
      <div className="w-full xl:h-96 h-64 border cursor-pointer relative">
        {deleteBtn ? (
          <Trash2
            onClick={handleFavRemove}
            className="absolute top-1 left-0 text-xl text-red-800 bg-transparent z-50"
            size={30}
          />
        ) : (
          <CommentModal
            handleAddFav={handleAddFav}
            handleChange={handleChange}
          />
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
