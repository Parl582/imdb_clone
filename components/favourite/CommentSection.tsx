import React, { useState } from "react";

const CommentSection = ({ comments }: { comments: string }) => {
  const [showMore, setShowMore] = useState(true);
  return (
    <>
      <div className="text-white w-full ">
        <h2 className="font-semibold pt-3 text-sm text-yellow-400 w-full">
          Comments :
        </h2>
        <p className="text-zinc-300 text-xs w-full  break-words">
          {showMore ? comments?.slice(0, 60) : comments}
          {comments?.length > 60 && (
            <span
              className="text-xs cursor-pointer text-blue-500 px-2"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "...read more" : "hide"}
            </span>
          )}
        </p>
      </div>
    </>
  );
};

export default CommentSection;
