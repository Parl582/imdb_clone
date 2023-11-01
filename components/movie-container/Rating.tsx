import { Star } from "lucide-react";
import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState<string | undefined>();
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((elm, i) => {
        let current = i + 1;
        return (
          <Star
            values={rating}
            onClick={() => setRating(current.toString())}
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
