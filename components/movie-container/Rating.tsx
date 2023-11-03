import { Star } from "lucide-react";
import React, { useState } from "react";

type props = {
  handleRating: (rating: string) => void;
  rating: string;
};

const Rating = ({ handleRating, rating }: props) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((elm, i) => {
        let current = i + 1;
        return (
          <Star
            size={20}
            strokeWidth={3}
            key={i}
            values={rating}
            onClick={() => handleRating(current.toString())}
            className={`cursor-pointer ${
              current <= Number(rating) ? "text-yellow-400" : ""
            } `}
          />
        );
      })}
    </div>
  );
};

export default Rating;
