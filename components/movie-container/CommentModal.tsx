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
  handleRating: (rate: number) => void;
};

const CommentModal = ({ handleAddFav, handleChange, handleRating }: props) => {
  const [openRating, setOpenRating] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"imdb"}
          className="flex gap-2 items-center w-full text-[#4c7fc0] font-semibold"
        >
          <BookmarkCheck className=" text-xl  bg-transparent z-50" />
          Add to favorite
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Do you want to add any comments </DialogTitle>
        </DialogHeader>

        <Textarea className="outline-none rounded-sm" onChange={handleChange} />

        <button className="flex gap-1 items-center text-sm text-sky-400">
          <Star size={14} /> <span>Rate </span>{" "}
        </button>
        {/* <Rating onClick={handleRating}
         */}
        <Rating />

        <DialogClose asChild>
          {/* Button */}
          <Button onClick={handleAddFav}> Add to Favorite </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
