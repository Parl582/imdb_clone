import SharedCompo from "@/components/SharedCompo";
import CommentModal from "@/components/movie-container/CommentModal";
import {
  handleAddFav,
  handleChange,
  handleRating,
} from "@/function/utilityFunctions";
import { MDetailsType } from "@/types";
import { Grip, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  console.log(params);

  const res = await fetch(
    `https://www.omdbapi.com/?i=${params.id}&apikey=3bfe041`
  );

  const data: MDetailsType = await res.json();

  console.log(data);
  return (
    <div className="bg-black min-h-[calc(100vh-60px)] text-white p-2 lg:px-20">
      <div className="w-full flex justify-end ">
        <div className="flex items-center gap-5 py-3 flex-wrap">
          <Link href={"#"} className="font-semibold">
            Cast & crew
          </Link>
          <Link href={"#"} className="font-semibold">
            User reviews
          </Link>
          <Link href={"#"} className="font-semibold">
            Trivia
          </Link>
          <Link href={"#"} className="font-semibold">
            FAQ
          </Link>
          <Link href={"#"} className="font-semibold">
            IMDbPro
          </Link>
          <Link href={"#"} className="flex gap-1">
            <Grip /> <span className="font-semibold">All Topic </span>
          </Link>
          <Share2 />
        </div>
      </div>
      {/* name container  */}
      <div className="w-full flex justify-between flex-wrap">
        <div className="">
          <h1 className="text-2xl lg:text-4xl text-yellow-400 md:max-w-[50vw]">
            {" "}
            {data.Title}{" "}
          </h1>
          <p className="text-sm text-slate-400 font-light py-2 flex gap-2">
            {data.Year}

            <span> R </span>

            <span> {data.Runtime} </span>
          </p>
        </div>
        <div className="flex gap-5  py-3">
          {data?.Ratings?.map((elm) => (
            <div className="" key={elm?.Source}>
              <h2 className="uppercase font-bold text-zinc-400 text-xs">
                {" "}
                {elm.Source}{" "}
              </h2>
              <p className="font-bold text-xl"> {elm?.Value}</p>
            </div>
          ))}
        </div>
      </div>
      {/* poster Section */}

      <div className="flex items-center h-[400px]  gap-1">
        <div className=" w-[280px] h-full relative">
          <Image src={data.Poster} fill alt={data.Title} />
        </div>
      </div>
      <div className="w-full flex items-end flex-wrap">
        <div className="w-full lg:w-3/4">
          <h1 className="py-3  text-sm font-normal">{data.Genre}</h1>
          <div className="divide-y-[1px] divide-gray-200/30 ">
            <p className="text-white py-3">{data.Plot}</p>

            <div className="flex gap-2 items-center py-3">
              <h2 className="font-bold"> Director: </h2>
              <SharedCompo> {data.Director} </SharedCompo>
            </div>
            <div className="flex gap-2 items-center py-3">
              <h2 className="font-bold"> Writers </h2>
              <SharedCompo> {data.Writer} </SharedCompo>
            </div>
            <div className="flex gap-2 items-center py-3">
              <h2 className="font-bold"> Stars </h2>
              <SharedCompo>{data?.Actors}</SharedCompo>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-1/4 flex  items-center py-5 lg:justify-center">
          <CommentModal
            handleAddFav={handleAddFav}
            handleRating={handleRating}
            rating="0"
            handleChange={handleChange}
            color={true}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
