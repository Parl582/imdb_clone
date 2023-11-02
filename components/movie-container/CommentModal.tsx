"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookmarkCheck, Star } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Rating from "./Rating";

type props = {
  handleAddFav: () => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleRating: (rate: string) => void;
  rating: string;
  color?: boolean;
};

const CommentModal = ({
  handleAddFav,
  handleChange,
  handleRating,
  color,
  rating,
}: props) => {
  const [openRating, setOpenRating] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={`${color ? "yellowV" : "imdb"}`}
          className={`flex md:gap-2 gap-1 items-center  w-full ${
            color ? "text-black hover:text-white" : "text-[#4c7fc0]"
          }  md:text-base text-xs font-semibold`}
        >
          <BookmarkCheck className=" text-xl md:block hidden bg-transparent z-50" />
          Add to favorite
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-headerbg text-white">
        <DialogHeader>
          <DialogTitle>Do you want to add any comments </DialogTitle>
        </DialogHeader>

        <Textarea
          className="outline-none rounded-sm bg-black/30"
          onChange={handleChange}
        />

        <button className="flex gap-1 items-center text-sm text-sky-400">
          <Star size={14} /> <span>Rate </span>{" "}
        </button>
        {/* <Rating onClick={handleRating}
         */}
        <Rating rating={rating} handleRating={handleRating} />

        <DialogClose asChild>
          {/* Button */}
          <Button
            onClick={handleAddFav}
            className="bg-yellow-400 text-black hover:text-white "
          >
            {" "}
            Add to Favorite{" "}
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
