import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookmarkCheck } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

type props = {
  addFav: () => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CommentModal = ({ addFav, handleChange }: props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <BookmarkCheck className="absolute top-1 left-0 text-xl text-white bg-transparent z-50" />
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Do you want to add any comments </DialogTitle>
        </DialogHeader>

        <Textarea className="outline-none" onChange={handleChange} />

        <DialogClose asChild>
          {/* <Button onClick={editTask}>Save changes</Button>7 */}
          <Button onClick={addFav}> Add to Favorite </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CommentModal;
